import { test} from '../../fixtures/pom-fixtures'
import { LoginPage } from '../../pages/LoginPage';



 test('has title', async ({ page,loginPage }) => {  
  await loginPage.goToHRM();
  await loginPage.loginToApp('Admin','admin123');
  
});


