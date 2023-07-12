import { Builder, By, Key, until } from 'selenium-webdriver';

export async function encontraServico(driver) {

    await driver.findElement(By.xpath('//*[@id="datatables-padrao"]/tbody/tr[1]/td[8]/a[1]/i')).click();
    
    const handles = await driver.getAllWindowHandles();

    console.log(handles)

    await driver.sleep(1000);
    
    await driver.switchTo().window(handles[1]);// vai p nova aba 

    await driver.sleep(10000);
  }
  