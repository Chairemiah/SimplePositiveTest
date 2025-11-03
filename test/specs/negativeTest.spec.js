import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

//All User Logins Array
const users = [
    {username: 'standard_user', password: 'secretsauce'},
    {username: 'problem_user', password: 'secretsauce'},
    {username: 'performance_glitch_user', password: 'secretsauce'},
    {username: 'error_user', password: 'secretsauce'},
    {username: 'visual_user', password: 'secretsauce'}

];

describe('Error login test with multiple users', () => {
    users.forEach((user) => {
        it(`should NOT login as user #${user + 1}`, async () => {
           
            
            // Step 1 - Open login page
            await browser.url('https://www.saucedemo.com/');

            // Step 2 - Login with set credentials
            await $('#user-name').setValue(user.username);
            await $('#password').setValue(user.password);
            await $('#login-button').click();    

            // Step 3 - Verify Error Success
            const errorText = await $('.error-message-container').getText();
            await expect(errorText).toBe('Epic sadface: Username and password do not match any user in this service');


                console.log('Test has been completed with 100% Success.')

           });

        });
    });