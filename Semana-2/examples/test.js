((name)=>{
    console.log(`Don ${name} Esto se Ejecuta Siempre`)
})("Jairo")

let num = 20

const value = 143454.545

let even = number => number % 2 == 0

let currency = (value)=>{
    value = String(value).replace(/\D/g, "");
    const aux = new Intl.NumberFormat('en-US').format(value);

    return aux === "0" ? "" : aux;
}

function words(word,action){

    let invert = chain  => chain.split("").reverse().join("")

    let contWords = chain=> chain.split(' ').length

    let palindrom =  chain => chain == invert(chain)

    switch(action){
        case 0 : return contWords( word )

        case 1 : return palindrom( word )

        case 2 : return invert( word )
    }
}

function numbers(x,y){
    let sum = parseInt(x) + parseInt(y)
    console.log( sum )
    return () => x > y ? x / y : x * y
}

function sumar(a,b){
    return a + b
}

/*console.log("El Numero %i es %s",num,even(num) ? " PAR" : " IMPAR")
console.log( currency(value))
console.log( words("Sogamoso es una ricura",0))
console.log( words("Sogamoso es una ricura",1))
console.log( numbers(100, 30)())*/
var c = sumar.apply(c,[5,6])
console.log( c )
const nums = [4,54,128,7,25,17,76,97,42,57]
nums.sort((x,y)=> y - x)

console.log(nums)