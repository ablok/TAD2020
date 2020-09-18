import { Builder } from "selenium-webdriver";

async function main() {
    const driver = await new Builder().forBrowser("chrome").build();
    await driver.executeScript(() => {
        window.alert("Hello world!");
    });
}

await main();
