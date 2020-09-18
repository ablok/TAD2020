import { WebDriver, Builder } from "selenium-webdriver";

abstract class BasePage {
    driver: WebDriver;
    url: string;

    constructor(driver: WebDriver, url: string) {
        this.driver = driver;
        this.url = url;
    }

    async open() {
        await driver.get(this.url);
    }
}

class LoginPage extends BasePage {
    constructor(driver: WebDriver) {
        super(driver, "http://myloginpage");
    }
}

const driver = new Builder().forBrowser("chrome").build();
await new LoginPage(driver).open();
