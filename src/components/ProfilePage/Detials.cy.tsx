import React from 'react';
import ProfileDetails from './Details';

const selectors = {
  profileDetails: '#profileDetails',
};

describe('<ProfileDetails />', () => {
  it('Should show details on success load', () => {
    cy.mount(<ProfileDetails />);
    cy.get(selectors.profileDetails).should('exist');
  });
});
