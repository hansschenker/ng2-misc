import { Rc2Page } from './app.po';

describe('rc2 App', function() {
  let page: Rc2Page;

  beforeEach(() => {
    page = new Rc2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
