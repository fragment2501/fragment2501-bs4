describe('Validate Global Navigation', function()
{
  const homePage = "Bryan's Blog!";
  const blogPage = "My Blog!";
  const contactPage = "Send me a message!";
  it('Visit the home page and test global nav elements in the header', function(){
    cy.visit('/');
    cy.get('h1').should('contain',homePage);
    cy.get('[data-cy="nav-link-blog"]').click();
    cy.get('h1').should('contain',blogPage);
    cy.get('[data-cy="nav-link-contact"]').click();
    cy.get('h1').should('contain',contactPage);
    cy.get('[data-cy="nav-brand-home"]').click();
    cy.get('h1').should('contain',homePage);
  });
  it('Visit the home page and test global nav elements in the footer', function(){
    cy.visit('/');
    cy.get('h1').should('contain',homePage);
    cy.get('[data-cy="footer-link-blog"]').click();
    cy.get('h1').should('contain',blogPage);
    cy.get('[data-cy="footer-link-contact"]').click();
    cy.get('h1').should('contain',contactPage);
    cy.get('[data-cy="footer-link-home"]').click();
    cy.get('h1').should('contain',homePage);
  });
});
