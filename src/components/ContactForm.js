import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class ContactItem extends Component {
  render () {
    const contactID = this.props.match.params.id
    const contact = this.props.contacts[contactID]
    console.log(contact)

    return (
      <Form>
        <FormGroup>
          <FormControl type="text" placeholder="Name" value={contact && contact.name}/>
        </FormGroup>
        <FormGroup>
          <FormControl type="email" placeholder="Email" value={contact && contact.email}/>
        </FormGroup>
        <div className="buttons clearfix">
          <Button type="button" className="pull-left">Delete</Button>
          <div className="pull-right">
            <Link to="/" className="btn btn-default">Cancel</Link>
            <Button type="submit" className="btn btn-success">Submit</Button>
          </div>
        </div>
      </Form>
    )
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, null)(ContactItem)