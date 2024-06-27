import { expect } from '@wdio/globals'
import ProductPage from '../pageobjects/product_purchase.page.js'


describe('My Website product purchase', () => {

    it('should go to different product page and purchase', async () => {
        await ProductPage.open()
        await ProductPage.product()
        await ProductPage.purchase('mridul@test.com','Atiar','Mridul','AITS','Baridhara','Dhaka','1','A1B2C3','Canada','+1 (778) 555-4321')
        
   })

})
