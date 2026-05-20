// JORGE ROBERTO NOVELO POOT - 8B
const {
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
} = require("./suma.js");

// prueba inicial para validar una suma simple
test('suma de 1 y 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});

// a) toBe - Verifica igualdad exacta entre dos valores
test("10 + 10 es igual a 20", () => {
    expect(suma(10, 10)).toBe(20);
});

// b) toEqual - Comprueba que dos objetos tengan el mismo contenido
test("dos objetos con las mismas propiedades son iguales", () => {
    expect(crearUsuario("Roberto", 22)).toEqual({ nombre: "Roberto", edad: 22 });
});

// c) Validaciones de valores null, undefined y definidos
test("el valor es nulo", () => {
    expect(valorNulo()).toBeNull();
});

test("el valor es indefinido", () => {
    expect(valorIndefinido()).toBeUndefined();
});

test("el valor es definido", () => {
    expect(valorDefinido()).toBeDefined();
});

// d) Comparaciones de números usando distintos matchers
test("100 es mayor que 10", () => {
    expect(numeroPrueba()).toBeGreaterThan(10);
});

test("120 es menor que 20", () => {
    expect(numeroPrueba()).toBeLessThan(120);
});

test("100 es mayor o igual a 15", () => {
    expect(numeroPrueba()).toBeGreaterThanOrEqual(15);
});

// e) Uso de expresiones regulares para validar cadenas
test("el email contiene '@gmail.com'", () => {
    expect(correoPrueba()).toMatch(/@gmail\.com$/);
});

// f) Verifica si un elemento existe dentro de un array
test("la lista tiene a 'Roberto'", () => {
    expect(alumnos()).toContain("Roberto");
});

// g) Uso de .not para comprobar desigualdad
test("Garfield no es 'rojo'", () => {
    expect(colorGarfield()).not.toBe("rojo");
});

// h) Validación de promesas resueltas y rechazadas
test("la promesa se resolvio correctamente", () => {
    return expect(promesaCorrecta()).resolves.toBe("¡Operación exitosa!");
});

test("la promesa se rechazo con un error", () => {
    return expect(promesaIncorrecta()).rejects.toThrow("¡Operación fallida!");
});