const dishes = [
    {
        "id":"34",
        "name":"Mojarra Frita",
        "calories":424,
        "isVegetarian":false,
        "value":45000
    },
    {
        "id":"17",
        "name":"Tomahowk",
        "calories":600,
        "isVegetarian":false,
        "value":76000
    },
    {
        "id":"10",
        "name":"Ensalada de Frutas",
        "calories":50,
        "isVegetarian":true,
        "value":18000
    },
    {
        "id":"20",
        "name":"Pollo a la Cazadora",
        "calories":320,
        "isVegetarian":false,
        "value":38000
    }
]


//let name = prompt("Digite su Nombre")

const content = document.getElementById('content')

//content.innerHTML = `Hola ${name}`

//alert('Seguir')

const newContent = document.createElement('p')

newContent.append( document.createTextNode("Nuevo Contenido"))

content.append( newContent )

function validate(){
    //const txtTwo= document.getElementById('textTwo').value

    /*if( txtOne.length == 0){
        alert( 'vacio')
    }

    if( txtTwo.length == 0){
        alert( 'vacio')
    }*/

}

function onlyNums(e){
    const txtOne = document.getElementById('textOne').value
    if( e.keyCode >= 48 && e.keyCode <= 57 ){
        return true
    }

    return false
}

function findDish(){
    const txtOne = document.getElementById('textOne').value
    const cnt = document.getElementById('outDish')

    const dish = dishes.find( d => d.id == txtOne )
    
    if( dish ){
        const pr = document.createElement('p')
        const txt = `Plato<br>Nombre-->${dish.name}`
        pr.append( document.createTextNode(txt))

        cnt.append(pr)

        document.getElementById('textTwo').value = dish.name
    }else{
        alert('No Existe')
    }
}

/*document.getElementById('btn').addEventListener('click',()=>{
    const txtOne = document.getElementById('textOne').value
    const cnt = document.getElementById('outDish')

    const dish = dishes.find( d => d.id == txtOne )
    
    if( dish ){
        const pr = document.createElement('p')
        const txt = `Plato<br>Nombre-->${dish.name}`
        pr.append( document.createTextNode(txt))

        cnt.append(pr)

        document.getElementById('textTwo').value = dish.name
    }else{
        alert('No Existe')
    }
})*/

function loadData(){
    const tBody = document.getElementById('tBody')
    dishes.forEach( dish =>{
        const row = document.createElement('tr')
        const colId = document.createElement('td')
        colId.append( document.createTextNode( dish.id ) )
        row.append(colId)

        const colName = document.createElement('td')
        colName.append( document.createTextNode( dish.name ) )
        row.append(colName)

        const colCal = document.createElement('td')
        colCal.append( document.createTextNode( dish.calories ) )
        row.append(colCal)

        const colVg = document.createElement('td')
        colVg.append( document.createTextNode( dish.isVegetarian ? "SI" : "NO" ) )
        row.append(colVg)

        const colVal = document.createElement('td')
        colVal.append( document.createTextNode( dish.value ) )
        row.append(colVal)

        tBody.append( row )
    })
}



