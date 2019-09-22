import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Products from './components/pages/Products'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Login from './components/pages/Login'
import Logout from './components/pages/Logout'
import Register from './components/pages/Register'
import Authenticated from './components/pages/authenticated/Products'

import UserState from './context/User/UserState'

function App() {
  return (
    <UserState>
      <div className='App'>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/pricing' component={Products} />
            <Route exact path='/login' render={props => <Login {...props} />} />
            <Route
              exact
              path='/register'
              render={props => <Register {...props} />}
            />
            <Route path='/user' component={Authenticated} />
            <Route path='/logout' component={Logout} />
          </Switch>
        </Router>
      </div>
    </UserState>
  )
}

export default App
