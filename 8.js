/**8. Mover ceros a lo último
Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.

Ejemplo: 
moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]

 */
function moveZeros(arr) {
  let cero = [];
  let noCero = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      cero.push(arr[i]);
    } else {
      noCero.push(arr[i]);
    }
  }
  return noCero.concat(cero);
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
