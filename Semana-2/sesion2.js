import numbers, {dishes, isCousing, students, marvel} from './datas'

console.log(numbers)
console.log(dishes)

for(let i = 0 ; i < numbers.length ; i++ ){
    console.log( numbers[i])
}

for ( let num in numbers ){
    console.log( numbers[num])
}

for ( let num of numbers ){
    console.log( num )
}

numbers.forEach( (val,index) => console.log(`[${index}=${val}]`))

/**
 * Funciones de Orden Superior de Programación Funcional con Javascript
 * - map
 * - filter
 * - reduce
 */

//Usar el map para hallar los cuadrados de los numeros
let squares = numbers.map( num => num * num)
    .sort((x,y) => x - y )

//Usar el filter para hallar los números pares del arreglo
let evens = numbers.filter( num => num % 2 == 0 )
let cousings = numbers.filter( num => isCousing(num)).sort((x,y) => y - x)

//Usar el reduce para reducir los valores a uno solo
const suma = [2,8,10,5,15,60].reduce((previous, current) => {
    return previous + current
}, 10 )

console.log( squares )
console.log( evens )
console.log( cousings )
console.log( suma )

//Realizar búsquedas
const dish = dishes.find( d => d.id == 456 )
if( dish ){
    console.log(dish)
}else{
    console.log("El Plato no Existe")
}


students.forEach( student => {
    console.log( `Nombre ${student.firstName} ${student.lastName} Ciudad ${student.address.city} ${student.phone}`)
    console.log('---------------------------------')
    student.education.forEach(ed => console.log(ed.college))
    console.log('---------------------------------')
})

//const promotion = students.filter( st => st.education.filter(ed => ed.year = 2020))

const promotion = students.map( st => st.education )
    .filter( ed => ed.year = 2020 )

console.log( promotion )

console.log( marvel )

console.log ( typeof students )
console.log ( typeof marvel )


