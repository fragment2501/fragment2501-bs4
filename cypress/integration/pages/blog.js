describe('The Blog Listing Page', function()
{
  it('Visit the blog listing page and perform page specific tests.', function(){
    cy.visit('/blog');
    cy.get('h1');
    cy.percySnapshot('Blog List Page');
  });
});
