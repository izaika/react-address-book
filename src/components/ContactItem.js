import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'

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
        <Button className="btn btn-default">
          <i className="icon-trash">
          </i>
        </Button>
      </li>
    )
  }
}

export default ContactItem