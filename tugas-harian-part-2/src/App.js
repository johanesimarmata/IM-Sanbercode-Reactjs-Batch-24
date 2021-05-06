// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Form Pembelian Buah</h1>
      <table className="tableForm">
        <tr>
          <td><b>Nama Pelanggan</b></td>
          <td><input type="text" name="name" /></td>
        </tr>
        <tr>
          <td><b>Daftar Item</b></td>
          <td>
            <input type="checkbox" name="semangka"/>
            <label for="semangka">Semangka</label>
            <br/>
            <input type="checkbox" name="jeruk"/>
            <label for="jeruk">Jeruk</label>
            <br/>
            <input type="checkbox" name="nanas"/>
            <label for="nanas">Nanas</label>
            <br/>
            <input type="checkbox" name="salak"/>
            <label for="salak">Salak</label>
            <br/>
            <input type="checkbox" name="anggur"/>
            <label for="anggur">Anggur</label>
            <br/>
          </td>
        </tr>
        <tr>
          <td><input type="submit" value="Kirim" style = {{"border-radius" : "20px"}}/></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
