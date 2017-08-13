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
            (function (t) {
              const view = [];
              for (let key in t.props.contacts) {
                let contact = t.props.contacts[key]
                view.push(<ContactItem key={key} contact={contact} index={key}/>);
              }
              return view;
            }(this))
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