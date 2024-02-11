const { createElement } = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
const { Input } = require('../../src/todo/components/input');

describe('Input Component', () => {

  //Test 1: Rendering test.
  test('renders input component', () => {
    const container = document.createElement('div');
    render(createElement(Input, { onSubmit: () => {} }), container);
    expect(container.querySelector('[data-testid="text-input"]')).toBeDefined();
  });

  test('submits valid input on Enter key press', () => {

    //Test 2: Behavioral Test - Functionality verification.
    const mockSubmit = jest.fn();
    const container = document.createElement('div');
    render(createElement(Input, { onSubmit: mockSubmit }), container);

    const inputElement = screen.getByTestId('text-input');
    fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
    fireEvent.keyDown(inputElement, { key: 'Enter' });

    expect(mockSubmit).toHaveBeenCalledWith('Test Todo');
  });

  test('does not submit invalid input on Enter key press', () => {

    //Test 3: Invalid Input Handling.
    const mockSubmit = jest.fn();
    const container = document.createElement('div');
    render(createElement(Input, { onSubmit: mockSubmit }), container);

    const inputElement = screen.getByTestId('text-input');
    fireEvent.change(inputElement, { target: { value: 'A' } });
    fireEvent.keyDown(inputElement, { key: 'Enter' });

    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
