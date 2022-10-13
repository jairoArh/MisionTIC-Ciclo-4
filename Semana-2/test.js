(function hello( name ){
    console.log(`Hola ${name}`)
})("Hugo")

//Operador ternario

const numOne = 200
const numTwo = 43

var great = numOne > numTwo ? numOne : numTwo
var less = numOne < numTwo ? numOne : numTwo

//El anterior operador ternario, reemplaza el siguiente código
/*if( numOne > numTwo ){
    var great = numOne
    var less = numTwo
}else{
    var great = numTwo
    var less = numOne
}*/

console.log(`Numero Mayor = ${great}, Numero Menor = ${less}`)

const age = 18

console.log("La edad es %i entonces %s",age,age >= 18 ? " Mayor de Edad" : " Menor de Edad")

/*if( age >= 18){
    console.log("Mayor de Edad")
}else{
    console.log("Menor de Edad")
}*/

/**
 * Función que calcula el factorial de n
 * 0! = 1
 * 1! = 1
 * 2! = 2 * !1  = 2
 * 3! = 3 * 2!  = 6
 */
function factorial(n){
    return n == 0 || n == 1 ? 1 :  n * factorial( n - 1)
}

//Función anónima, no tiene nombre

/**
 * Función que halla el MCD por el Algorimo de Euclides en forma recursiva
 * @param {int} x Numero mayor
 * @param {int} y Numero menor
 * @return {int} El máximo común divisor de los dos números
 */
const mcd = function(x, y){
  if ( x % y == 0 )
    return y
  return mcd(y, x % y)
}

const isEven = (n) =>{
    return n % 2 == 0
}

const isOdd = n => n % 2 != 0

const num = 28
const num1 = 21234513

//Estructuras de Control iterativas o repetitivas
//while, do..while, for

const isCousing = n => {
    let cont = 2
    let cousing = true
    while( cont <= n / 2 && cousing ){
        cousing = !( n % cont++ == 0 )
    }

    return cousing
}

const isPerfect = n => {
    let sum = 0
    let cont = 1
    do{
        sum += n % cont == 0 ? cont : 0
        cont++
    }while( cont <= n / 2)

    return n == sum
}

const nums = [543,56,25,8,78,93,32,19]

console.log( factorial(6))
console.log( mcd(60,11))
console.log("El numero %i es %s",num,isEven(num) ? " PAR" : " IMPAR")
console.log("El numero %i es %s",num1,isOdd(num1) ? " IMPAR" : " PAR")
console.log("El numero %i es %s",num1,isCousing(num1) ? " PRIMO" : " NO PRIMO")
console.log("El numero %i es %s",num,isPerfect(num) ? " PERFECTO" : " NO PERFECTO")
for (let i = 0 ; i < nums.length ; i++ ){
    console.log("nums[%i]=%i",i,nums[i])
}

console.log('**********************')
for( element of nums ){
    console.log( element )
}

nums.forEach( element => console.log(`${element}`))

console.log('**********************')

console.log(nums.sort(  (x, y) => y - x ))

/**
 * Funciones Internas
 */

/**
 * Función que realiza operaciones sobre una cadena de caracteres
 * @param {*} word Especifica la cadena
 * @param {*} action Especifica la acción (1 - contar palabras, 2 - invertir cadena, 3 - es Palindromo)
 */
function words( word, action ){
    let contWords = chain => chain.split(" ").length

    let invert = chain => chain.split('').reverse().join('')

    let isPalindrom = chain => chain == invert(chain)


    switch( action ){
        case 0 : return contWords( word )

        case 1 : return invert( word )

        case 2 : return isPalindrom( word )

        default : "Opcion no Válida"
    }
}

let chain = "anitalavalatina"

console.log( `La Cadena tiene ${words(chain,0)} Palabras`)
console.log( `La Cadena ${chain} invertida es ${words("Estamos en Cilo 3 de Mintic",1)}`)
console.log( "La cadena %s es %s", chain,words(chain,2) ? " Palindromo" : " No Palindromo")

/**
 * Funciones dentro e funciones
 */

function numbers(x,y){
    let sum = parseInt(x) + parseInt(y)
    console.log(`La Suma es ${sum}`)
    
    return ( ) => x > y ? x / y : x * y
}

console.log( numbers(20,100)())
