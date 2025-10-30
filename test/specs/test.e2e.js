import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
            expect.stringContaining('Swag Labs')

        await LoginPage.login('standard_user', 'secret_sauce')
        //await expect(SecurePage.inventoryContainer).toBeExisting()
        //await expect(SecurePage.SwagLabs).toHaveText()
        //await expect(SecurePage.SwagLabs).toHaveUrl('https://www.saucedemo.com/inventory.html'))
    })
})

