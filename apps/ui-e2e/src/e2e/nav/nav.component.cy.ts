describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navcomponent--primary'));
  it('should render the component', () => {
    cy.get('santhoshini-nav').should('exist');
  });
});
