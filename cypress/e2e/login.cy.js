/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email or password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display login page correctly', () => {
    // verify page element that should be displayed at login page
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should display alert when email is empty', () => {
    // click submit button
    cy.get('button[type="submit"]').click();

    /// verify alert message content
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // fill email
    cy.get('input[name="email"]').type('john@mail.com');

    // click submit button
    cy.get('button[type="submit"]').click();

    // verify alert message content
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email or password are wrong', () => {
    // fill wrong email
    cy.get('input[name="email"]').type('wrong@mail.com');

    // fill password
    cy.get('input[name="password"]').type('123456');

    // click submit button
    cy.get('button[type="submit"]').click();

    // verify alert message content
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    // fill email
    cy.get('input[name="email"]').type('hendrifebriansyah28@gmail.com');

    // fill password
    cy.get('input[name="password"]').type('smansa182');

    // click submit button
    cy.get('button[type="submit"]').click();

    // verify page element that should be displayed at homepage
    cy.get('nav')
      .contains(/^Forum App$/)
      .should('be.visible');
    cy.get('button').contains('Logout').should('be.visible');
  });
});
