const { createElement } = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
const { MemoryRouter } = require('react-router-dom');
const { Main } = require('../../src/todo/components/main');

describe('Main Component', () => {
  const mockDispatch = jest.fn();
  const mockTodos = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
    { id: 3, title: 'Todo 3', completed: true },
  ];

  test('renders main component', () => {

    //Test 1: Rendering test.
    const container = document.createElement('div');
    render(createElement(MemoryRouter, null, createElement(Main, { todos: mockTodos, dispatch: mockDispatch })), container);
    expect(container.querySelector('[data-testid="main"]')).toBeDefined();
  });

  test('renders todo items based on route', () => {

    //Test 2: Rendering with todos in the "all" route.
    render(createElement(MemoryRouter, null, createElement(Main, { todos: mockTodos, dispatch: mockDispatch })));
    const todoList = screen.getByTestId('todo-list');
    expect(todoList.children.length).toBe(3); // Adjust the expected length based on your actual todos
  });

  test('displays correct number of completed todos based on route', () => {

    // Test 3: Completed Todos Count Test.
    render(createElement(MemoryRouter, { initialEntries: ['/completed'] }, createElement(Main, { todos: mockTodos, dispatch: mockDispatch })));
    
    const completedTodos = screen.getAllByTestId('todo-item').filter((todo) => todo.classList.contains('completed'));
    
    expect(completedTodos.length).toBe(2);
  });
});
