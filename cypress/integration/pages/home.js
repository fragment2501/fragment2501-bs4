describe('The Home Page', function()
{
  it('Visit the home page and perform page specific tests.', function(){
    // Goto the home page.
    cy.visit('/');

    // Tests for the page header stuff.
    cy.get('h1').should('contain','Bryan\'s Blog!');

    // Tests for the main about section.
    cy.get('.section-about-us h2').should('contain','My little blog R&D site');

    // Tests for the lower team section.
    cy.get('.section-team h2').should('contain','Some Cool CMS Backend Options');
    // confirm there are 3 rows of team section stuff
    cy.get('.section-team .team .row .team-player').should('have.length',3);

    // Percy screenshot for visual diffs.
    cy.percySnapshot('Home Page');
  });
});
