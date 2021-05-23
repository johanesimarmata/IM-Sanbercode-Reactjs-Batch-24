import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom'

const BookListEditor = () => {
    let history = useHistory()
    const [books, setBooks] = useState([])
    const [inputTitle, setInputTitle] = useState("")
    const [inputDescription, setInputDescription] = useState("")
    const [inputReview, setInputReview] = useState("")
    const [inputReleaseYear, setInputReleaseYear] = useState(2020)
    const [inputTotalPage, setInputTotalPage] = useState(0)
    const [inputPrice, setInputPrice] = useState(0)
    const [inputImageUrl, setInputImageUrl] = useState("")
    const [currentBookId, setCurrentBookId] = useState(null)
    const [currentSearch, setCurrentSearch] = useState("")
    const [fetch, setFetch] = useState(true)
 

    useEffect(()=>{
        const fetchData = async ()=>{
          const result = await axios.get(`http://backendexample.sanbercloud.com/api/books`)
          if(currentSearch == null){
            setBooks(
                result.data.map(el=> {
                    const {id, created_at, updated_at, title, description, review, release_year, totalPage, price, image_url } = el
                    return {id, created_at, updated_at, title, description, review, release_year, totalPage, price, image_url}
                })
              )
          }
          else{
              setBooks(result.data.map(el => {
                    const {id, created_at, updated_at, title, description, review, release_year, totalPage, price, image_url } = el
                    console.log(el.title)
                    var judul = String(el.title)
                    if(judul.toLowerCase().includes(currentSearch.toLowerCase())){
                        console.log(el)
                        return {id, created_at, updated_at, title, description, review, release_year, totalPage, price, image_url}
                  }
              }))
          }
    
        }
        if(fetch){
          fetchData()
          setFetch(false)
        }
    
      },[fetch])
    
    const handleChangeTitle = (event) => {
        let inputTitleValue = event.target.value
        setInputTitle(inputTitleValue)
    }

    const handleChangeDescription = (event) => {
        let inputDescriptionValue = event.target.value
        setInputDescription(inputDescriptionValue)
    }

    const handleChangeReview = (event) => {
        let inputReviewValue = event.target.value
        setInputReview(inputReviewValue)
    }

    const handleChangeReleaseYear = (event) => {
        let inputReleaseYearValue = event.target.value
        setInputReleaseYear(inputReleaseYearValue)
    }

    const handleChangeTotalPage = (event) => {
        let inputTotalPageValue = event.target.value
        setInputTotalPage(inputTotalPageValue)
    }
    
    const handleChangePrice = (event) => {
        let inputPriceValue = event.target.value
        setInputPrice(inputPriceValue)
    }

    const handleChangeImageUrl = (event) => {
        let inputImageUrlValue = event.target.value
        setInputImageUrl(inputImageUrlValue)
    }

    const handleChangeSearch = (event) => {
        let inputSearch = event.target.value
        setCurrentSearch(inputSearch)
    }

    const handleEdit = (event) => {
        let idBook = event.target.value
        axios.get(`http://backendexample.sanbercloud.com/api/books/${idBook}`).then(res =>{
            let data = res.data
            setInputTitle(data.title)
            setInputDescription(data.description)
            setInputReview(data.review)
            setInputReleaseYear(data.release_year)
            setInputTotalPage(data.totalPage)
            setInputPrice(data.price)
            setInputImageUrl(data.image_url)
            setCurrentBookId(idBook)
        })
    }

    const handleDelete = (event) =>{
        let idBook = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/books/${idBook}`)
        .then(() => {
          let newBook = books.filter(data=> {return data.id !== currentBookId})
          setBooks(newBook)
          setFetch(true)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const input = {
            title: inputTitle, 
            description: inputDescription, 
            review: inputReview, 
            release_year : inputReleaseYear,
            totalPage: inputTotalPage,
            price: inputPrice,
            image_url: inputImageUrl
        }
        if(currentBookId === null){
            axios.post(`http://backendexample.sanbercloud.com/api/books`, input)
            .then(() =>{
                setFetch(true)
                history.push(`/books`)
            })
        }else{
            axios.put(`http://backendexample.sanbercloud.com/api/books/${currentBookId}`, input)
            .then(() =>{
                setFetch(true)
                console.log("MASUK SINI")
                history.push(`/books`)
            })
        }
        setInputTitle("")
        setInputDescription("")
        setInputReview("")
        setInputReleaseYear(2020)
        setInputTotalPage(0)
        setInputPrice(0)
        setInputImageUrl("")
        setCurrentBookId(null)
        setCurrentSearch("")
    }

    const handleSubmitSearch = (event) => {
        event.preventDefault()
        setFetch(true)
    }

    return(
        <>
            <section>
            {
                books !== null &&
            (<div style={{margin: "0 auto"}}>
            <table style={{margin:"0 auto"}}>
                <tr>
                    <td><input type="text" value={currentSearch} onChange={handleChangeSearch}/></td>
                    <td><input type="submit" onClick={handleSubmitSearch} value="Submit"/></td>
                </tr>
            </table>
            <h1 style={{textAlign: "center"}}>Daftar Buku</h1>
            <table className="daftar-buku">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Review</th>
                    <th>Release Year</th>
                    <th>Total Page</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                    books.map((item, index)=>{
                        return(                    
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.review}</td>
                            <td>{item.release_year}</td>
                            <td>{item.totalPage}</td>
                            <td>{item.price}</td>
                            <td>
                            {item.index}    
                            </td>
                            <td>
                            <button onClick={handleEdit} value={item.id}>Edit</button>
                            &nbsp;
                            <button onClick={handleDelete} value={item.id}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            <hr style={{border: "1px solid"}}/>
            <h1 style={{textAlign: "center"}}>Books Form</h1>
            <form onSubmit={handleSubmit} style={{textAlign: "center", marginTop: "20px"}}>
                <tr>
                    <td><label><b>Title:</b></label></td>
                    <td><input type="text" value={inputTitle} onChange={handleChangeTitle}/></td>    
                </tr>
                <tr>
                    <td><label><b>Description:</b></label></td>
                    <td><textarea type="text" value={inputDescription} onChange={handleChangeDescription}/></td>
                </tr>
                <tr>
                    <td><label><b>Review:</b></label></td>
                    <td><textarea type="text" value={inputReview} onChange={handleChangeReview}/></td>         
                </tr>
                <tr>
                    <td><label><b>Release Year:</b></label></td>
                    <td><input type="number" min="1980" value={inputReleaseYear} onChange={handleChangeReleaseYear}/></td>         
                </tr>
                <tr>
                    <td><label><b>Total Page:</b></label></td>
                    <td><input type="number" value={inputTotalPage} onChange={handleChangeTotalPage}/></td>         
                </tr>
                <tr>
                    <td><label><b>Price:</b></label></td>
                    <td><input type="number" value={inputPrice} onChange={handleChangePrice}/></td>         
                </tr>
                <tr>
                    <td><label><b>Image Url:</b></label></td>
                    <td><input type="text" value={inputImageUrl} onChange={handleChangeImageUrl}/></td>         
                </tr>
                <tr>
                    <td><input type="submit" value="Submit"/></td>
                </tr>
            </form>
            </div>)}
            </section>
            
        </>
    )
}

export default BookListEditor;
