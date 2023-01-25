/**
 * 3. Sumatoria
	Debés crear una función llamada `summation` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

Ejemplo: 
summation(3) debe retornar 6 porque hace (1 +2 +3)
summation(8) debe retornar 36


 */

function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(summation(8));
