const toJson=(data)=>{
    var result = []

    data.forEach((v,k)=>{
        result.push(v)
    })

    return result
}

module.exports = toJson