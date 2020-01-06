describe('Validate Global Navigation', function()
{
  it('Visit the home page and test global nav elements in the header', function(){
    cy.visit('/');
    cy.get('h1').should('contain','This is a landing page!');
    cy.get('[data-cy="nav-link-blog"]').click();
    cy.get('h1').should('contain','This is a blog listing!');
    cy.get('[data-cy="nav-link-contact"]').click();
    cy.get('h1').should('contain','Send me a message!');
    cy.get('[data-cy="nav-brand-home"]').click();
    cy.get('h1').should('contain','This is a landing page!');
  });
  it('Visit the home page and test global nav elements in the footer', function(){
    cy.visit('/');
    cy.get('h1').should('contain','This is a landing page!');
    cy.get('[data-cy="footer-link-blog"]').click();
    cy.get('h1').should('contain','This is a blog listing!');
    cy.get('[data-cy="footer-link-contact"]').click();
    cy.get('h1').should('contain','Send me a message!');
    cy.get('[data-cy="footer-link-home"]').click();
    cy.get('h1').should('contain','This is a landing page!');
  });
});
