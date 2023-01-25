/*4. Callback
Debes crear una función llamada callback que reciba como Parámetros un número y una función. Esta deberá retornar el resultado de esa función pasándole como argumento el número que llega por parámetro.

Ejemplo:
callback(5, (num)=>{return num*10}) debe retornar 50
callback(25, (num)=>{return num/5}) debe retornar 5

*/

function callback(n, fn) {
  return fn(n);
}
console.log(
  callback(5, (num) => {
    return num * 10;
  })
);
