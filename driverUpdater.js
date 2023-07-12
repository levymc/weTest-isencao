import pkg from 'selenium-webdriver/chrome.js';

const { install } = pkg;

// Função para atualizar o driver
export async function updateDriver() {
  try {
    // Tentar instalar o driver automaticamente usando o Selenium Manager
    await install;
    console.log('Driver atualizado com sucesso!');
  } catch (error) {
    console.error('Falha ao atualizar o driver:', error);
  }
}
