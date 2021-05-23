import axios from 'axios'
import React from 'react'


class HomeComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            books: []
        }
    }

    componentDidMount(){
        axios.get(`http://backendexample.sanbercloud.com/api/books`)
        .then(res => this.setState({
            books: res.data
        }))
    }

    getHarga(harga){
        return harga.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    render(){
        return(
            <div>
                <section>
                    <h1 style={{textAlign: "center"}}>Daftar Buku-buku pilihan</h1>
                    {
                        this.state.books.map((el) => {
                            return(
                                <div>
                                    <table>
                                        <tr>
                                            <td>
                                                <img src={el.image_url} style={{
                                                    width: "400px",
                                                    height: "400px"
                                                }} alt="Foto Buku"/>
                                            </td>
                                            <tr><td><b>Tahun Terbit : {el.release_year}</b></td></tr>
                                            <tr><td><b>Harga: Rp.{this.getHarga(el.price)},-</b></td></tr>
                                            <tr><td><b>Jumlah Halaman: {el.totalPage}</b></td></tr>
                                        </tr>
                                    </table>
                                    <h3>{el.title}</h3>
                                    <p><b>Deskripsi :</b> {el.description}</p>
                                    <p><b>Ulasan : </b> {el.review}</p>
                                    <hr/>
                                </div>
                        )})
                    }
                </section>
            </div>
        )
    }
}

export default HomeComponent;