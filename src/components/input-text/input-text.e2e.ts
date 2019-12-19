import { newE2EPage } from '@stencil/core/testing';

describe('henris-input-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<henris-input-text></henris-input-text>');

    const element = await page.find('henris-input-text');
    expect(element).toHaveClass('hydrated');
  });
});
