import { OctoTrackingPage } from './app.po';

describe('octo-tracking App', () => {
  let page: OctoTrackingPage;

  beforeEach(() => {
    page = new OctoTrackingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
