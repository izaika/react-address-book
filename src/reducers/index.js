import { combineReducers } from 'redux'

import { GET_CONTACTS } from '../actions/index'

function contacts (state = [], action) {
  switch (action.type) {
    case GET_CONTACTS:
      return action.contacts
    default:
      return state
  }
}


const rootReducer = combineReducers({contacts})

export default rootReducer