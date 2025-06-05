class BoardPage {
  get createBoardButton() {
    return cy.get('[data-cy="create-board"]');
  }

  get newBoardInput() {
    return cy.get('[data-cy="new-board-input"]');
  }

  get boardTitle() {
    return cy.get('[data-cy="board-title"]');
  }

  get createBoardSubmit() {
    return cy.get('[data-cy="new-board-create"]');
  }

  createNewBoard(boardName) {
    this.createBoardButton.click();
    this.newBoardInput.clear().type(boardName);
    this.createBoardSubmit.click();
    cy.url().should('include', '/board/');
    return this;
  }

  verifyBoardCreatedSuccessfully(boardName) {
    cy.url().should('match', /\/board\/\d+/);
    this.boardTitle.should('have.value', boardName);
    return this;
  }
}

export default new BoardPage();
