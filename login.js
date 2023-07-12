import { Builder, By, Key, until } from 'selenium-webdriver';

export async function doLogin(driver) {

    await driver.findElement(By.xpath('//*[@id="login"]')).sendKeys('wh.cliente');

    await driver.findElement(By.xpath('//*[@id="senha"]')).sendKeys('wh.cliente1!A');

    await driver.findElement(By.xpath('//*[@id="form-login"]/div[3]/button')).click();
  }
  