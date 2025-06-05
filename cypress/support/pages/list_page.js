class ListPage {
  get listInput() {
    return cy.get('[data-cy="add-list-input"]');
  }

  get listItems() {
    return cy.get('[data-cy="list"]');
  }

  get clickListOption() {
    return cy.get('[data-cy="list-options"]');
  }

  get deleteListButton() {
    return cy.get('[data-cy="delete-list"]');
  }

  addNewList(listName) {
    this.listInput.clear().type(listName, { duration: 2000 });
    cy.contains('Add list').click();
    // cy.contains(listName).should('exist');
    return this;
  }

  verifyCreatedListsCount(expectedCount = 2) {
    this.listItems.should('have.length', expectedCount);
    return this;
  }

  deleteLastList() {
    this.listItems.then(($lists) => {
      const initialCount = $lists.length;
      if (initialCount > 0) {
        this.clickListOption.last().click();
        this.deleteListButton.last().click();
        cy.on('window:confirm', () => true);
        this.listItems.should('have.length.lessThan', initialCount);
      }
    });
    return this;
  }
}

export default new ListPage();
