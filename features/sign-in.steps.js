const assert = require('assert')
const { Given, When, Then } = require('cucumber')

Given("a user is viewing the login page", () => {
    browser.url("http://localhost1234/log-in");
})

When("the user enters valid credentials and clicks submit", async (email, password) => {
    let emailField = await driver.find(By.cssSelector("input[name='email']"));
    let passwordField = await driver.find(By.cssSelector("input[name='password']"));
    let submitButton = await driver.find(By.cssSelector("button[name='Submit']"));
    emailField.click();
    emailField.sendKeys(email);
    passwordField.click();
    passwordField.sendKeys(password);
    submitButton.click();
})

Then("the user is successfully brought to the feature page", () => {
    assertEquals(browser.url, "http://localhost1234/feature");
})