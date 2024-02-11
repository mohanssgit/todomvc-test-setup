const React = require("react");
const { render, screen, fireEvent } = require("@testing-library/react");
const { MemoryRouter, BrowserRouter } = require("react-router-dom");
const { Footer } = require("../../src/todo/components/footer");

describe("Footer Component", () => {

  // Test 1: Rendering Test.
  test("renders footer component", () => {
    const todos = [
      { id: 1, text: 'Todo 1', completed: false },
      { id: 2, text: 'Todo 2', completed: true },
    ];
    render(
    <BrowserRouter>
      <Footer todos={todos} dispatch={() => {}} />
    </BrowserRouter>);
    expect(screen.getByTestId('footer')).toBeTruthy();
  });

  test('displays correct active todos count', () => {

    // Test 2: Active Todo Count.
    const todos = [
      { id: 1, text: 'Todo 1', completed: false },
      { id: 2, text: 'Todo 2', completed: true },
    ];
    render(
      <BrowserRouter>
        <Footer todos={todos} dispatch={() => {}} />
      </BrowserRouter>
    );
    expect(screen.getByTestId('footer').textContent).toContain('1 item left!');
  });

  test('clears completed todos when "Clear completed" is clicked', () => {

    //Test 3: Clear Completed Button Clicked.
    const mockDispatch = jest.fn();
    const todos = [
      { id: 1, text: 'Todo 1', completed: false },
      { id: 2, text: 'Todo 2', completed: true },
    ];
    render(
      <BrowserRouter>
        <Footer todos={todos} dispatch={mockDispatch} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Clear completed'));

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'REMOVE_COMPLETED_ITEMS' });
  });
});
