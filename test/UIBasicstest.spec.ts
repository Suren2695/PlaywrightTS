import {test, expect} from '@playwright/test';

test.only('Browser context - Playwright test', async ({browser}) =>{

    //chrome - plugins / cookies
    // const context = await browser.newContext();
    // const page = await context.newPage();

    const context = await browser.newContext();
    const page =  await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //css, xpath
    const userName = page.locator("#username")
    const signInBtn = page.locator("#signInBtn");
    await userName.fill("rahulshettyacademyqa");
    await page.locator("[type='password']").fill("learning");
    await signInBtn.click();
    //await page.locator("[style*='block']").textContent();  //testContent - this will give me the text in the element
    console.log( await page.locator("[style*='none']").textContent());
    await expect(page.locator("[style*='none']")).toContainText("Incorrect");

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signInBtn.click();

    const products = page.locator(".card-body a");

    const iPhone =  await products.first().textContent();
    await products.nth(1).click();
    console.log(iPhone)

    const allTitle = await products.allTextContents();
    console.log(allTitle);



    //

    
})


test('page fixtures - playwright test', async ({page})=>{

    await page.goto("https://google.com/");
    console.log(await page.title());
    expect(await page.title()).toBe("Google");
    //await expect(page).toHaveTitle("Google"); //5000


})