import {test} from '../fixtures/common-fixtures'


test('Global Setup', async ({page,loginPage,commonUtils})=>{
    await loginPage.goToHRM();
    await loginPage.loginToApp('a','a');
    await page.context().storageState({path:'./playwright/.auth/auth.json'});

})