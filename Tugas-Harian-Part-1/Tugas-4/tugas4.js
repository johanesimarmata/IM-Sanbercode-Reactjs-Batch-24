//SOAL 1
var counter = 0;
var hasInitialized = false;
while(counter < 20){
    if(!hasInitialized){
        hasInitialized = true;
        console.log("LOOPING PERTAMA");
    }
    counter+=2;
    console.log("%s - I love coding", counter);
}
hasInitialized = false;

while(counter>0){
    if(!hasInitialized){
        hasInitialized = true;
        console.log("LOOPING KEDUA");
    }
    console.log("%s - I will become a frontend developer", counter);
    counter -= 2;
}

//SOAL 2
for(var i = 1; i <= 20; i++){
    if(i % 2 == 1){
        if(i % 3 == 0){
            console.log("%s - I Love Coding", i);
        }else{
            console.log("%s - Santai", i);
        }
    }else{
        console.log("%s - Berkualitas", i)
    }
}

//SOAL 3
for(var j = 1; j <= 7; j++){
    var result = "";
    for(var k = 1; k <= j; k++){
        result += "#";
    }
    console.log(result);
}

//SOAL 4
var kalimat=["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]
kalimat.shift();
kalimat.splice(1,1);
console.log(kalimat.join(" "));

//SOAL 5
var sayuran = [];
sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");
sayuran.sort();

for(var idx = 0; idx < sayuran.length; idx++){
    console.log("%s. %s", idx+1, sayuran[idx]);
}