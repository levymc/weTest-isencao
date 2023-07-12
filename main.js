import { Builder, By, Key, until } from 'selenium-webdriver';
import { doLogin } from './login.js';
import { encontraServico } from './middleware.js';
import dotenv from 'dotenv'

dotenv.config()

export const driver = await new Builder().forBrowser('chrome').build();

async function main() {

  

    try {
        await driver.get(process.env.URL);

        await doLogin(driver)

        await driver.sleep(4000)


        await encontraServico(driver);

    }catch(err){
        console.error(err)
    }
    
    finally {
        
        await driver.quit();
    }
}

main();
