import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage{
        private readonly page: Page;
        private readonly emailInput: Locator;
        private readonly passwordInput: Locator;
        private readonly acceptEmailCheckBox: Locator;
        private readonly signUpButton: Locator;
        private readonly invalidEmailMessage: Locator;
        private readonly invalidPasswordMessage: Locator;

        private EMAIL_INPUT: string = "[name='_email']";
        private PASSWORD_INPUT: string = ".katalon__modal-password";
        private ACCEPT_EMAIL_CHECKBOX: string = "//*[@id='_acceptEmails']";
        private SIGN_UP_BUTTON : string = ".katalon__modal-register-button";
        private INVALID_EMAIL_MESSAGE_LOCATOR: string = ".membership--form-field--base:has(input[name='_email']) p";
        private INVALID_PASSWORD_MESSAGE_LOCATOR: string = ".membership--form-field--base:has(input[name='_password']) p";

        constructor(page: Page) {
            super();
            this.page = page;
            this.emailInput = page.locator(this.EMAIL_INPUT);
            this.passwordInput = page.locator(this.PASSWORD_INPUT);
            this.acceptEmailCheckBox = page.locator(this.ACCEPT_EMAIL_CHECKBOX);
            this.signUpButton = page.locator(this.SIGN_UP_BUTTON);
            this.invalidEmailMessage = page.locator(this.INVALID_EMAIL_MESSAGE_LOCATOR);
            this.invalidPasswordMessage = page.locator(this.INVALID_PASSWORD_MESSAGE_LOCATOR);
        }

        private EMAIL_ERROR_MESSAGE: string = "Lütfen, geçerli bir e-posta adresi girdiğinizden emin olun.";
        private PASSWORD_ERROR_MESSAGE: string = "Bu alan en az 6 karakterden oluşmalıdır.";

            async fillValidEmailAndValidPassword(email: string, password: string, isAccept: boolean) {
                await this.fillInputFields(email, password, isAccept);
            }

            async fillInvalidEmailAndValidPassword(email: string, password: string, isAccept: boolean) {
                await this.fillInputFields(email, password, isAccept);
                await this.validateText(this.invalidEmailMessage, this.EMAIL_ERROR_MESSAGE);
            }

            async fillValidEmailAndInvalidPassword(email: string, password: string, isAccept: boolean) {
                await this.fillInputFields(email, password, isAccept);
                await this.validateText(this.invalidPasswordMessage, this.PASSWORD_ERROR_MESSAGE);
            }

            async fillInvalidEmailAndInvalidPassword(email: string, password: string, isAccept: boolean) {
                await this.fillInputFields(email, password, isAccept);
                await this.validateText(this.invalidEmailMessage, this.EMAIL_ERROR_MESSAGE);
                await this.validateText(this.invalidPasswordMessage, this.PASSWORD_ERROR_MESSAGE);
            }

            private async fillInputFields(email: string, password: string, isAccept: boolean) {
                await this.sendKeys(this.emailInput, email);
                await this.sendKeys(this.passwordInput, password);

                if(isAccept) {
                    await this.click(this.acceptEmailCheckBox);
                    await this.validateCheckBox(this.acceptEmailCheckBox);
                }
                
                await this.click(this.signUpButton);
            } 
}