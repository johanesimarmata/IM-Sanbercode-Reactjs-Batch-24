// import logo from './logo.svg';
import './App.css';
import Timer from './Tugas-11/Timer'
import Tugas9 from './Tugas-9/Tugas9'
import Buah from './Tugas-10/Buah'
function App() {
  return (
    <>
      <Tugas9/>
      <Buah/>
      <Timer start={100}/>
    </>
  );
}

export default App;
