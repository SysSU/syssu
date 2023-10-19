import React from 'react';
import SocialLinks, { ISocialLink } from './SocialLinks';
import { friendlyIDFromStr } from '../../utils/Strings';


describe('<SocialLinks />', () => {
  it('Should load empty shell when it fails to load data state', () => {
    cy.mount(<SocialLinks />)
    cy.get('#socialLinksContainer').should('not.exist')
  });

  it('Should load social links', () => {
    cy.intercept('GET', '/api/data/socialLinks', { fixture: 'socialLinks.json' });
    cy.mount(<SocialLinks />);
    cy.get('#socialLinksContainer').should('exist');
    cy.get('#socialLinksContainer').should('have.length', 1);
    cy.fixture('socialLinks.json').then(socialLinks => {
      socialLinks.map((link: ISocialLink) => {
        const socialLinkId = `#SocialLink-${friendlyIDFromStr(link.name)}`;
        cy.get(socialLinkId).should('exist');
        cy.get(socialLinkId).should('have.length', 1);
        cy.get(socialLinkId).should('have.attr', 'href', link.url);
        cy.get(socialLinkId).should('have.attr', 'target', '_blank');
        cy.get(socialLinkId).should('have.attr', 'rel', 'noopener noreferrer');
        cy.get(socialLinkId).should('have.attr', 'aria-label', link.name);
        cy.get(socialLinkId).should('have.attr', 'aria-labelledby', link.name);
        cy.get(socialLinkId).should('have.attr', 'aria-describedby', link.name);

      })
    })
  });

});