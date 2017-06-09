import { TodoListfromAPage } from './app.po';

describe('todo-listfrom-a App', () => {
  let page: TodoListfromAPage;

  beforeEach(() => {
    page = new TodoListfromAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
