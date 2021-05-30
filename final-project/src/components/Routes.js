import Layout from 'antd/lib/layout/layout'
import React, { useContext } from 'react'
import {Switch, Route, BrowserRouter as Router, Redirect} from "react-router-dom"
import MovieDetails from '../components/pages/Movie/MovieDetails'
import MoviesComponent from '../components/pages/Movie/Movies'
import GameDetails from './pages/Games/GameDetails'
import GamesComponent from './pages/Games/Games'
import MovieEditorCreateForm from './pages/Movie-Editor/MovieEditorCreateForm'
import MovieEditorList from './pages/Movie-Editor/MovieEditorList'
import ChangePassword from './User/ChangePassword'
import LoginForm from './User/LoginForm'
import RegisterForm from './User/RegisterForm'
import { UserContext } from './User/UserContext'
import PrivateRoute from './PrivateRoute'
import GameEditorList from './pages/Game-Editor/GameEditorList'
import MovieEditorForm from './pages/Movie-Editor/MovieEditorEditForm'
import GameEditorCreateForm from './pages/Game-Editor/GameEditorCreate'
import GameEditorForm from './pages/Game-Editor/GameEditorEditForm'
import LandingPage from './LandingPage'

const Routes = () => {

    const [user] = useContext(UserContext)

    const LoginRoute = ({user, ...props}) => user ? <Redirect to="/"/> : <Route {...props}/>

    return(
            <Switch>
                <Route exact path="/" user={user}>
                    <LandingPage/>
                </Route>
                <Route exact path="/movies" user={user}>
                    <MoviesComponent/>
                </Route>
                <Route exact path="/movies/details/:idMovie" component={MovieDetails} user={user}>
                </Route>
                <Route exact path="/games" user={user}>
                    <GamesComponent/>
                </Route>
                <Route exact path="/games/details/:idGame" component={GameDetails} user={user}/>
        
                <LoginRoute exact path="/login" user={user}>
                    <LoginForm/>
                </LoginRoute>
                <LoginRoute exact path="/register" user={user}>
                    <RegisterForm/>
                </LoginRoute>
                <PrivateRoute path="/change-password" user = {user}>
                    <ChangePassword/>
                </PrivateRoute>
                <PrivateRoute exact path="/movie-editor">
                    <MovieEditorList/>
                </PrivateRoute>
                <PrivateRoute exact path="/movie-editor/create" user={user}>
                    <MovieEditorCreateForm/>
                </PrivateRoute>
                <PrivateRoute exact path="/movie-editor/edit/:idMovie" user={user}>
                    <MovieEditorForm/>
                </PrivateRoute>

                <PrivateRoute exact path="/game-editor">
                    <GameEditorList/>
                </PrivateRoute>
                <PrivateRoute exact path="/game-editor/create" user={user}>
                    <GameEditorCreateForm/>
                </PrivateRoute>
                <PrivateRoute exact path="/game-editor/edit/:idGame" user={user}>
                    <GameEditorForm/>
                </PrivateRoute>

            </Switch>
    )
}
export default Routes