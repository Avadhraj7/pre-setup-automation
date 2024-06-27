import loginSelectors from "../selectors/loginSelectors.css";

describe('Test Scenario: Login Module Test Cases', () => {
  let correctEmail;
  let correctPassword;
  let incorrectEmail;
  let incorrectPassword;
  let correctOTP;
  let incorrectOTP;

  before(() => {
    cy.fixture('config').then(config => {
      correctEmail = config.cred.correctEmail;
      correctPassword = config.cred.correctPassword;
      incorrectEmail = config.cred.incorrectEmail;
      incorrectPassword = config.cred.incorrectPassword;
      correctOTP = config.cred.correctOTP;
      incorrectOTP = config.cred.incorrectOTP;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Test Case 1: Correct Email + Correct Password + Correct OTP', () => {

    cy.wait(2000);
    cy.xpath(loginSelectors.emailField).type(correctEmail);
    cy.xpath(loginSelectors.passwordField).type(correctPassword);
    cy.xpath(loginSelectors.signInButton).click();

  })

  it('Test Case 2: Incorrect Email + Correct Password', () => {

    cy.wait(2000);
    cy.xpath(loginSelectors.emailField).type(incorrectEmail);
    cy.xpath(loginSelectors.passwordField).type(correctPassword);
    cy.xpath(loginSelectors.signInButton).click();
    cy.xpath(loginSelectors.toastNotification)
      .should('be.visible')
      .and('have.text', loginSelectors.toastNotificationMessage);


  })

  it('Test Case 3: Correct Email + InCorrect Password', () => {
    cy.wait(2000);
    cy.xpath(loginSelectors.emailField).type(correctEmail);
    cy.xpath(loginSelectors.passwordField).type(incorrectPassword);
    cy.xpath(loginSelectors.signInButton).click();
    cy.xpath(loginSelectors.toastNotification)
      .should('be.visible')
      .and('have.text', loginSelectors.toastNotificationMessage);


  })

  it('Test Case 4: Correct Email + Correct Password + Correct OTP', () => {

    cy.wait(2000);
    cy.xpath(loginSelectors.emailField).type(correctEmail);
    cy.xpath(loginSelectors.passwordField).type(correctPassword);
    cy.xpath(loginSelectors.signInButton).click();
    // cy.xpath(loginSelectors.otpField).type(correctOTP)

  })


  it('Test Case 5: Correct Email + Correct Password + InCorrect OTP', () => {
    cy.wait(2000);
    cy.xpath(loginSelectors.emailField).type(correctEmail);
    cy.xpath(loginSelectors.passwordField).type(correctPassword);
    cy.xpath(loginSelectors.signInButton).click();
    // cy.xpath(loginSelectors.otpField).type(incorrectOTP)

  })

  it('Test Case 6: Correct Email + Correct Password + Blank OTP', () => {

    cy.wait(2000);
    cy.xpath(loginSelectors.emailField).type(correctEmail);
    cy.xpath(loginSelectors.passwordField).type(correctPassword);
    cy.xpath(loginSelectors.signInButton).click();

    //cy.xpath(loginSelectors.otpVerifyButton).click();


  })

  it('Test Case 7: Blank Email + Correct Password', () => {

    cy.wait(2000);
    //cy.xpath(loginSelectors.emailField).type(correctEmail);
    cy.xpath(loginSelectors.passwordField).type(correctPassword);
    cy.xpath(loginSelectors.signInButton).click();

    cy.xpath(loginSelectors.emailErrorXpath)
      .should('be.visible')
      .and('have.text', loginSelectors.emailErrorMessage);


  })

  it('Test Case 8: Correct  Email + Blank Password', () => {

    cy.wait(2000);
    cy.xpath(loginSelectors.emailField).type(correctEmail);
    //cy.xpath(loginSelectors.passwordField).type(correctPassword);
    cy.xpath(loginSelectors.signInButton).click();

    cy.xpath(loginSelectors.passwordErrorXpath)
      .should('be.visible')
      .and('have.text', loginSelectors.passwordErrorMessage);


  })

  it('Test Case 9: Email and Password Blank', () => {

    cy.wait(2000);
    //cy.xpath(loginSelectors.emailField).type(correctEmail);
    //cy.xpath(loginSelectors.passwordField).type(correctPassword);
    cy.xpath(loginSelectors.signInButton).click();

    cy.xpath(loginSelectors.emailErrorXpath)
      .should('be.visible')
      .and('have.text', loginSelectors.emailErrorMessage);

    cy.xpath(loginSelectors.passwordErrorXpath)
      .should('be.visible')
      .and('have.text', loginSelectors.passwordErrorMessage);

  })

})