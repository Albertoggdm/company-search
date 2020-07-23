## Description

This app is a test based on the requirements requested. Focused on the idea of using different technologies and patterns in order to show some skills of the developer as well as to be useful as the base of a portfolio code example in the future.

## Technologies included and main funcitonalities implemented

The project uses:

- React (hooks)
- Typescript
- Styled Components
- JSONServer
- react-router
- react-testing-library

The app has three main areas:

- Search bar: where users an type the name of the company
- List: whe users can see the companies that comtains the query interoduced in the search bar.
- Main container: where users can see the preview or detailed view of the company.
  - This area auto show a preview of the company when list has only one element.
  - This area loads the specific company data getting it from the specific company/idroute route using react-router for managing different routes. Users can access this route by typing directly on the browser url bar or by click in one of the list items.

## Future work

The main improvements to be done in the future will be including Sass, Storybook, GraphQL.
Also using context for the main app and the more extensive used of the reducer actions could be a nice improvement for the future.
As well as better organisation on the styles with global colors and variables, for being reused over the entire app. More intensive use of typescript and styled components.  
Based on the scope and nature of the project those things have been postponed.

Additionally other things not included in the project were connexion with real API connexion. Now it used json-server for mocking API. After several issues connecting with the requested APIs and based on the lack of documentaion the real connexion with the ABN API was considered not worth.

### Requirements

A React application that meets the following user requirements:

- As a user, when I type in a company name I should be shown a list of matching companies.
- As a user, when I select a company from the list, I should be shown the details of the company.
- As a user, when I type in an ABN I should be shown the matching company.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
