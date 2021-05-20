import React, {useState, useEffect} from 'react'
import axios from "axios"


const HooksWithAxios = () => {
    const [student, setStudent] = useState([])
    const [inputNamaStudent, setInputNamaStudent] = useState("")
    const [inputMataKuliah, setInputMataKuliah] = useState("")
    const [inputNilaiStudent, setInputNilaiStudent] = useState(0)
    const [currentStudentId, setCurrentStudentId] = useState(null)
    const [triggerStudent, setTriggerStudent] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
            setStudent(
                result.data.map(res => {
                    let indexNilai = ''
                    if(res.score >= 80) indexNilai = 'A'
                    else if (res.score >= 70  && res.score < 80) indexNilai = 'B'
                    else if (res.score >= 60 && res.score < 70) indexNilai = 'C'
                    else if (res.score >= 50 && res.score < 60) indexNilai = 'D'
                    else if (res.score <50) indexNilai = 'E'
                    return {id: res.id, nama: res.name, matkul: res.course, nilai: res.score, index: indexNilai}
                })
            )
            setTriggerStudent(false)
        }
        if(triggerStudent){
            fetchData()
        }
    }, [triggerStudent])

    const handleChangeName = (event) =>{
        let inputNamaValue = event.target.value
        setInputNamaStudent(inputNamaValue)
    }
    
    const handleChangeMataKuliah = (event) =>{
        let inputMataKuliahValue = event.target.value
        setInputMataKuliah(inputMataKuliahValue)
    }

    const handleChangeNilai = (event) =>{
        let inputNilaiValue = event.target.value
        setInputNilaiStudent(inputNilaiValue)
    }

    const handleEdit = (event) =>{
        let idStudent = event.target.value
        axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idStudent}`)
        .then(res => {
          let data = res.data
          setInputNamaStudent(data.name)
          setInputMataKuliah(data.course)
          setInputNilaiStudent(data.score)
          setCurrentStudentId(data.id)
        })
    }

    const handleDelete = (event) =>{
        let idStudent = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${idStudent}`)
        .then(() => {
          let newStudent = student.filter(data=> {return data.id !== idStudent})
          setStudent(newStudent)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(currentStudentId == null){
            axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {name: inputNamaStudent, course:inputMataKuliah, score: inputNilaiStudent})
            .then(() => {setTriggerStudent(true)})

        }else{
            axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentStudentId}`, {name: inputNamaStudent, course:inputMataKuliah, score: inputNilaiStudent})
            .then(() => {setTriggerStudent(true)})
        }
        setInputNamaStudent("")
        setInputMataKuliah("")
        setInputNilaiStudent(0)
        setCurrentStudentId(null)
    }
    return(
        <>
        {
            student !== null &&
            (<div style={{width: "50%", margin: "0 auto"}}>
            <h1 style={{textAlign: "center"}}>Daftar Nilai Mahasiswa</h1>
            <table className="daftar-nilai">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Mata Kuliah</th>
                    <th>Nilai</th>
                    <th>Indeks Nilai</th>
                    <th>Aksi</th>
                </tr>
                </thead>
                <tbody>
                    {
                    student.map((item, index)=>{
                        return(                    
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.nama}</td>
                            <td>{item.matkul}</td>
                            <td>{item.nilai}</td>
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
            {/* Form */}
            <h1>Form Nilai Mahasiswa</h1>
            <form onSubmit={handleSubmit} style={{textAlign: "center", marginTop: "20px"}}>
                <tr>
                    <td><label><b>Nama:</b></label></td>
                    <td><input type="text" value={inputNamaStudent} onChange={handleChangeName}/></td>    
                </tr>
                <tr>
                    <td><label><b>Mata Kuliah:</b></label></td>
                    <td><input type="text" value={inputMataKuliah} onChange={handleChangeMataKuliah}/></td>
                </tr>
                <tr>
                    <td><label><b>Nilai:</b></label></td>
                    <td><input type="number" min="0" max="100" value={inputNilaiStudent} onChange={handleChangeNilai}/></td>         
                </tr>
                <tr>
                    <td><input type="submit" value="Submit"/></td>
                </tr>
            </form>
            </div>)
        }
        </>

    )
}
    

export default HooksWithAxios;