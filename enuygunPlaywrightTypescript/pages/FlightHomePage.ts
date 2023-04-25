import { Locator, Page } from "@playwright/test";
import { BasePage } from './BasePage';

export class FlightHomePage extends BasePage{

    private readonly page: Page;
    private readonly signUpButton: Locator;

    private SIGN_UP_BUTTON: string = "#ctx-RegisterBtn";

        constructor(page: Page){
            super();
            this.page = page;
            this.signUpButton = page.locator(this.SIGN_UP_BUTTON);
        }
        
         async navigateToSignUpPage(){
            await this.click(this.signUpButton);
            console.log("Clicked the Sign Up Button in Flight Home Page");
        }
}