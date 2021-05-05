var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
var counter = 0;
function execute(time,book){
    readBooks(time, book, function(sisaWaktu){
        if(sisaWaktu > 0){
            counter++;
            execute(sisaWaktu, books[counter])
        }
    })
}
execute(10000, books[0])