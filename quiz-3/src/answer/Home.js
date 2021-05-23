import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'


//JADINYA PAKAI YANG LANDING.js
const Home = () =>{
    const [books, setBooks] = useState([])
    const [fetch, setFetch] = useState(true)

    useEffect(() => {
        const fetchData = async ()=>{
            const result = await axios.get(`http://backendexample.sanbercloud.com/api/books`)

            setBooks(
                result.data.map( el => {
                    const {id, created_at, updated_at, title, description, review, release_year, totalPage, price, image_url, } = el
                    console.log(el)
                    return {id, created_at, updated_at, title, description, review, release_year, totalPage, price, image_url}

                })
                
            )
        }
        if (fetch){
            fetchData()
            setFetch(false)
        }
    }, [fetch])

    const getHarga = (harga) => {
        return harga.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    return(
        <>
            <div>
                <section>
                    <h1 style={{textAlign: "center"}}>Daftar Buku-buku pilihan</h1>
                    {
                        books.map((el) => {
                            return(
                                <div>
                                    <table>
                                        <tr>
                                            <td>
                                                <img src={el.image_url} style={{
                                                    width: "300px",
                                                    height: "300px"
                                                }} alt="Foto Buku"/>
                                            </td>
                                            <tr><td><b>Tahun Terbit : {el.release_year}</b></td></tr>
                                            <tr><td><b>Harga: Rp.{getHarga(el.price)},-</b></td></tr>
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
        </>
    )
}

export default Home;