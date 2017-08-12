import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Form, FormControl, Button} from 'react-bootstrap'
// import {Link} from 'react-router-dom'

class Home extends Component {
  search (e) {
    e.preventDefault()
    let {contacts} = this.state
    console.log(contacts);
  }

  render () {
    return (
      <div className="home">
        <Form onSubmit={this.search.bind(this)}>
          <FormControl type="search"/>
          <Button type="submit"/>
        </Form>
        <ul className="contacts">

        </ul>
      </div>
    )
  }
}


function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, null)(Home)