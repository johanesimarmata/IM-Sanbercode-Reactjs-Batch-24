import React from 'react'

function Render({props}){
    return(
        <div style={{
        }}>
            <section style={{
                padding: "10px",
                border: "1px solid #ccc"
            }}>
            <h1 style={{textAlign: "center"}}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
            <table>
            <ol>
                <li>
                    <tr>
                        <td><strong>Nama:</strong></td>
                        <td>{props.nama}</td>                   
                    </tr>
                </li>
                <li>
                    <tr>
                        <td><strong>Email:</strong></td>
                        <td>{props.email}</td>                   
                    </tr>
                </li>
                <li>
                    <tr>
                        <td><strong>Sistem Operasi yang digunakan:</strong></td>
                        <td>{props.os}</td>                   
                    </tr>
                </li>
                <li>
                    <tr>
                        <td><strong>Akun Gitlab:</strong></td>
                        <td>{props.gitlab}</td>                   
                    </tr>
                </li>
                <li>
                    <tr>
                        <td><strong>Akun Telegram:</strong></td>
                        <td>{props.telegram}</td>                   
                    </tr>
                </li>
            </ol>
            </table>
            </section>
        </div>
    )
}


const About = () =>{
    

    let dataPeserta = {
        nama: "Johanes Marihot Perkasa Simarmata",
        email: "jmpsimarmata@gmail.com",
        os: "Windows",
        gitlab: "gitlab.com/jmpsimarmata",
        telegram: "johanesimarmata"
    }

    return(
        <div><Render props={dataPeserta} /></div>
    )
}

export default About;