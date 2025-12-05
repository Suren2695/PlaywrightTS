//test and expect are inbuild modules of playwright test framework
import {test, expect} from '@playwright/test';

//fixture -global variable : page, browser

test.describe('My second test suite', ()=> { 
  
  test.only('sample test URL', async ({page, browser})=> {
    //navigating to url
    await page.goto("http://www.automationpractice.pl/index.php");
    let url: string =  await page.url();
    console.log("url of the page is: " +  url);
    //assertions
    await expect(page).toHaveURL(/automationpractice/);	
  });

});