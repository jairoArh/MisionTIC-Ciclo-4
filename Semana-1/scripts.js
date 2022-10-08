
function begin(){
    /**
     * Definición de  variables:
     * var -> El alcance o scope es al módulo o función en donde está definida
     * let -> El alcance o scope es a la sección (if, while) en donde está definida
     */
    var name = "Jairo Armando"
    var city
    let age = 22
    console.log( "Tipo de Edad " + typeof age )
    console.log( "Tipo de name " + typeof name )
    if ( age >= 18 ){
        var salary = 1000000
        //console.log('El Nombre es ' + name + ' es Mayor de Edad y el Salario = ' + salary)
        console.log(`El Nombre es ${name} es Mayor de Edad y el Salario es ${salary}`)
    }else{
        //console.log('El Nombre es ' + name + ' es Menor de Edad y no trabaja')
        console.log(`El Nombre es ${name} es Menor de Edad y no trabaja`)
    }
    //name = 2342
    //console.log('El Salario fue ' + salary + " Nombre = " + name +  " Otra = " + city + " Edad " + (age - "j"))
    console.log(`El salario fue ${salary} Nombre = ${name} Otra = ${city} Edad ${age - 5 }`)
}

function main(num){
    console.log(`Se recibe un ${num}`)
    const r = parseInt(num) + 10;
    //num += 10  // num = num + 10
    console.log(`Ahora vale ${r}`)
    //r *= 2 //Esto es un error
    console.log(`Ahora vale ${r}`)
}

function chains(){
    const chain = "El día de hoy es Sábado y estamos en una Sesión de Javascript"

    const day = chain.substring(17,23)

    //Obtener el número de palabras de una cadena

    console.log(`La Cadena tiene ${chain.split(' ').length} Palabras`)

    console.log(`El tamaño de la cadena es ${chain.length} dia = ${day}`)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

function numbers(){
    console.log(`Aleatorio = ${getRandomInt(10,20)}` );
    var age = getRandomInt(1,100)
    /**
     * Visualizar un mensaje:
     *  age entre 1 y 12 - INFANTE
     *  age entre 13 y 17 - ADOLESCENTE
     *  age entre 18 y 60 - ADULTO
     *  age entre > 60 - ADULTO MAYOR
     */

        console.log(`Edad = ${age}`)
        if ( age >= 1 && age <= 12 ){
            console.log("INFANTE")
        }    
        else if( age >= 13 && age <= 17 ){
            console.log("ADOLESCENTE")
        }else if(age >= 18 && age <= 60){
            console.log("ADULTO")
        }
        else{
            console.log("ADULTO MAYOR")
        }

    //if .. else if .. else

    //switch

    const day = getRandomInt(1,7)

    console.log(`Se generó un numero de dia = ${day}`)

    let nameDay

    switch ( day ){
        case 1 : nameDay = "Domingo"
        break;

        case 2 : nameDay = "Lunes"
        break;

        case 3 : nameDay = "Martes"
        break;

        case 4 : nameDay = "Miércoles"
        break;

        case 5 : nameDay = "Jueves"
        break;

        case 6 : nameDay = "Viernes"
        break;

        default : nameDay = "Sábado"
    }

    console.log(`El dia es ${nameDay}`)
}

function arrays(){
    const vector = [12,"Sandra Isabel",2300000.54,true,{"city":"Medellín","phone":"3008743289","salary":4345454}]

    vector.push(false)

    console.log(`El tamaño del arreglo es ${vector.length}`)

    vector[0] = 4334

    console.log(vector)

    const numbers = [43,54,76,46,25,75,8,3,886,34,6747,2]

    numbers.sort()

    console.log(numbers)

    const students = [
        {"code":"3455",
        "name":"Alirio Barrera",
        "age":43,
        "gender":true},
        {"code":"7654",
        "name":"María López",
        "age":23,
        "gender":false},   
        {"code":"6463",
        "name":"Lola Jiménez",
        "age":21,
        "gender":false}  
    ]

    console.log(`Existen ${students.length} estudiantes`)

    console.log(students)

    students.sort()

    console.log(students)
}

//código principal
console.log('Iniciando')
begin()
main("345")
chains()
numbers()
arrays()
