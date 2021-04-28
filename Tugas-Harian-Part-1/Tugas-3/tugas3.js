//SOAL 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

kataKedua = kataKedua.charAt(0).toUpperCase() + kataKedua.substring(1);
kataKetiga = kataKetiga.substring(0,6) + kataKetiga.substring(6).toUpperCase();
kataKeempat = kataKeempat.toUpperCase();

console.log("%s %s %s %s", kataPertama, kataKedua, kataKetiga, kataKeempat);

//SOAL 2
var panjangPersegiPanjang = "8";
var lebarPersegiPanjang = "5";

var alasSegitiga = "6";
var tinggiSegitiga = "7";

var kelilingPersegiPanjang = 2 * (parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang));
var luasSegitiga = (parseInt(alasSegitiga) * parseInt(tinggiSegitiga)) / 2;

console.log(kelilingPersegiPanjang);
console.log(luasSegitiga);

//SOAL 3
var sentences = 'wah javascript itu keren sekali';

var firstWord = sentences.substring(0,3);
var secondWord = sentences.substring(4, 14);
var thirdWord = sentences.substring(15, 18);
var fourthWord = sentences.substring(19, 24);
var fifthWord = sentences.substring(25, 31);

console.log('Kata Pertama: ' + firstWord); 
console.log('Kata Kedua: ' + secondWord); 
console.log('Kata Ketiga: ' + thirdWord); 
console.log('Kata Keempat: ' + fourthWord); 
console.log('Kata Kelima: ' + fifthWord);

//SOAL 4
var nilaiJohn = 80;
var nilaiDoe = 50;

if(nilaiJohn >= 80){
    console.log("Indeks Nilai John A")
}else if(nilaiJohn >= 70 && nilaiJohn < 80){
    console.log("Indeks Nilai John B")
}else if(nilaiJohn >= 60 && nilaiJohn < 70){
    console.log("Indeks Nilai John C")
}else if(nilaiJohn >= 50 && nilaiJohn < 60){
    console.log("Indeks Nilai John D")
}else{
    console.log("Indeks Nilai John E")
}

if(nilaiDoe >= 80){
    console.log("Indeks Nilai John A")
}else if(nilaiDoe >= 70 && nilaiDoe < 80){
    console.log("Indeks Nilai John B")
}else if(nilaiDoe >= 60 && nilaiDoe < 70){
    console.log("Indeks Nilai John C")
}else if(nilaiDoe >= 50 && nilaiDoe < 60){
    console.log("Indeks Nilai John D")
}else{
    console.log("Indeks Nilai John E")
}

//SOAL 5
var tanggal = 15;
var bulan = 11;
var tahun = 2001;

switch(bulan){
    case 1: {console.log("%s Januari %s", tanggal, tahun); break;}
    case 2: {console.log("%s Februari %s", tanggal, tahun); break;}
    case 3: {console.log("%s Maret %s", tanggal, tahun); break;}
    case 4: {console.log("%s April %s", tanggal, tahun); break;}
    case 5: {console.log("%s Mei %s", tanggal, tahun); break;}
    case 6: {console.log("%s Juni %s", tanggal, tahun); break;}
    case 7: {console.log("%s Juli %s", tanggal, tahun); break;}
    case 8: {console.log("%s Agustus %s", tanggal, tahun); break;}
    case 9: {console.log("%s September %s", tanggal, tahun); break;}
    case 10: {console.log("%s Oktober %s", tanggal, tahun); break;}
    case 11: {console.log("%s November %s", tanggal, tahun); break;}
    case 12: {console.log("%s Desember %s", tanggal, tahun); break;}
}
