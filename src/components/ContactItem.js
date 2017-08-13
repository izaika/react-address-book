import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchContacts, removeContact } from '../actions/index'

class ContactItem extends Component {
  render () {
    const {contact, index} = this.props
    return (

      <li className="contact-item list-group-item">
        <Link to={`/${index}/edit`} className="edit-link">
          {contact.name}
        </Link>
        <br/>
        <a href={`mailto:${contact.email}`} className="email-link">{contact.email}</a>
        <Button className="btn btn-default" onClick={
          function () {
            this.props.dispatch(removeContact(index))
            this.props.dispatch(fetchContacts());
          }.bind(this)
        }>
          <i className="icon-trash">
          </i>
        </Button>
      </li>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return state
}

export default connect(mapStateToProps, null)(ContactItem)
