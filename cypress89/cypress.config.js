const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    // ====== PERFORMANS AYARLARI ======
   // baseUrl: "http://localhost:3000", // PROJE URL'İNİ YAZ
    viewportWidth: 1920,
    viewportHeight: 1080,

    // ====== TIMEOUT AYARLARI ======
    defaultCommandTimeout: 10000,      // 10 saniye
    execTimeout: 60000,                // 1 dakika
    taskTimeout: 60000,
    pageLoadTimeout: 30000,            // 30 saniye
    requestTimeout: 5000,              // 5 saniye
    responseTimeout: 30000,

    // ====== TEST & DEBUG AYARLARI ======
    experimentalStudio: true,          // Studio aktif
    specPattern: "**/*.{cy.js,feature}",

    // ====== PERFORMANS ARTIRICI AYARLAR ======
    video: false,                      // Hız için: false
    screenshotOnRunFailure: true,      // Hata anında screenshot
    trashAssetsBeforeRuns: true,       // Önceki run'ları temizle
    watchForFileChanges: false,        // Hız için: false
    experimentalMemoryManagement: true, // Bellek optimizasyonu

    // ====== UNCAUGHT EXCEPTION AYARI ======
    // React/Vue null hatalarını ignore etmek için
    // (support/e2e.js'de daha detaylı ayar yapacağız)

    // ====== SESSION & STATE AYARLARI ======
    experimentalSessionAndOrigin: true, // Oturum koruma
    testIsolation: false,              // Testler arası state koru

    // ====== SETUP NODE EVENTS ======
    async setupNodeEvents(on, config) {
      // Cucumber plugin'ini yapılandırmaya ekle
      await addCucumberPreprocessorPlugin(on, config);

      // 1. .feature dosyaları için Cucumber eklentili bundler
      const featureBundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      // 2. .cy.js dosyaları için SADE bundler (Studio için bu gerekli)
      const jsBundler = createBundler({
        sourcemap: "inline" // Studio'nun kodu okuyabilmesi için
      });

      on("file:preprocessor", (file) => {
        // Eğer dosya .feature ise featureBundler kullan
        if (file.filePath.endsWith(".feature")) {
          return featureBundler(file);
        }
        // Diğer tüm dosyalar (.cy.js vb.) için jsBundler kullan
        return jsBundler(file);
      });

      // ====== UNCAUGHT EXCEPTION HANDLER ======
      on('task', {
        logError(message) {
          console.error('Ignored error:', message);
          return null;
        }
      });

      // ====== BROWSER LAUNCH OPTIMIZATION ======
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium') {
          // Chrome performance flags
          launchOptions.args.push('--disable-gpu');
          launchOptions.args.push('--disable-software-rasterizer');
          launchOptions.args.push('--disable-dev-shm-usage');
          launchOptions.args.push('--no-sandbox');
          launchOptions.args.push('--disable-background-timer-throttling');
          launchOptions.args.push('--disable-backgrounding-occluded-windows');
          launchOptions.args.push('--disable-renderer-backgrounding');
          launchOptions.args.push('--disable-features=VizDisplayCompositor');

          // Network/performance
          launchOptions.args.push('--disable-features=GlobalMediaControls');
          launchOptions.args.push('--disable-features=site-per-process');
        }
        return launchOptions;
      });

      return config;
    },
  },

  // ====== GLOBAL AYARLAR ======
  numTestsKeptInMemory: 25,            // RAM optimizasyonu
  retries: {
    runMode: 1,                        // CI'da 1 retry
    openMode: 0                        // Local'da retry yok
  },

  // ====== REPORTER AYARLARI ======
  reporter: "spec",                    // Varsayılan reporter
  reporterOptions: {
    // Mochawesome gibi reporter için
    // reportDir: "cypress/reports",
    // overwrite: false,
    // html: true,
    // json: false
  }
});