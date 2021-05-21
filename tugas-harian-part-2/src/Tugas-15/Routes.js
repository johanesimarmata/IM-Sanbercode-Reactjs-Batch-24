import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Timer from '../Tugas-11/Timer'
import Tugas9 from '../Tugas-9/Tugas9'
import Buah from '../Tugas-10/Buah'
import ListFormBuah from '../Tugas-12/ListFormBuah'
import HooksWithAxios from '../Tugas-13/HooksWithAxios'
import Student from '../Tugas-14/Student'
import StudentForm15 from './StudentForm15'
import StudentList15 from './StudentList15'

const Routes = () =>{    
    return (
    <Router>
      <div>
        <nav className="custom-navbar">
          <ul>
            <li><Link to="/">Tugas 9</Link></li>
            <li><Link to="/tugas10">Tugas 10</Link></li>
            <li><Link to="/tugas11">Tugas 11</Link></li>
            <li><Link to="/tugas12">Tugas 12</Link></li>
            <li><Link to="/tugas13">Tugas 13</Link></li>
            <li><Link to="/tugas14">Tugas 14</Link></li>
            <li><Link to="/tugas15">Tugas 15</Link></li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Tugas9}></Route>
          <Route exact path="/tugas10" component={Buah}></Route>
          <Route exact path="/tugas11" component={Timer}></Route>
          <Route exact path="/tugas12" component={ListFormBuah}></Route>
          <Route exact path="/tugas13" component={HooksWithAxios}></Route>
          <Route exact path="/tugas14" component={Student}></Route>
          <Route exact path="/create">
            <StudentForm15/>
            <Link to="/tugas15"><button>Kembali Ke Tabel</button></Link>
          </Route>
          <Route exact path="/tugas15">
          <Link to="/create"><button>Buat Data Nilai Mahasiswa Baru</button></Link>
            <StudentList15/>
          </Route>
          <Route exact path="/tugas15/student/:id">
            <StudentForm15/>
          </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default Routes;