
import { expect } from '@wdio/globals'
import RegPage from '../pageobjects/reg.page.js'



describe('My Registration application', () => {
    it('should register with valid credentials', async () => {
        await RegPage.open()
        await RegPage.registration('Mridul','Chy','atiarmridul146@gmail.com', 'Abc123456','Abc123456')
        console.log("Signup is successfull");
    
    })
})



