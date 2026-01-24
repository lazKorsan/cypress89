Feature: Google Search

  Scenario: Search for Cypress
    Given I open the Google homepage
    When I search for "Cypress"
    Then I should see results related to "Cypress"
