import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ProductPage from '../pageobjects/product_purchase.page.js'





describe('My Website product purchase', () => {

    
    
    it('should login with valid credentials and purchase a product', async () => {
        await LoginPage.open()
        await LoginPage.login('atiarmridul16@gmail.com', 'Abc123456')
        await ProductPage.open()
        await ProductPage.product()
        await ProductPage.purchase('mridul@test.com','Atiar','Mridul','AITS','Baridhara','Dhaka','1','A1B2C3','Canada','+1 (778) 555-4321')
 
         
    })
    
})
