import { Builder, By, Key, until } from 'selenium-webdriver';
import dotenv from 'dotenv'
import { driver } from './main.js';

dotenv.config()

export async function doLogin() {

    await driver.findElement(By.xpath('//*[@id="login"]')).sendKeys(process.env.US);

    await driver.findElement(By.xpath('//*[@id="senha"]')).sendKeys(process.env.PASS);

    await driver.findElement(By.xpath('//*[@id="form-login"]/div[3]/button')).click();
  }
  