import {Locator, Page} from "@playwright/test";

export class naukariLogin{
 
    page:Page
    loginID:Locator
    emailfield:Locator
    password:Locator
    Loginbutton:Locator
    viewProfile:Locator
    editlinkclick:Locator
    saveUserProfile:Locator
    finalverification:Locator

    constructor(page:Page){
this.page=page;
this.loginID=page.locator("#login_Layer");
this.emailfield=page.getByPlaceholder("Enter your active Email ID / Username");
this.password=page.getByPlaceholder("Enter your password");
this.Loginbutton=page.getByRole('button', { name: 'Login', exact: true })
this.viewProfile=page.locator("//div[@class='view-profile-wrapper']//a[text()='View']");
this.editlinkclick=page.locator("//div[@class='hdn']//em[text()='editOneTheme']");
this.saveUserProfile=page.locator("#saveBasicDetailsBtn");
this.finalverification=page.locator("//span[@class='typ-14Medium mod-date-val']")
}

    async loginbutton(){
      await this.loginID.click();
    }
    async enteremail(emailID:string){
        await this.emailfield.fill(emailID);
    }

    async enterpassword(password:string){
        await this.password.fill(password);
    }
    async Loginbuttonclick(){
        await this.Loginbutton.click();
    }
    async userProfile(){
        await this.viewProfile.click();
    }

    async clickoneditLink(){
        this.editlinkclick.click();
    }

    async clickonSaveButton(){
        // await this.saveUserProfile.waitFor({state:'visible'});
        // await this.saveUserProfile.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(6000);
       await this.saveUserProfile.click({force:true});
    }
        
    async  finalmessage(){
        await this.page.waitForTimeout(4000);
        this.finalverification.isDisabled();
    }

}

  



   