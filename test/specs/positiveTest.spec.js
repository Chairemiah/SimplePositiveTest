/*import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

//All User Logins Array
const users = [
    {username: 'standard_user', password: 'secret_sauce'},
    {username: 'problem_user', password: 'secret_sauce'},
    {username: 'performance_glitch_user', password: 'secret_sauce'},
    {username: 'error_user', password: 'secret_sauce'},
    {username: 'visual_user', password: 'secret_sauce'}

];

describe('Login test with multiple users', () => {
    users.forEach((user) => {
        it(`should login as user #${user + 1}`, async () => {
           
            
            // Step 1 - Open login page
            await browser.url('https://www.saucedemo.com/');

            // Step 2 - Login with set credentials
            await $('#user-name').setValue(user.username);
            await $('#password').setValue(user.password);
            await $('#login-button').click();    

            // Step 3 - Verify Login Success
            //await expect($('#react-burger-menu-btn')).toBeDisplayed();
            //const menuButton = await $('#react-burger-menu-btn');
            const loginError = await $('.error-button');

            //Step 4 - Logout and Repeat
            await $('#react-burger-menu-btn').click();
            await $('#logout_sidebar_link').click();
            await expect($('#login-button')).toBeDisplayed();

                console.log('Test has been completed with 100% Success.')

           });

        });
    });
*/

/*describe('Login test with multiple users', () => {
    it('should login with first user, logout, then login with second user', async () => {
        // Step 1: Go to login page
        await browser.url('https://www.saucedemo.com/');

        // Step 2: Login with first credentials
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        // Step 3: Verify login success
        await expect($('#react-burger-menu-btn')).toBeDisplayed();

        await $('#react-burger-menu-btn').click();
        await browser.pause(500);

        // Step 4: Logout
        await $('#logout_sidebar_link').click();
        await expect($('#login-button')).toBeDisplayed(); // confirm logout worked

        // Step 5: Login again with different credentials
        await $('#user-name').setValue('locked_out_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        // Step 6: Verify second login success
        await expect($('#login-button')).toBeDisplayed();
    });
});


//ORIGINAL STATEMENT TEST
/*describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
            expect.stringContaining('Swag Labs')

        await LoginPage.login('standard_user', 'secret_sauce')
        
        //await expect(SecurePage.inventoryContainer).toBeExisting()
        //await expect(SecurePage.SwagLabs).toHaveText()
        //await expect(SecurePage.SwagLabs).toHaveUrl('https://www.saucedemo.com/inventory.html'))
    })
})
    //{username: 'locked_out_user', password: 'secret_sauce'},
*/