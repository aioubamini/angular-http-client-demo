import { AngularHttpClientDemoPage } from './app.po';

describe('angular-http-client-demo App', () => {
  let page: AngularHttpClientDemoPage;

  beforeEach(() => {
    page = new AngularHttpClientDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
