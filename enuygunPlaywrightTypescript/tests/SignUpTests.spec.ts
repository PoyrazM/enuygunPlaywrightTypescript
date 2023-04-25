import test, { Page } from "@playwright/test";
import { DataGenerator } from "../data/DataGenerator";
import { FlightHomePage } from "../pages/FlightHomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { PageManager } from "../pagemanager/PageManager";
import { Domains } from "../data/Domains";

let homePage: FlightHomePage;
let signUpPage: RegisterPage;
    
test.describe("Sign Up Test Cases", () => {
    test.beforeEach(async ({page}) => {
        const pageManager = new PageManager(page);
        homePage = pageManager.getHomePage();
        signUpPage = pageManager.getSignUpPage();

        await page.goto(Domains.FLIGHT_DOMAIN);
    })

    test("Successfully Sign Up Test", async () => {
        await homePage.navigateToSignUpPage();
        await signUpPage.fillValidEmailAndValidPassword(DataGenerator.EMAIL, DataGenerator.PASSWORD, DataGenerator.IS_ACCEPT);
    })

    test("Failure Sign Up Test With Invalid Email", async () => {
        await homePage.navigateToSignUpPage();
        await signUpPage.fillInvalidEmailAndValidPassword(DataGenerator.INVALID_EMAIL, DataGenerator.PASSWORD, DataGenerator.IS_ACCEPT);
    })

    test("Failure Sign Up Test With Invalid Password", async () => {
        await homePage.navigateToSignUpPage();
        await signUpPage.fillValidEmailAndInvalidPassword(DataGenerator.EMAIL, DataGenerator.INVALID_PASSWORD, DataGenerator.IS_ACCEPT);
    })

    test("Failure Sign Up Test With Invalid Email And Invalid Password", async () => {
        await homePage.navigateToSignUpPage();
        await signUpPage.fillInvalidEmailAndInvalidPassword(DataGenerator.INVALID_EMAIL, DataGenerator.INVALID_PASSWORD, DataGenerator.IS_ACCEPT);
    })
})
    

