import { combineReducers } from 'redux'

import { GET_CONTACTS, GET_CURRENT_CONTACT } from '../actions/index'

function contacts (state = [], action) {
  switch (action.type) {
    case GET_CONTACTS:
      return action.contacts
    default:
      return state
  }
}

function currentContact (state = [], action) {
  switch (action.type) {
    case GET_CURRENT_CONTACT:
      return action.contact
    default:
      return state
  }
}

const rootReducer = combineReducers({contacts, currentContact})

export default rootReducer