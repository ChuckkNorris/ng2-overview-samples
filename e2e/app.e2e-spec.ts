import { PetDemoPage } from './app.po';

describe('pet-demo App', function() {
  let page: PetDemoPage;

  beforeEach(() => {
    page = new PetDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
