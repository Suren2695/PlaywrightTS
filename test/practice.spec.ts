import {test, expect} from '@playwright/test';
import {chromium} from 'playwright';

test("verify....", async({browser})=>{

    const browserInstance = await chromium.launch({ channel: 'chrome', headless:false});
    const context = await browserInstance.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    expect(await page.url()).toContain("loginpagePractise");

    expect(page).toHaveURL(/loginpagePractise/)

})