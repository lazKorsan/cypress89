/// <reference types="cypress" />

import { LoyalSearchMethod } from '../Methods/LoyalMethods';

// 1. ADIM: DataProvider gibi çalışacak veri setimizi tanımlıyoruz
// Bu veriler TestData.js'den de gelebilir, JSON dosyasından da.
const aranacakKelimeler = [
  "re",
  "ra",
  "me",
  "cat"
];

describe('Data Provider Mantığı ile Arama Testi', () => {

  // 2. ADIM: Veri seti üzerindeki her eleman için döngü kuruyoruz
  aranacakKelimeler.forEach((kelime) => {

    // 3. ADIM: Her veri için dinamik bir test (it) oluşturuyoruz
    // Test ismine ${kelime} ekleyerek hangi verinin koştuğunu raporda görüyoruz
    it(`Kullanıcı "${kelime}" kelimesini aratır`, () => {

      // Metodu o anki veri ile çağırıyoruz
      LoyalSearchMethod(kelime);

    });

  });

});
