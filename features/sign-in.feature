Feature: Sign In
  Scenario: User can sign in successfully with valid credentials
    Given a user is viewing the login page
    When the user enters valid credentials and clicks submit
    Then the user is successfully brought to the feature page