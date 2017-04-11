import { TestNgSubmodulePage } from './app.po';

describe('test-ng-submodule App', () => {
  let page: TestNgSubmodulePage;

  beforeEach(() => {
    page = new TestNgSubmodulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
