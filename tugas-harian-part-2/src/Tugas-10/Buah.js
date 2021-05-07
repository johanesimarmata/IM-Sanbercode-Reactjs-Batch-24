import React from 'react'

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
]

class Buah extends React.Component {
    render() {
        return(
            <>
                <div>
                    <h1 style={{"textAlign" : "center"}}>Tabel Harga Buah</h1>
                    <table style={{"border" : "1px solid black", "border=collapse" : "col", width : "50%", "margin" : "0% 25% 0 25%"}}>
                        <tr>
                            <th style={{"border" : "1px solid white", "border=collapse" : "col", "backgroundColor" : "grey"}}>Nama</th>
                            <th style={{"border" : "1px solid white", "border=collapse" : "col", "backgroundColor" : "grey"}}>Harga</th>
                            <th style={{"border" : "1px solid white", "border=collapse" : "col", "backgroundColor" : "grey"}}>Berat</th>
                        </tr>
                        {dataHargaBuah.map(buah => {
                            return(
                                <tr>
                                    <td style={{"border" : "1px solid white", "border=collapse" : "col", "backgroundColor" : "#ff7f50"}}>{buah.nama}</td>
                                    <td style={{"border" : "1px solid white", "border=collapse" : "col", "backgroundColor" : "#ff7f50"}}>{buah.harga}</td>
                                    <td style={{"border" : "1px solid white", "border=collapse" : "col", "backgroundColor" : "#ff7f50"}}>{buah.berat/1000} kg</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>

            </>
        )
    }
}

export default Buah;