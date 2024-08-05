/**
 * - Register spec
 *  - should display register page correctly
 *  - should display error validation when input fields are invalid
 *  - should display alert when email has been registered
 *  - should display login page when name, email, and password are correct
 */

describe('Register spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register');
  });

  it('should display register page correctly', () => {
    // verify page element that should be displayed at register page
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should display error validation when input fields are invalid', () => {
    // click submit button
    cy.get('button[type="submit"]').click();

    /// verify error validation
    cy.contains('Name is required').should('be.visible');
    cy.contains('Invalid email address').should('be.visible');
    cy.contains('Password must be at least 6 characters').should('be.visible');
  });

  it('should display alert when email has been registered', () => {
    // fill name
    cy.get('input[name="name"]').type('Hendri F');

    // fill email
    cy.get('input[name="email"]').type('hendrifebriansyah28@gmail.com');

    // fill password
    cy.get('input[name="password"]').type('smansa182');

    // click submit button
    cy.get('button[type="submit"]').click();

    // verify alert message content
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email is already taken');
    });
  });

  it('should display login page when name, email, and password are correct', () => {
    // fill name
    cy.get('input[name="name"]').type('Hendro Dummy');

    // fill email
    cy.get('input[name="email"]').type('hendro1@gmail.com');

    // fill password
    cy.get('input[name="password"]').type('dummy12345');

    // click submit button
    cy.get('button[type="submit"]').click();

    // verify page element that should be displayed at login page
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });
});
