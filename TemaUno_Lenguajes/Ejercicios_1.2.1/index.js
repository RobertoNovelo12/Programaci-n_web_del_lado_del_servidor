// Ejercicios 1.2.1 Sintaxis básica de NodeJS
// Jorge Roberto Novelo Poot

console.log("==== EJERCICIO B - Declaracion de todos los tipos de variable ====")

var entero = 1;
var decimal = 12.1;
var verd_fal = true;
var palabra = "hola";
var no_definido = undefined
var nulo = null;
var noesunnumero = NaN;
var array = [1, 2, 3];

console.log("==== EJERCICIO C - Array de 5 elementos de diferentes tipos de datos ====")

let array2 = [1, "2", true, null, NaN]
console.log(array2);

console.log("==== EJERCICIO D - Función polinomica de segundo grado ====")

function polinomica(a, b) {
  return (a ** 2) + (b * a);
}

console.log(polinomica(5, 3));

console.log("==== EJERCICIO E - Función flecha que recibe un string y manipule el resultado ====")

var palabra = (texto) => { return texto.toUpperCase(); };

console.log(palabra("Hola"));

console.log("==== EJERCICIO F - Bucle del 1 al 10 de forma descendente ====")
function imprimirDescendente() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

imprimirDescendente();

console.log("==== EJERCICIO G - Objeto de institución con propiedades ====")

var institucion = {
  nombre: "Tecnológico Nacional de México",
  ciudad: "Felipe Carrillo Puerto",
  estudiantes: 1000,
  carreras: ["Ingeniería en sistemas computacionales", "Ingeniería en gestión Empresarial", "Ingeniería industrial"]
};

console.log(institucion);

console.log("==== EJERCICIO H - Descripción del objeto anterior ====")

var escuela = {
  nombre: "Tecnológico Nacional de México",
  ciudad: "Felipe Carrillo Puerto",
  estudiantes: 1000,

  descripcion: function () {
    return `La institución ${this.nombre} está en ${this.ciudad} y tiene ${this.estudiantes} estudiantes.`;
  }
};

console.log(escuela.descripcion());

console.log("==== EJERCICIO J - Función asíncrona con setTimeout y callback ====")

function operacionAsincrona(callback) {
  setTimeout(() => {
    const resultado = "Operación completada";
    callback(resultado);
  }, 2000); // 2 segundos
}

operacionAsincrona((respuesta) => {
  console.log(respuesta);
});

console.log("==== EJERCICIO K - Convertir cadena a número con manejo de errores ====")

function convertirNumero(texto) {
  try {
    const numero = Number(texto);

    if (isNaN(numero)) {
      throw new Error("No es un número válido");
    }

    console.log("Número convertido:", numero);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Pruebas
convertirNumero("123");
convertirNumero("abc");
