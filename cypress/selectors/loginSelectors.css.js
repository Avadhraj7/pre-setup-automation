module.exports = {

    emailField: '//input[@id="sign-in-email"]',
    passwordField: '//input[@id="sign-in-password"]',
    signInButton: '//button[normalize-space()="Sign In"]',
    otpField:"",
    otpVerifyButton:"",
    toastNotification:"//div[contains(@class, 'Toastify__toast--error')]//div[contains(text(), 'These credentials do not match our records.')]",
    toastNotificationMessage:"These credentials do not match our records.",
    emailErrorXpath:"//p[@id=':r0:-form-item-message']",
    emailErrorMessage:"Please enter a valid email",
    passwordErrorXpath:"//p[@id=':r1:-form-item-message']",
    passwordErrorMessage:"Password is required.",

}