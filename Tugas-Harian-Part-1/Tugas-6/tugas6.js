//SOAL 1
console.log("----soal 1----")
const luasLingkaran = (radius) => {
    return 22/7 * radius * radius;
}
const kelilingLingkaran = (radius) => {
    return 22/7 * 2 * radius; 
}
console.log(luasLingkaran(7))
console.log(kelilingLingkaran(7))

//SOAL 2
console.log("\n----soal 2----") 
const introduce = (...rest) => {
    let [nama, umur, gender, pekerjaan] = rest
    return `Pak ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`
}
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun" 

//SOAL 3
console.log("\n----soal 3----")
const newFunction = (...nama) => {
    const [firstName, lastName] = nama
    const fullName = `${firstName} ${lastName}`
    return {firstName, lastName, fullName}
}
    
  console.log(newFunction("John", "Doe").firstName)
  console.log(newFunction("Richard", "Roe").lastName)
  console.log(newFunction("William", "Imoh").fullName)


//SOAL 4
console.log("\n----soal 4----")
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
 }
 const{name : phoneName, brand : phoneBrand, year, colors : [colorBronze, colorWhite, colorBlack]} = phone 
 console.log(phoneBrand, phoneName, year, colorBlack, colorBronze) 

//SOAL 5
 console.log("\n----soal 5----")
 let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}

buku.warnaSampul = buku.warnaSampul.concat(warna)

let newBuku = {...buku, ...dataBukuTambahan}
console.log(newBuku)