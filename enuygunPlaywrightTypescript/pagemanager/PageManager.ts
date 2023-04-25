import { Page } from "@playwright/test";
import { FlightHomePage } from "../pages/FlightHomePage";
import { RegisterPage } from "../pages/RegisterPage";

export class PageManager {
 
    private readonly page: Page;
    private readonly homePage: FlightHomePage;
    private readonly signUpPage: RegisterPage;
    
    constructor(page: Page) {
        this.page = page;
        this.homePage = new FlightHomePage(page);
        this.signUpPage = new RegisterPage(page);
    }

    public getHomePage() {
        return this.homePage;
    }

    public getSignUpPage() {
        return this.signUpPage;
    }
}