// JORGE ROBERTO NOVELO POOT - 8B
// a) Igualdad exacta con toBe
function suma(a, b) {
    return a + b;
}

// b) Comparación de objetos con toEqual
function crearUsuario(nombre, edad) {
    return { nombre, edad };
}

// c) Verificación de valores nulos y definidos
function valorNulo() {
    return null;
}

function valorIndefinido() {
    return undefined;
}

function valorDefinido() {
    return "Hola Mundo";
}

// d) Comparaciones numéricas
function numeroPrueba() {
    return 100;
}

// e) Coincidencia de cadenas con Expresiones Regulares
function correoPrueba() {
    return "robertonovelo98@gmail.com";
}

// f) Verificación de contenido en Arrays
function alumnos() {
    return ["Luis", "Roberto", "Ariel", "Alan"];
}

// g) Negación de Matchers con .not
function colorGarfield() {
    return "Naranja";
}

// h) Pruebas Asincronas con Promesas
function promesaCorrecta() {
    return Promise.resolve("¡Operación exitosa!");
}

function promesaIncorrecta() {
    return Promise.reject(new Error("¡Operación fallida!"));
}

module.exports = {
    suma,
    crearUsuario,
    valorNulo,
    valorIndefinido,
    valorDefinido,
    numeroPrueba,
    correoPrueba,
    alumnos,
    colorGarfield,
    promesaCorrecta,
    promesaIncorrecta,
};