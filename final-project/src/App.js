import './App.css';
import LayoutPage from './components/Layout.js'
import {BrowserRouter as Router} from "react-router-dom"
import { UserProvider } from './components/User/UserContext';

function App() {
  return (
    <div className="App"> 
      <Router>
        <UserProvider>
          <LayoutPage/>
        </UserProvider>   
      </Router>    
    </div>
  );
}

export default App;
