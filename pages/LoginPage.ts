import { Locator, Page } from "@playwright/test";
class LoginPage{

    readonly userName: Locator;
    readonly password:Locator;
    readonly loginButton:Locator;
    readonly page:Page;

    constructor(page:Page){
        this.page=page;
        this.userName=page.getByRole('textbox',{name:'username'});
        this.password=page.getByRole('textbox',{name:'password'});
        this.loginButton=page.getByRole('button',{name:' Login '})
    }

    /**
     * Navigate to Orange HRM
     */
     async goToHRM(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
    }

    /**
     * 
     * @param userName Login into Orange HRM
     * @param password 
     */
    async loginToApp(userName:string, password:string){
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    
}