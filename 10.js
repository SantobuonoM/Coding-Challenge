/**10. Mezclar arreglos
Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.

Ejemplo: 
mezclarArreglos([1,2,3,4],[“h","o","l","a"]) debe retornar [1, “h", 2,"o", 3,"l",4,"a"]
mezclarArreglos([1,2,3,4], [“h","p"]) debe retornar [1, “h", 2, “p", 3 , 4]
mezclarArreglos([“h","p"], [1,2,3,4]) debe retornar [“h", 1, “p", 2, 3 , 4]

 */
function mezclarArreglos(a, b) {
  let newArr = [];
    let length =  a.length > b.length ? a.length : b.length
  for (let i = 0; i < length; i++) {
    a[i] ? newArr.push(a[i]) : null;
    b[i] ? newArr.push(b[i]) : null;
  }
  return newArr;
}
console.log(mezclarArreglos([1, 2, 3, 4], ["h", "o", "l", "a"]));
console.log(mezclarArreglos(["h", "p"], [1, 2, 3, 4]));
