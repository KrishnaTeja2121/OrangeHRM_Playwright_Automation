import { expect, Locator, Page } from "@playwright/test";
export class LoginPage {

    readonly page:Page;
    readonly userName: Locator;
    readonly password:Locator;
    readonly loginButton:Locator;
    

    constructor(page: Page){
        this.page=page;
        this.userName=page.getByRole('textbox',{name:'username'});
        this.password=page.getByRole('textbox',{name:'password'});
        this.loginButton=page.getByRole('button',{name:' Login '});
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
        await this.password.screenshot({path: 'full-page.png'});
        await this.loginButton.click();
        await expect(this.loginButton).toBeHidden();
    }
    
}
