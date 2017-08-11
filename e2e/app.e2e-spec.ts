import { ServiceLecturePage } from './app.po';

describe('service-lecture App', () => {
  let page: ServiceLecturePage;

  beforeEach(() => {
    page = new ServiceLecturePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
