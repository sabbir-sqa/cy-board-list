import boardPage from '../support/pages/board_page';
import listPage from '../support/pages/list_page';

describe('Board and List Operations', () => {
  const boardName = `Test Board ${Date.now()}`;
  const list1 = 'To Do';
  const list2 = 'In Progress';

  before(() => {
    cy.visit('/');
    boardPage.createNewBoard(boardName);
  });

  beforeEach(() => {
    cy.url().then((url) => {
      if (!url.includes('/board/')) {
        cy.visit('/');
        cy.contains(boardName).click();
      }
    });
  });

  it('TC001: Should create a board successfully', () => {
    boardPage.verifyBoardCreatedSuccessfully(boardName);
  });

  it('TC002: Should add two lists to the same board', () => {
    listPage.addNewList(list1);
    listPage.addNewList(list2);
    listPage.verifyCreatedListsCount();
  });

  it('TC003: Should delete a list successfully', () => {
    listPage.deleteLastList();
  });
});
