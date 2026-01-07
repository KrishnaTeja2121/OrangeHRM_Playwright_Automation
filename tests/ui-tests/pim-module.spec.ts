import { test, expect } from '../../fixtures/hooks-fixture';
import pimDate from '../../data/pim-module-data.json';


test('[PIM]Verify that a new employee is successfully created under the PIM module.', {
    tag: ['@UI', '@UAT'],
    annotation: {
        type: 'Test Case Link',
        description: 'https://dev.azure.com/wishinfinite/WishInfinite/_workitems/edit/6/'
    }
}, async ({ gotoUrl, leftNavigationPage, pimPage }) => {
    await test.step("Open PIM Module", async () => {
        await leftNavigationPage.openPimModule();
    })
    await test.step('Add Employee in PIM Module', async () => {
        await pimPage.addEmployee(pimDate.first_name, pimDate.middle_name, pimDate.last_name);
        await expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimDate.first_name} ${pimDate.last_name}`);
    })
})