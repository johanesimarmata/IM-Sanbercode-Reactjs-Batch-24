import './App.css';
import Routes from './Tugas-15/Routes'
import StudentProvider from './Tugas-15/StudentContext15'

function App() {
  return (
    <>
    <StudentProvider>
      <Routes/>    
    </StudentProvider>
    </>
  );
}

export default App;