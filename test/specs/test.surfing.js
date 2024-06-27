import { expect } from '@wdio/globals'
import SurfingWebsitePage from '../pageobjects/surfing.page.js'

describe('My Website product purchase', () => {

    
    
    it('should surf the website and do different activities', async () => {

        await SurfingWebsitePage.open()
        await SurfingWebsitePage.surfing()
    
 
         
    })


})
