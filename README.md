# Tutorial de iniciación a TypeScript

## Iniciar el proyecto

```sh
mkdir ts-example
cd ts-example

# Iniciar NPM package.json
npm init -y
```

## Instalar TypeScript

```sh
# Instalar typescript
npm i typescript
```

## Primer script

```sh
# Instalar los tipos de Node
npm i -D @types/node
```

Creamos el archivo `src/index.ts`:

```typescript
import { writeFileSync } from "fs";

function save(text: string) {
  writeFileSync("./output", text);
  console.log("Saved to disk");
}

save("Hello World!");
```

# Compilar TypeScript

```sh
# Instalar ts-node, un interprete Node que compila TypeScript
npm i ts-node

# Inicializar TypeScript config file
npx tsc --init
```

Añadir el siguiente script al `package.json`:

```json
...
"scripts": {
    "build": "tsc"
}
...
```

Ahora ejecutamos el script:

```sh
npm run build
```

Si la compilación fue satisfactoria, el archivo `src/index.js` debería
de existir.

## Ejecutar el script

Para ejecutar el programa utilizaremos `ts-node`, y es tan sencillo
como añadir el siguiente script:

```json
"scripts": {
    ...
    "start": "ts-node src/index.ts",
    ...
}
```

Después ejecutamos el script:

```sh
npm run start

# > ts-example@1.0.0 start /Users/carlosbaraza/dev/ts-example
# > ts-node src/index.ts
#
# Saved to disk
```

## Arrancar en modo --watch

Si queremos que el script se ejecute automáticamente cuando modificamos
el archivo `.ts`, podemos usar `nodemon`, que es un programa diseñado
para especificamente esto.

```sh
# Instalamos nodemon
npm i -D nodemon
```

añadimos los siguientes scripts al `package.json`:

```json
"scripts": {
    ...
    "start:watch": "nodemon --exec ts-node src/index.ts"
    ...
}
```

finalmente, ejecutamos el script:

```sh
npm run start:watch

# $ npm run start:watch
#
# > ts-example@1.0.0 start:watch /Users/carlosbaraza/dev/ts-example
# > nodemon --exec ts-node src/index.ts
#
# [nodemon] 1.19.1
# [nodemon] to restart at any time, enter `rs`
# [nodemon] watching: *.*
# [nodemon] starting `ts-node src/index.ts`
# Saved to disk
# [nodemon] clean exit - waiting for changes before restart
```
