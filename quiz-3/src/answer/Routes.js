import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Home"
import Landing from "./Landing"
import About from './About'
import Footer from "./Footer";
import BookListEditor from "./BookListEditor";

export default function App() {

    return(
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Landing/>
                    </Route>

                    <Route exact path="/about">
                        <About/>
                    </Route>

                    <Route exact path="/login">

                    </Route>

                    <Route exact path="/books">
                        <BookListEditor/>
                    </Route>

                </Switch>
                <Footer/>
            </Router>
        </>
    )
}