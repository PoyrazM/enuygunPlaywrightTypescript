import { expect, Locator } from "@playwright/test";

export class BasePage {
    
    async click(locator: Locator) {
        await locator.click();
    }

    async sendKeys(locator: Locator, key: string) {
        await locator.fill(key);
    }

    async validateCheckBox(locator: Locator) {
        await expect(locator).toBeChecked();
    }

    async validateText(locator: Locator, validationText: string) {
       await expect(locator).toHaveText(validationText);
    }
}