describe('The Home Page', function()
{
  it('Visit the home page and perform page specific tests.', function(){
    cy.visit('/');
    cy.get('h1');
    cy.percySnapshot('Home Page');
  });
});
