import { TodoList } from './app.po';

describe('todo-list', () => {
  let page: TodoList;

  beforeEach(() => {
    page = new TodoList();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todo List!!');
  });
});
