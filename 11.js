/**11. Arreglos
Investigá los siguientes métodos de los arreglos y replicá su funcionamiento de manera lógica al igual que lo hiciste en el ejercicio número 5: 
1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”
2. “pop([1,2,3,4,5])” debe retornar 5
3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]
 */

function join(array) {
  let separador = " ";
  let resultado = "";

  for (let i = 0; i < array.length; i++) {
    resultado += array[i];
    if (i < array.length - 1) {
      resultado += separador;
    }
  }
  console.log(resultado); // "1 2 3 4 5"
}
join([1,2,3,4,5])