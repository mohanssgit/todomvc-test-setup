# Testing Plan

## Project Overview

This project uses React for building user interfaces and Jest for testing. The goal of this testing plan is to ensure the reliability and functionality of the application.

## Technologies Used
React: A JavaScript library for building user interfaces.

Jest: A JavaScript testing framework.

## Folder Structure
src/: Contains the source code for the application.

components/: Houses React components.

tests/: Holds all component test files.

## Additional files

- `setupTests.js` is a configuration file in Jest, often placed in the project root, which is used to enhance Jest's expect functionality with custom matchers for improved readability and informative failure messages when testing React components.

- `.babelrc` is a configuration file for Babel, a JavaScript compiler. It specifies presets like to enable Babel to transpile modern JavaScript and React code during the testing process.

## Test Plan

### Component Tests

#### Footer Component

- `tests/components/footer.test.js`
  - Test rendering of the footer component.
  - Test the correct count of active todos.
  - Test the "Clear completed" button functionality.

#### Header Component

- `tests/components/header.test.js`
  - Test rendering of the header component.
  - Test if the input field is present.
  - Test error handling.

#### Input Component

- `tests/components/input.test.js`
  - Test rendering of the input component.
  - Test if the input value is correctly handled.
  - Test if the onSubmit callback is called on form submission.

#### Item Component

- `tests/components/item.test.js`
  - Test rendering of the item component.
  - Test if the item text/label is displayed correctly.
  - Test if the item is removed on click.

#### Main Component

- `tests/components/main.test.js`
  - Test rendering of the main component.
  - Test rendering with routes.
  - Test if the "Clear completed" button removes completed items.

## How to run tests

```javascript
npx jest test //to run all tests together
npx jest componentName.test.js //to run individual test

```
## License

[MIT](https://choosealicense.com/licenses/mit/)