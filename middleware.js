import { Builder, By, Key, until } from 'selenium-webdriver';
import { driver } from './main.js';

export async function encontraServico() {

    await driver.findElement(By.xpath('//*[@id="datatables-padrao"]/tbody/tr[1]/td[8]/a[1]/i')).click();
    await driver.sleep(1000);

    let abas = await driver.getAllWindowHandles();
    console.log(abas)

    
    await driver.switchTo().window(abas[1]);// vai p nova aba 

    // console.log('chega aqui')

    await driver.findElement(By.xpath('//*[@id="grid-subtela"]/div/div[3]/div[2]/h3[1]')).click()

    await driver.sleep(1000);

    

    for (let i = 1; i <= 5; i++){
        await modalIsencao(i)
    }
    
}

async function modalIsencao(i){

    const abas = await driver.getAllWindowHandles();

    await driver.switchTo().window(abas[2])

    // comeca o modalIsencao

    await waitUntilShow(driver, By.xpath('//*[@id="btnIsencao-10"]'));

    await driver.findElement(By.xpath('//*[@id="btnIsencao-10"]')).click();

    await waitUntilShow(driver, By.xpath('//*[@id="data-final"]'))

    await driver.findElement(By.xpath('//*[@id="data-final"]')).sendKeys('05012023')

    await driver.findElement(By.xpath('//*[@id="swal2-title"]')).click()

    await driver.findElement(By.xpath('//*[@id="swal2-content"]/div[4]/div/button')).click()

    console.log(1)
    await driver.sleep(1000)

    await driver.findElement(By.xpath(`//*[@id="swal2-content"]/div[4]/div/div/div[2]/ul/li[${i}]`)).click()
    console.log(2)

    await driver.sleep(1000)

    await driver.findElement(By.className('swal2-confirm btn btn-success')).click()

    await driver.sleep(3000)

    await waitUntilShow(driver, By.className('swal2-confirm btn btn-success'))

    await driver.findElement(By.className('swal2-confirm btn btn-success')).click()

    console.log("Realizou a isenção com sucesso!")

    // Ate aqui realizou a isencao, agora vai comecar a remover ela

    await waitUntilShow(driver, By.xpath('//*[@id="datatables-servicos-pendencias_filter"]'))

    await removeIsencao(driver)

    
}
  
async function removeIsencao(driver){
    let abas = await driver.getAllWindowHandles();
    console.log(abas)
    await driver.switchTo().window(abas[2])
    
    await driver.sleep(3000)

    await driver.findElement(By.xpath('//*[@id="btnIsencao-10"]')).click()

    await driver.sleep(3000)
    console.log(1)

    await driver.findElement(By.className('action-footer-swal')).click()
    console.log(2)

    await waitUntilShow(driver, By.className('swal2-confirm btn btn-success'))
    console.log(3)

    await driver.findElement(By.className('swal2-confirm btn btn-success')).click()
    console.log(4)

    await waitUntilShow(driver, By.className('swal2-confirm btn btn-success'))
    console.log(5)

    await driver.findElement(By.className('swal2-confirm btn btn-success')).click()
    console.log(6)


    await driver.sleep(3000)

}


async function waitUntilShow(driver, locator) {
    await driver.wait(until.elementLocated(locator));
    await driver.wait(until.elementIsVisible(driver.findElement(locator)));
}
  