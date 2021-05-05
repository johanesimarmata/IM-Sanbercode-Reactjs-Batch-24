var filterBooksPromise = require('./promise2.js')

function answer(){
    var result = filterBooksPromise(true, 40)
    result.then(function (fulfilled){
        console.log(fulfilled)
    }).catch(function (error){
        console.log(error)
    })
}
answer()

async function answer2(){
    try{
        var result2 = await filterBooksPromise(false, 250)
        console.log(result2)
    } catch(error){
        console.log(error.message)
    }
}
answer2()

async function answer3(){
    try{
        var result3 = await filterBooksPromise(true, 30)
        console.log(result3)
    } catch(error){
        console.log(error.message)
    }
}
answer3()
