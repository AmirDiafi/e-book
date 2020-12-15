import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import BookCard from './BookCard'
import MainSection from './MainSection'
import Login from './Login'

class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/login' component={Login} />
                <Route path='/books/cardbook/:id' component={BookCard} />
                <Route path='/books/section/:id' component={MainSection} />
            </Switch>
        )
    }
}

export default Router