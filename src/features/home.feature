Feature: Login Page

Scenario: User can use navigation
    Given I am on the home page
    When Expand the sidebar
    When I click on 'Forms'
    Then I can click DatePicker
