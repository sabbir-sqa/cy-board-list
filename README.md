# cy-board-list

## Cypress + Postman Automation

This repository contains both **Cypress UI tests** and **Postman API tests** for Board and List operations, including creation, verification, and deletion via UI and API automation.

---

## UI Automation Test Scenarios (Cypress)

1. Input a Board name, press `Enter`. Verify the board is created successfully.
2. Add two lists and verify that both are created successfully.
3. Delete one of the created lists.

---

## API Automation Test Scenarios (Postman)

1. Add a new list via API.
2. Delete the newly created list via API.

---

## Running the Tests

### Cypress UI Tests

> Make sure you have [Node.js](https://nodejs.org/) and [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) installed.

```bash
# Install dependencies
npm install

# Open Cypress Test Runner
npx cypress open

# Or run headlessly in CLI
npx cypress run

### Postman API Tests

1.  Download the following files from this repo:
    
    *   list_api_testing.postman_collection.json
        
    *   local.postman_environment.json
        
2.  Open Postman and:
    
    *   Import the collection and environment files.
        
    *   Select the environment.
        
    *   Run the collection using the **Runner** tab or manually execute requests.