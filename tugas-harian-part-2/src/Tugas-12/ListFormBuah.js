import React, {Component} from 'react'


class ListFormBuah extends Component{
    constructor(props){
        super(props)
        this.state = {
            daftarBuah : [
                {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
                {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
                {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
                {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
                {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
            ],
            input: {
                nama: "",
                hargaTotal: "",
                beratTotal: 0
            },
            currentIndex: -1
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeNama = this.handleChangeNama.bind(this)
        this.handleChangeHarga = this.handleChangeHarga.bind(this)
        this.handleChangeBerat = this.handleChangeBerat.bind(this)

    }

    handleSubmit(event){
        event.preventDefault()
        let currentIndex = this.state.currentIndex
        let daftarBuah = this.state.daftarBuah
        let input = this.state.input
        if(currentIndex === -1){ //Untuk Create
            this.setState({
                daftarBuah: [...daftarBuah, input],
                input: {
                    nama: "",
                    hargaTotal: "",
                    beratTotal: 0
                }
            })
        }else{ //Untuk Update
            daftarBuah[currentIndex] = input
            this.setState({
                daftarBuah,
                input: {
                    nama: "",
                    hargaTotal: "",
                    beratTotal: 0
                },
                currentIndex: -1 
            })
        }
    }

    handleChangeNama(event){
        event.preventDefault()
        let inputNama = event.target.value
        let input = this.state.input
        this.setState({
            input: {
                nama: inputNama,
                beratTotal: input.beratTotal,
                hargaTotal: input.hargaTotal
            }
        })
    }

    handleChangeHarga(event){
        event.preventDefault()
        let inputHarga = event.target.value
        let input = this.state.input
        this.setState({
            input: {
                nama: input.nama,
                beratTotal: input.beratTotal,
                hargaTotal: inputHarga
            }
        })
    }

    handleChangeBerat(event){
        event.preventDefault()
        let inputBerat = event.target.value
        let input = this.state.input
        this.setState({
            input: {
                nama: input.nama,
                beratTotal: inputBerat,
                hargaTotal: input.hargaTotal
            }
        })
    }

    handleEdit = (event) =>{
        let index = event.target.value
        let buah = this.state.daftarBuah[index]
        this.setState({
          input: buah,
          currentIndex: index
        })
    }

    handleDelete = (event) =>{
        let index = parseInt(event.target.value)
        let newDaftarBuah = this.state.daftarBuah.filter((val, idx) => {
          return idx !== index 
        })
        if (this.state.currentIndex === index){
          this.setState({daftarBuah: newDaftarBuah, currentIndex: -1})
        }else{
          this.setState({daftarBuah: newDaftarBuah})
        }
    }
    

    render(){
        return(
            <div style={{width: "70%", margin: "0 auto"}}>
            <h1 style={{textAlign: "center"}}>Daftar Harga Buah</h1>
            <table className="harga-buah">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Harga total</th>
                  <th>Berat total</th>
                  <th>Harga per kg</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                  {
                    this.state.daftarBuah.map((val, index)=>{
                      return(                    
                        <tr>
                          <td>{index+1}</td>
                          <td>{val.nama}</td>
                          <td>{val.hargaTotal}</td>
                          <td>{val.beratTotal/1000} kg</td>
                          <td>{val.hargaTotal * 1000 / val.beratTotal}</td>
                          <td>
                            <button value={index} onClick={this.handleEdit} style={{marginRight: "10px"}}>Edit</button>
                            <button value={index} onClick={this.handleDelete}>Delete</button>
                          </td>
                        </tr>
                      )
                    })
                  }
              </tbody>
            </table>
            <h1 style={{textAlign: "center"}}>Form Daftar Harga Buah</h1>
            <form onSubmit={this.handleSubmit} style={{textAlign: "center", marginTop: "20px"}}>
            <table>
              <tr>
                <td><label><b>Nama:</b></label></td>
                <td><input onChange={this.handleChangeNama} value={this.state.input.nama} required type="text"/></td>
              </tr>
              <tr>
                <td><label><b>Harga Total:</b></label></td>
                <td><input onChange={this.handleChangeHarga} value={this.state.input.hargaTotal} required type="number"/></td>
              </tr>
              <tr>
                <td><label><b>Berat Total(dalam gram):</b></label></td>
                <td><input onChange={this.handleChangeBerat} value={this.state.input.beratTotal} min="2000" required type="number" defaultValue={0} /></td>
              </tr>
              <tr>
                <td><input type="submit" value="Submit"/></td>
              </tr>
            </table>
            </form>
          </div>
    
        )
    }
}

export default ListFormBuah;