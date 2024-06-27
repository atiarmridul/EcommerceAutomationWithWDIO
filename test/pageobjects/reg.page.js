import { $ } from '@wdio/globals'
import Page from './page.js';


class RegPage extends Page {

    get firstName () {
        return $('#firstname');
    }

    get lastName () {
        return $('#lastname');
    }

    get emailAddress () {
        return $('#email_address');
    }

    get password () {
        return $('#password');
    }

    get confirmPassword () {
        return $('#password-confirmation');
    }

    get btnSubmit () {
        return $('button[class="action submit primary"]');
    }
    
   

    async registration (firstname, lastname, emailAddress, password, confirmPassword) {
        
        
        await this.firstName.setValue(firstname);
        await this.lastName.setValue(lastname);
        await this.emailAddress.setValue(emailAddress);
        await this.password.setValue(password);
        await this.confirmPassword.setValue(confirmPassword);
        await this.btnSubmit.click();
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/customer/account/', {message :`One reason might be we are using Existing email`})
     
    }


    open () {
        return super.open('customer/account/create/');
    }
}

export default new RegPage();
