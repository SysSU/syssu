import React from 'react';
import ProfileDetails from './Details';
import DetailsData from '../../../data/json/frontPageDetails.json';

DetailsData.body = 'Test Body';

const selectors = {
  errorMessage: '#errorMessage',
  loadingMessage: '#loadingMessage',
  profileDetails: '#profileDetails',
  pTItle: '#profileDetailsTitle',
  pSubTitle: '#profileDetailsSubTitle',
  pBody: '#profileDetailsBody',
};

describe('<ProfileDetails />', () => {
  it('Should show error message on fetch error', () => {
    cy.mount(<ProfileDetails />);
    cy.get(selectors.errorMessage).should('exist');
    cy.get(selectors.loadingMessage).should('not.exist');
  });

  it('Should show details on success load', () => {
    cy.intercept('/api/data/frontPageDetails', {
      body: DetailsData,
    });
    cy.mount(<ProfileDetails />);
    cy.get(selectors.profileDetails).should('exist');
    cy.get(selectors.pTItle).should('have.text', DetailsData.title);
    cy.get(selectors.pSubTitle).should('have.text', DetailsData.subTitle);
    cy.get(selectors.pBody).should('have.text', DetailsData.body);
    cy.get(selectors.errorMessage).should('not.exist');
    cy.get(selectors.loadingMessage).should('not.exist');
  });
});
