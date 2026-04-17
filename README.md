# Playwright UI Demo

Proyecto de automatización UI desarrollado con Playwright + TypeScript.

## Funcionalidades cubiertas

- Login (positivo y negativo)
- Validación de errores
- Navegación básica

## Stack

- Playwright
- TypeScript
- Page Object Model

## Ejecutar tests

npm install
npx playwright install
npm test

## Environments

Este proyecto permite ejecutar tests en distintos ambientes mediante variables de entorno.

Ejemplo:

npm run test:qa
npm run test:staging

Los ambientes están definidos en la carpeta /env y contienen configuraciones como baseURL y flags de ejecución.
El ambiente se define mediante la variable: TEST_ENV

Ejemplo:

TEST_ENV=qa npx playwright test

cross-env permite definir variables de entorno de forma compatible entre distintos sistemas operativos.

## Visualización de ejecución en navegador

El proyecto permite ejecutar los tests visualmente en el navegador o en modo interactivo para facilitar el debugging y análisis.

---

## Como ejecutar los test con navegador abierto

---

### Ejecutar tests viendo el navegador (headed)

````bash
npm run test:qa -- --headed
````
---

### Ejecutar tests viendo Modo UI (interactivo)

````bash
npx playwright test --ui 

- ejecutar tests individualmente
- visualizar cada paso de ejecución
- inspeccionar locators
- analizar fallos de forma interactiva
````
---

### Ejecutar tests viendo Modo debug (headed)
````bash
npx playwright test --debug
````
---

### Ejecutar un test específico
````bash
npx playwright test tests/login.spec.ts --headed
````
Permite ejecutar un archivo de test puntual y visualizar su ejecución.
