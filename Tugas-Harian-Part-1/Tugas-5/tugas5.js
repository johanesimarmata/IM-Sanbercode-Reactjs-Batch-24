//SOAL 1
console.log("-----SOAL 1-----")
function luasPersegiPanjang(panjang, lebar){
    return panjang * lebar;
}


function kelilingPersegiPanjang(panjang, lebar){
    return 2 * (panjang + lebar);
}

function volumeBalok(panjang, lebar, tinggi){
    return panjang * lebar * tinggi;
}

var panjang= 12
var lebar= 4
var tinggi = 8
 
var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
var volumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(luasPersegiPanjang) 
console.log(kelilingPersegiPanjang)
console.log(volumeBalok)

//SOAL 2
console.log("\n-----SOAL 2-----")
function introduce(name, age, address, hobby){
    return "Nama saya " + name + ", umur saya "+ age + " tahun, alamat saya di " + address +", dan saya punya hobby yaitu "+ hobby+"!";
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan belum jadi, dan saya punya hobby yaitu Gaming!"

//SOAL 3
console.log("\n-----SOAL 3-----")
var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]

arrayDaftarPeserta = {
    nama    : arrayDaftarPeserta[0],
    jenisKelamin  : arrayDaftarPeserta[1],
    hobi   : arrayDaftarPeserta[2],
    tahunLahir : arrayDaftarPeserta[3]
}
console.log(arrayDaftarPeserta)

//SOAL 4
console.log("\n-----SOAL 4-----")
var arrayOfObjectBuah =[
    {
        nama : "Nanas",
        warna : "Kuning",
        adaBijinya : false,
        harga : 9000
    },
    {
        nama : "Jeruk",
        warna : "Oranye",
        adaBijinya : true,
        harga : 8000
    },
    {
        nama : "Semangka",
        warna : "Hijau & Merah",
        adaBijinya : true,
        harga : 10000
    },
    {
        nama : "Pisang",
        warna : "Kuning",
        adaBijinya : false,
        harga : 5000
    }
]

var buahFilterTidakBerbiji = arrayOfObjectBuah.filter(function(buah){
    return buah.adaBijinya == false;
})

console.log(buahFilterTidakBerbiji)

//SOAL 5
console.log("\n-----SOAL 5-----")

function tambahDataFilm(namaFilm, durasiFilm, genreFilm, tahunRilis){
    dataFilm.push({
        nama : namaFilm,
        durasi : durasiFilm,
        genre : genreFilm,
        tahun : tahunRilis
    })
}

var dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)
