var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
]
var counter = 0;
function execute(time, book){
    readBooksPromise(time, book).then(function(sisaWaktu){
        if(sisaWaktu > 0 && counter < books.length-1){
            counter++;
            execute(sisaWaktu, books[counter])
        }
    }).catch(function(error){
        console.log(error)
    })
}
execute(10000, books[0])