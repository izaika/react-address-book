import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'
// import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import firebase from '../config/firebase'

import { fetchContact } from '../actions/index'

class ContactForm extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      email: '',
      initialized: false,
      isNew: false,
      nameValidatorMessage: '',
      emailValidatorMessage: '',
    }
  }

  componentWillMount () {
    this.props.dispatch(fetchContact(this.props.match.params.id)).then(() => {
      if (this.props.currentContact) {
        this.setState(this.props.currentContact)
      } else {
        this.setState({isNew: true})
      }
      this.setState({initialized: true})
    })
  }

  submitHandler (e) {
    e.preventDefault()
    // validation
    let isFormValid = true;

    if (!this.state.name) {
      this.setState({nameValidatorMessage: 'Name cannot be empty'})
      isFormValid = false
    } else {
      this.setState({nameValidatorMessage: ''})
    }

    let re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm; // regex for checking email
    if (!this.state.email || !re.test(this.state.email)) {
      this.setState({emailValidatorMessage: 'Email is not valid'})
      isFormValid = false
    } else {
      this.setState({emailValidatorMessage: ''})
    }
    if (!isFormValid) return;

    // submit to firebase
    let id = this.props.match.params.id
    if (this.state.isNew) {
      // add
    } else {
      // update
      firebase.database().ref(`contacts/${id}`).set({
        name: this.state.name,
        email: this.state.email
      });
    }
  }

  render () {
    let contact = this.state
    if (contact.initialized) {
      return (
        <Form onSubmit={this.submitHandler.bind(this)}>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Name"
              onChange={(e) => this.setState({name: e.target.value})}
              value={this.state.name}/>
            <div className="validator-message">{this.state.nameValidatorMessage}</div>
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Email"
              onChange={(e) => this.setState({email: e.target.value})}
              value={this.state.email}/>
            <div className="validator-message">{this.state.emailValidatorMessage}</div>
          </FormGroup>
          <div className="buttons clearfix">
            {!this.state.isNew &&
            <Button type="button" className="pull-left btn btn-danger">Delete <i className="icon-trash"></i></Button>}

            <div className="pull-right">
              <Link to="/" className="btn btn-default">Cancel</Link>
              {
                this.state.isNew
                  ? <Button type="submit" className="btn btn-success">Add contact <i className="icon-plus"></i></Button>
                  :
                  <Button type="submit" className="btn btn-success">Submit changes <i className="icon-ok"></i></Button>
              }
            </div>
          </div>
        </Form>
      )
    } else {
      return (<div></div>)
    }
  }
}

function mapStateToProps (state, ownProps) {
  return state
}

export default connect(mapStateToProps, null)(ContactForm)

// ContactForm = connect(mapStateToProps, null)(ContactForm)

// export default ContactForm = reduxForm({
//   form: 'edit',
//   enableReinitialize: true
// })(ContactForm)


