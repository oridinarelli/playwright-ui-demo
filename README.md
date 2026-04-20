# Playwright UI Demo

Proyecto de automatización UI desarrollado con Playwright + TypeScript.

## Prerrequisitos

- Node.js versión 18 o superior
- npm o yarn instalado

## Funcionalidades cubiertas

- Login (positivo y negativo)
- Validación de errores
- Navegación básica
- Inventario de productos
- Carrito de compras
- Checkout

## Stack

- Playwright
- TypeScript
- Page Object Model

## Estructura del Proyecto

- `pages/`: Clases Page Object para cada página (LoginPage, InventoryPage, etc.)
- `fixtures/`: Datos de prueba (usuarios, datos de checkout)
- `tests/`: Archivos de tests (login.spec.ts, inventory.spec.ts, etc.)
- `env/`: Archivos de configuración de entornos (.env)
- `playwright-report/`: Reportes de ejecución
- `test-results/`: Resultados de tests

## Instalación y Configuración

1. Clona el repositorio.
2. Instala dependencias: `npm install`
3. Instala navegadores de Playwright: `npx playwright install`

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


### Integracion CI
El pipeline se usa para:
- correr regresiones automáticas
- validar que no se rompió nada
- detectar bugs antes de producción

## Ver Reportes

Después de ejecutar tests, abre `playwright-report/index.html` en un navegador para ver el reporte detallado.

## Contribución

1. Crea una rama para tu feature.
2. Agrega tests para nuevas funcionalidades.
3. Ejecuta todos los tests antes de hacer commit.
4. Abre un Pull Request.

## Licencia

ISC