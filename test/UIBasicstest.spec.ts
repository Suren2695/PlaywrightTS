import {test, expect} from '@playwright/test';

test('Browser context - Playwright test', async ({browser}) =>{

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
    console.log(await products.nth(1).textContent());
    console.log(iPhone)

    const allTitle = await products.allTextContents();
    console.log(allTitle);



    //

    
})


test('UI controls - playwright test', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //css, xpath
    const userName = page.locator("#username")
    const signInBtn = page.locator("#signInBtn");
    const documentLink = page.locator("[href*='documents-request']")
    const dropDown = page.locator('select.form-control');
    await dropDown.selectOption("consult");
    await page.locator(".radiotextsty").nth(1).click();
    await expect(await page.locator(".radiotextsty").nth(1)).toBeChecked();
    console.log(await page.locator(".radiotextsty").nth(1).allTextContents());
    await page.locator("#okayBtn").click();
    await page.locator("#terms").click();
    await expect(await page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute('class','blinkingText');

        // await userName.fill("rahulshettyacademyqa");
    // await page.locator("[type='password']").fill("learning");
    // await signInBtn.click();

})

test('Child window tab',async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    await documentLink.click();

});