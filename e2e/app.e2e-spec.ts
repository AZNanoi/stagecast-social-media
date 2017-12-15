import { StagecastPage } from './app.po';

describe('stagecast App', () => {
  let page: StagecastPage;

  beforeEach(() => {
    page = new StagecastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
