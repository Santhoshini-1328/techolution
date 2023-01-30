describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tablecomponent--primary'));
  it('should render the component', () => {
    cy.get('santhoshini-table').should('exist');
  });
});
