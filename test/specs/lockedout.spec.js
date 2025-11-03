import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';


describe('Locked out user', () => {
    it('should display an error for locked_out_user', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('locked_out_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        const errorText = await $('.error-message-container').getText();
        await expect(errorText).toBe('Epic sadface: Sorry, this user has been locked out.');

        console.log('Test Passed: Correct error message displayed.');
    });
});
