import {test, expect} from '@playwright/test'

test("browser context - validation using Page fixture", async({page})=>{

    // const context = await browser.newContext()
    // const page = await context.newPage()

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill('nsurender2605@gmail.com');
    await page.locator('#userPassword').fill("Iamking@000");
    await page.locator("[value='Login']").click();

    //get all the product list in the cart 
    await page.waitForLoadState('networkidle'); /// wait for all the network calls to load
    await page.locator('.card-body').first().waitFor();// this will wait for the one selected value.
    //await page.waitForLoadState('domcontentloaded'); // it is faster than the above but it will wait untill the dom get loaded fully
    const productList = await page.locator('.card-body b').allTextContents();

    console.log(productList);

    

})