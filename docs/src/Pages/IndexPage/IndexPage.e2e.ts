import * as playwright from 'playwright';

describe('Home page', () => {
    let browser: playwright.Browser;
    let context: playwright.BrowserContext;
    let page: playwright.Page;

    beforeAll(async () => {
        browser = await playwright[process.env.TEST_BROWSER].launch();
        context = await browser.newContext();
        page = await context.newPage();

        await page.setViewportSize({
            width: 1800,
            height: 1250,
        });
    });

    beforeEach(async () => {
        await page.goto('http://localhost:4040/', {
            waitUntil: 'networkidle',
        });
    });

    it('should contain Chameleon SideBar', async () => {
        expect(await page.$('[data-testid="side-bar-logo-button"]')).not.toBeNull();
    });

    it('should open Chameleon SideBar on a click', async () => {
        await page.click('[data-testid="side-bar-logo-button"]');

        const barEditor = await page.$('[data-testid="side-bar-editor"]');

        expect(barEditor).not.toBeNull();

        await barEditor.screenshot({ path: 'coverage/screenshots/side-bar-editor.png', omitBackground: true });
    });

    afterAll(async () => {
        await browser.close();
    });
});
