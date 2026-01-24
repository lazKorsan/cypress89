Feature: Google Search Functionality

  Scenario: Search for Cypress on Google
    Given I am on the Google homepage
    When I search for "Cypress"
    Then I should see results containing "Cypress"