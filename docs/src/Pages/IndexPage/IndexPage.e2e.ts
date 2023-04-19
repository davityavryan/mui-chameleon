import { test, expect } from '@playwright/test';

import { user } from 'test-utils';

test.describe('Home page', () => {
    test('should contain Chameleon SideBar', async ({ page }) => {
        await page.goto('http://localhost:4040/', {
            waitUntil: 'networkidle',
        });

        expect(await page.$('[data-testid="side-bar-logo-button"]')).not.toBeNull();
    });

    test('should open Chameleon SideBar on a click', async ({ page }) => {
        await page.goto('http://localhost:4040/', {
            waitUntil: 'networkidle',
        });

        await page.click('[data-testid="side-bar-logo-button"]');

        const barEditor = await page.$('[data-testid="side-bar-editor"]');

        expect(barEditor).not.toBeNull();

        await barEditor.screenshot({ path: 'coverage/screenshots/side-bar-editor.png', omitBackground: true });
    });
});
