import { Builder, By, Key, until } from 'selenium-webdriver';
import { driver } from './main.js';

export async function encontraServico() {

    await driver.findElement(By.xpath('//*[@id="datatables-padrao"]/tbody/tr[1]/td[8]/a[1]/i')).click();
    await driver.sleep(1000);

    let abas = await driver.getAllWindowHandles();
    console.log(abas)

    
    await driver.switchTo().window(abas[1]);// vai p nova aba 
    // await driver.sleep(5000);

//     encontraFunc(driver)
// }

// async function encontraFunc(){

    console.log('chega aqui')

    await driver.findElement(By.xpath('//*[@id="grid-subtela"]/div/div[3]/div[2]/h3[1]')).click()

    await driver.sleep(1000);

    abas = await driver.getAllWindowHandles();

    console.log(abas)

    await driver.switchTo().window(abas[2])

    await waitUntilShow(driver, By.xpath('//*[@id="btnIsencao-10"]'));

    console.log(2)

    await driver.findElement(By.xpath('//*[@id="btnIsencao-10"]')).click();

    console.log(3)

    await waitUntilShow(driver, By.xpath('//*[@id="data-final"]'))

    await driver.findElement(By.xpath('//*[@id="data-final"]')).sendKeys('05/01/2023')

    await driver.findElement(By.xpath('//*[@id="swal2-content"]/div[4]/div/button')).click()

    await driver.findElement(By.xpath('//*[@id="swal2-content"]/div[4]/div/div/div[2]/ul/li[1]')).click()

    await driver.findElement(By.className('swal2-confirm btn btn-success')).click()

    await driver.sleep(10000);

    
}
  

async function waitUntilShow(driver, locator) {
    await driver.wait(until.elementLocated(locator));
    await driver.wait(until.elementIsVisible(driver.findElement(locator)));
}
  