describe('The Contact Page', function()
{
  it('Visit the contact page and perform page specific tests.', function(){
    cy.visit('/contact');
    cy.get('h1');
    cy.percySnapshot('Contact Page');
  });
});
