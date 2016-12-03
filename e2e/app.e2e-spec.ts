import { DticFormsPage } from './app.po';

describe('dtic-forms App', function() {
  let page: DticFormsPage;

  beforeEach(() => {
    page = new DticFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
