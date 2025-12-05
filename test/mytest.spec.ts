//test and expect are inbuild modules of playwright test framework
import {test, expect} from '@playwright/test';

//fixture -global variable : page, browser

test.describe('My first test suite', ()=> { 
  test('sample test', async ({page, browser})=> {
    //navigating to url
    await page.goto("http://www.automationpractice.pl/index.php");
    let title: string =  await page.title();
    console.log("Title of the page is: " +  title);
    //assertions
    await expect(page).toHaveTitle("My Shop");	
  });

});