import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContactItem from './ContactItem'
import { fetchContacts } from '../actions/index'

// import {Link} from 'react-router-dom'

class Home extends Component {

  constructor () {
    super()

    this.state = {
      newItemId: false
    }
  }

  componentWillMount () {
    this.props.dispatch(fetchContacts()).then(() => {
      let newItemId = parseInt(Object.keys(this.props.contacts).pop(), 10) + 1
      this.setState({newItemId})
    })
  }

  render () {
    return (
      <div className="home">
        <Form className="search-form" onSubmit={() => {}}>
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
        <Link to={`${this.state.newItemId}/edit`} className="btn btn-primary">Add new <i className="icon-plus"></i></Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, null)(Home)