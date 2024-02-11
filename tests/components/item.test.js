const { createElement } = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
const { Item } = require('../../src/todo/components/item');

describe('Item Component', () => {
  const mockDispatch = jest.fn();
  const mockTodo = { id: 1, title: 'Test Todo', completed: false };

  test('renders item component', () => {

    //Test 1: Rendering Test.
    const container = document.createElement('div');
    render(createElement(Item, { todo: mockTodo, dispatch: mockDispatch, index: 0 }), container);
    expect(container.querySelector('[data-testid="todo-item"]')).toBeDefined();
  });

  test('displays correct label content', () => {
    
    // Test 2: Label Content Test.
    render(createElement(Item, { todo: mockTodo, dispatch: mockDispatch, index: 0 }));
    
    const label = screen.getByTestId('todo-item-label');
    expect(label.textContent).toBe('Test Todo');
  });

  test('removes item on button click', () => {

    //Test 3: Item removal test.
    render(createElement(Item, { todo: mockTodo, dispatch: mockDispatch, index: 0 }));
    const button = screen.getByTestId('todo-item-button');
    fireEvent.click(button);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'REMOVE_ITEM', payload: { id: mockTodo.id } });
  });
});
