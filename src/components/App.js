import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BreadCrumbs from './BreadCrumbs'
import Home from './Home'
import ContactForm from './ContactForm'

class App extends Component {
  render () {
    return (
      <div className="app container">
        <div className="row">
          <div className="col-md-12">
            <BreadCrumbs/>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/new" component={ContactForm}/>
                <Route path="/:id/edit" component={ContactForm}/>
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    )
  }
}

export default App