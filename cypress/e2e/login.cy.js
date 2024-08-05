/**
 * - Login spec
 *   - should display login page correctly
 *   - should display error validation when input fields are invalid
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

  it('should display error validation when input fields are invalid', () => {
    // click submit button
    cy.get('button[type="submit"]').click();

    /// verify error validation
    cy.contains('Invalid email address').should('be.visible');
    cy.contains('Password must be at least 6 characters').should('be.visible');
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
