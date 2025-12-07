/* Inbuilt pre locators are supported in the playwright test.

locator - identify the elemnts on the web pages
DOM - 

page.getByAltText() - to locate the element by alt text attribute.
page.getByLabel() - to locate the element by label text.
page.getByPlaceholder() - to locate the element by placeholder text.
page.getByRole() - to locate the element by ARIA role.
page.getByTestId() - to locate the element by test id attribute.

*/
import {test, expect, Locator} from '@playwright/test';
test("Playwright locators demo",async({page, browser})=>{     //page fixtures
    await page.goto("https://demo.nopcommerce.com/");
    //locating the element by alt text attribute.
    const logo: Locator = page.getByAltText("nopCommerce demo store") //locator element 
   //locator element 
    await expect(logo).toBeVisible(); //assertion    
    
    //getByText() - to get any string text, substring or even a regular expression - NON interactivre elements
    // const header: Locator = page.getByText("Welcome to our store");
    // await expect(header).toBeVisible();

// or we can use another way
    await expect(page.getByText("Welcome to our store")).toBeVisible();

    //getByRole() -  Not an attribute of an element -  Interatable element ( role is not an attribute)
    //button , cehcjkbox, headings, links

    // Click the Register link and wait for navigation so the heading appears
    await page.getByRole('link', { name: 'Register' }).click();
    
    // Prefer asserting the heading by role (disambiguates multiple "Register" texts)
    //await expect(page.getByRole('heading', { name: /register/i })).toBeVisible();

    // getByLabel() - to locate the element by label text.
    await page.getByLabel("First name").fill("Surender");
    await page.getByLabel("Last name").fill("Natarajan");
    await page.getByLabel("Email").fill("Surender@gmail.com");

    //getByPlaceholder() - to locate the element by placeholder text.
    await page.getByPlaceholder("Search store").fill("Apple MacBook Pro");

    /*getBytitle() & getBytestId() -
    sample - await page.getByTestId('unique-element-id').click(); //title will be an attribute
    getBytestId() - data-testid is an attribute id data-testid is not available we can customize it in config file.
    testIdAttribute: "data-pw".
    

    */





    
});