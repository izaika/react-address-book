import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, FormControl, Button } from 'react-bootstrap'
import ContactItem from './ContactItem'

// import {Link} from 'react-router-dom'

class Home extends Component {

  search (e) {
    e.preventDefault()
    let {contacts} = this.props
    console.log(contacts)
  }

  render () {
    console.log(this.props.contacts)
    return (
      <div className="home">
        <Form className="search-form" onSubmit={this.search.bind(this)}>
          <FormControl type="search"/>
          <Button type="submit">
            <i className="icon-search">
            </i>
          </Button>
        </Form>
        <ul className="contacts list-group">
          {
            this.props.contacts.map((contact, index) => {
              return (
                <ContactItem key={index} contact={contact} index={index}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, null)(Home)