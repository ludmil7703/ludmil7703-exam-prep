const { test, expect } = require('@playwright/test');

test('Check movies page', async ({ page }) => {
    await page.goto('https://ludmil7703.onrender.com/movies');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  