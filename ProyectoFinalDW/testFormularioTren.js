const { Builder, By, Key, until } = require('selenium-webdriver');

async function testFormulario() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        // 1. Abrir la página y maximizar
        await driver.get('http://127.0.0.1:8080/Home.html'); 
        await driver.manage().window().maximize();
        console.log("Página cargada y maximizada.");
        await sleep(2000);

        // 2. Seleccionar "Desde"
        let dropdownDesde = await driver.findElement(By.id('dropdown1'));
        await dropdownDesde.sendKeys("Santiago");
        console.log("Seleccionado 'Desde': Santiago.");
        await sleep(2000);

        // 3. Seleccionar "Hasta"
        let dropdownHasta = await driver.findElement(By.id('dropdown2')); // ID corregido
        await dropdownHasta.sendKeys("Punta Cana");
        console.log("Seleccionado 'Hasta': Punta Cana.");
        await sleep(2000);

        // 4. Ingresar fechas (corrigiendo formato)
        let dateDesde = await driver.findElement(By.id('dateDesde'));
        await dateDesde.clear();
        await dateDesde.sendKeys("10-12-2024");
        console.log("Fecha de ida ingresada correctamente.");
        await sleep(2000);

        let dateHasta = await driver.findElement(By.id('dateHasta'));
        await dateHasta.clear();
        await dateHasta.sendKeys("11-12-2024");
        console.log("Fecha de vuelta ingresada correctamente.");
        await sleep(2000);

        // 5. Ingresar adultos y niños
        let adultos = await driver.findElement(By.id('adultosCount'));
        await adultos.clear();
        await adultos.sendKeys("2");
        console.log("Cantidad de adultos ingresada.");
        await sleep(2000);

        let ninos = await driver.findElement(By.id('ninosCount'));
        await ninos.clear();
        await ninos.sendKeys("1");
        console.log("Cantidad de niños ingresada.");
        await sleep(2000);

        // 6. Marcar el checkbox de "Extranjero"
        let checkbox = await driver.findElement(By.id('flexCheckDefault'));
        await checkbox.click();
        console.log("Checkbox 'Extranjero' marcado.");
        await sleep(2000);

        // 7. Hacer clic en el botón
        let submitButton = await driver.findElement(By.id('submitButton'));
        await submitButton.click();
        console.log("Botón 'Buscar billetes' clickeado.");
        await sleep(3000); // Espera 3 segundos antes del scroll

        // 8. Hacer scroll suave después de hacer clic
        await driver.executeScript(`
            window.scrollBy({ top: 500, left: 0, behavior: 'smooth' });
        `);
        console.log("Scroll suave realizado después del clic.");
        await sleep(2000);

    } finally {
        // Cerrar navegador
        await driver.quit();
    }
}

// Función sleep para pausas
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Ejecutar la prueba
testFormulario();
