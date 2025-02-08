const { Builder, By, until } = require('selenium-webdriver');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function testForm() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Maximizar la ventana antes de la prueba
        await driver.manage().window().maximize();
        console.log("Ventana maximizada.");
        await sleep(2000); // Espera 2 segundos para ver la ventana maximizada

        // Navegar a la página
        await driver.get('http://127.0.0.1:8080/Home.html');
        console.log("Página cargada.");
        await sleep(2000); // Espera 2 segundos antes de interactuar

        // Ingresar texto en el cuadro de email
        let emailInput = await driver.findElement(By.id('textBox'));
        await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", messageInput);
        await emailInput.sendKeys('usuario@gmail.com');
        console.log("Email ingresado.");
        await sleep(2000); // Espera 2 segundos para ver el email escrito

        
        // Ingresar texto en el área de mensaje
        let messageInput = await driver.findElement(By.id('textArea'));
        await messageInput.sendKeys('Este es un mensaje de prueba.');
        console.log("Mensaje ingresado.");
        await sleep(2000); // Espera 2 segundos para ver el mensaje escrito

        // Esperar hasta que el botón sea interactuable
        let button = await driver.wait(until.elementLocated(By.id('sendButton')), 5000);
        await driver.wait(until.elementIsVisible(button), 5000);
        await driver.wait(until.elementIsEnabled(button), 5000);
        console.log("Botón encontrado y listo para clic.");

        // Usar acción de clic con el mouse
        await driver.actions().move({ origin: button }).click().perform();
        console.log("Clic realizado exitosamente.");
        
        await sleep(4000); // Espera 4 segundos para ver el resultado antes de cerrar

    } catch (error) {
        console.error("Error durante la prueba:", error);
    } finally {
        await driver.quit();
    }
}

testForm();



