/***
 * APIKey - V0HaVCcXfQ5Q4u01YFdeh74VFDP3WObg
 * URL - api.giphy.com/v1/gifs/random	
 */

alert('server')

const apikey = "V0HaVCcXfQ5Q4u01YFdeh74VFDP3WObg"

fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apikey}`)
    .then(resp => resp.json())
    .then(({data})=>{
        const {url}  = data.images.original
        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })
    .catch( console.warn )