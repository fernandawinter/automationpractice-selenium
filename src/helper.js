const DEFAULT_TIMEOUT = 10000;

function waitForElement(selector) {
    browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css(selector))), DEFAULT_TIMEOUT);
}

module.exports = {
    waitForElement
}
