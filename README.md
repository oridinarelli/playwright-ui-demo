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