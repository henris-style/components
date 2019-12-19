import { newE2EPage } from '@stencil/core/testing';

describe('henris-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<henris-button></henris-button>');

    const element = await page.find('henris-button');
    expect(element).toHaveClass('hydrated');
  });
});
