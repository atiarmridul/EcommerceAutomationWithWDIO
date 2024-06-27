import { $ } from '@wdio/globals'
import Page from './page.js';


class SurfingWebsitePage extends Page {

    get whatNewLink () {
        return $('#ui-id-3'); 
    }

    get subscribeLink () {
        return $("a=Subscribe");    
    }


    async surfing () {
        await this.subscribeLink.scrollIntoView();
        await browser.pause(2000);

        await this.subscribeLink.click();
        const totalTabs = await browser.getWindowHandles();
        
        await browser.switchToWindow(totalTabs[1]);
        await expect(browser).toHaveUrl('https://softwaretestingboard.com/subscribe/?utm_source=magento_store&utm_medium=banner&utm_campaign=notes_promo&utm_id=email_subscribe', {message :`URL Not Matching`})
        await browser.pause(5000);
        await browser.closeWindow();

        await browser.switchToWindow(totalTabs[0]);
        await browser.pause(2000);

        await this.whatNewLink.scrollIntoView();
        await browser.pause(2000);

    }


    open () {
        return super.open('');
    }
}

export default new SurfingWebsitePage();