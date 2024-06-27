import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {

    get inputUsername () {
        return $('#email');
    }

    get inputPassword () {
        return $('#pass');
    }

    get btnSubmit () {
        return $('button[class="action login primary"]');
    }

    
    async login (email, pass) {
        await this.inputUsername.setValue(email);
        await this.inputPassword.setValue(pass);
        await this.btnSubmit.click();
    }


    open () {
        return super.open('customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/');
    }
}

export default new LoginPage();
