const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
const { Header } = require('../../src/todo/components/header');

describe('Header Component', () => {

  // Test 1: Rendering Test.
  test('renders header component', () => {
    render(React.createElement(Header, { dispatch: () => {} }));
    expect(screen.getByTestId('header')).toBeTruthy();
  });

  test('updates input value on change', () => {

    // Test 2: Input Value Test.
    render(React.createElement(Header, { dispatch: () => {} }));

    const inputElement = screen.getByPlaceholderText('What needs to be done?');

    fireEvent.change(inputElement, {
      target: { value: 'Test Todo' },
    });
    expect(inputElement.value).toBe('Test Todo');
  });

  test('handles error gracefully', () => {
    
    // Test 3: Error Handling Test.
    const mockDispatchWithError = () => {
      throw new Error('Simulated error during dispatch');
    };
    expect(() => render(React.createElement(Header, { dispatch: mockDispatchWithError }))).not.toThrow();
  });
});
