const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
const store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
const valor = document.querySelector('#valor');

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  const counter = store.getState().contador;
  valor.innerHTML = counter;
}

// Ejecutamos la función 'renderContador':
renderContador()

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador) // Accede a la información del estado global, queda atento a la prop contador

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

let botonInc = document.querySelector('#incremento')
botonInc.addEventListener('click', () => store.dispatch(incremento()));

let botonDec = document.querySelector('#decremento')
botonDec.addEventListener('click', () => store.dispatch(decremento()));

let impar = document.querySelector('#incrementoImpar')
impar.addEventListener('click', () => store.getState().contador %2!==0 && store.dispatch(incremento()));

let async = document.querySelector('#incrementoAsync');
async.addEventListener('click', () => {setTimeout( () => {
  store.dispatch( incremento() ) }, 2000);
})


///////////////////
// function hola() {
//   console.log(valueImpar);
// }
// hola();