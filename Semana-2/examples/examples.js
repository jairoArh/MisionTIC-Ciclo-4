import {students, numbers, marvel} from "./data/data"

console.log( numbers )

const aux = numbers.filter( num => num % 2 == 0 )
    .reduce( (act,ant) => {
        return act + ant
    }, 10)

console.log( aux )

/*const myMap = new Map(Object.entries(marvel))

myMap.forEach((v,k)=>{
    const persons = new Map(Object.entries(v))
    persons.forEach( (value,key) =>{
        console.log(`${key} --> ${value.title}`)
    })
})*/

//Buscar por el método find

const findStudentById = (id)=>{
    return students.find( student => student.id == id )
}

const student = findStudentById("54")
if(student){
    console.log( student )
}else{
    console.log( "No existe")
}

//Buscar estudiantes por ciudad

const findStudentByCity = (city) => students
    .filter(student => student.address.city == city)

//const estCity = findStudentByCity("Sogamoso")

//console.log( estCity.length )

findStudentByCity("Sogamoso").forEach(value => 
    console.log(`Nombre ${value.firstName} -- ${value.address.city}`))

//Promesas

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve()
    },2000)
})

promise
    .then(()=> {
       console.log("Biennnmn") 
    }).catch(()=>{
        console.log("Muy Malll")
    })

//Promesa para realizar una búsqueda

const findAsync = (id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const stdAux = findStudentById(id)
            if( stdAux){
                resolve(stdAux)
            }else{
                reject("No existe el Estudiante")
            }
        },2000)
    })
}

findAsync("7466392")
    .then((st)=> console.log(st))
    .catch((er)=> console.warn(er))

//Otra forma de llamar la promesa
async function callAsync(){
    console.log("Llamando...")
    const result = await findAsync("7463929")
    console.log( result )
}

callAsync();

