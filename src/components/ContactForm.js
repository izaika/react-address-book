import React, { Component } from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'

class ContactItem extends Component {
  render () {
    return (
      <Form>
        <FormControl type="text" placeholder="Name"/>
        <FormControl type="email" placeholder="Email"/>
        <div className="buttons clearfix">
          <Button type="button" className="pull-left">Delete</Button>
          <div className="pull-right">
            <Button type="button">Cancel</Button>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </Form>
    )
  }
}

export default ContactItem