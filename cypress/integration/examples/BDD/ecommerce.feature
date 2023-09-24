Feature: E2E Ecommerce validation

    aplication Regression
    @Regression
    Scenario: Ecommerce product delivery
    Given  I open ecomerce page
    When I add iiems to cart
    And Vlidate the totals price
    Then Select the country submint and verify Alerty of sucefull process
    
    Scenario: Filling the form to shop
    Given I open Ecommerce Page
    When I fill the form details
    Then Validate The forms behaviours
    And Select the shop page