import { $ } from '@wdio/globals'
import Page from './page.js';


class ProductPage extends Page {

  
    get whatNewLink () {
        return $('#ui-id-3'); 
    }

    get newFirstProduct () {
        return $$(".product-item-link")[0];    
    }

    get addToCart () {
      
        return $('button=Add to Cart');  // return $('#product-addtocart-button');
    }

    get activeCart () {
        return $("a=shopping cart");
    }
    
    get checkOut () {
        return $$('button=Proceed to Checkout')[1];
    }



    async product () {
    
        await this.whatNewLink.click();
        await browser.pause(2000);
        await this.newFirstProduct.click();
        await browser.pause(2000);
        await this.addToCart.click();
        await browser.pause(2000);
        await this.activeCart.click();
        await browser.pause(2000);
        await this.checkOut.click();
        await browser.pause(2000)
    }

    get purchaseCustomerEmail() {
        return $("#customer-email")    
    }

    get purchaseFirstName () {
        return $("[name='firstname']") //return $$('.input-text')[4];
    }

    get purchaseLastName () {
        return $("[name='lastname']")
    }

    get purchaseCompanyName () {
        return $("[name='company']") 
    }

    get purchaseStreetAddress () {
        return $("[name='street[0]']")
    }

    get purchaseCityName () {
        return $("[name='city']")
    }

    get purchaseStateName () {
        return $("[name='region_id']")
    }

    get purchaseZipCode () {
        return $("[name='postcode']")
    }

    get purchaseCountryName () {
        return $("[name='country_id']")
    }

    get purchasePhoneNumber () {
        return $("[name='telephone']")
    }

    get purchaseConfirm () {
        return $('button=Next')
    }

    get placeOrder () {
        return $('button=Place Order')
    }

    get orderTrack () {
    
        return $('.checkout-success')
        
    }


    async purchase (email,fname,lname,company,street,city,index,zip,country,phone) {
        
        await browser.pause(2000);
        if (await $("#customer-email").isDisplayed()===true){

            await this.purchaseCustomerEmail.setValue(email);
        }
        await this.purchaseFirstName.setValue(fname);
        await this.purchaseLastName.setValue(lname);
        await this.purchaseCompanyName.setValue(company);
        await this.purchaseStreetAddress.setValue(street);
        await this.purchaseCityName.setValue(city);
        await this.purchaseZipCode.setValue(zip);
        await browser.pause(2000);
        await this.purchaseCountryName.selectByVisibleText(country);
        await this.purchaseStateName.selectByIndex(index);
        await this.purchasePhoneNumber.setValue(phone);
        await browser.pause(3000);
        await this.purchaseConfirm.click();
        await browser.pause(5000)
        await this.placeOrder.click();
        await browser.pause(5000);
        await expect(browser).toHaveTitle('Success Page')
        console.log("You successfully placed a order.Thank you!")
 
           
    }


    open () {
        return super.open('');
    }
}

export default new ProductPage();