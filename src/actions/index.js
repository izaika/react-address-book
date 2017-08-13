import firebase from '../config/firebase'

export const GET_CONTACTS = 'GET_CONTACTS'
export const GET_CURRENT_CONTACT = 'GET_CURRENT_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT'

export function getContacts (contacts) {
  return {
    type: GET_CONTACTS,
    contacts
  }
}

export function getCurrentContact (contact) {
  return {
    type: GET_CURRENT_CONTACT,
    contact
  }
}

export function deleteContact (contact) {
  return {
    type: DELETE_CONTACT,
    contact
  }
}

export function fetchContacts() {
  return function (dispatch) {
    return firebase.database().ref('contacts').once('value').then(function (snapshot) {
      dispatch(getContacts(snapshot.val()))
    });
  }
}

export function fetchContact(id) {
  return function (dispatch) {
    return firebase.database().ref(`contacts/${id}`).once('value').then(function (snapshot) {
      dispatch(getCurrentContact(snapshot.val()))
    });
  }
}

export function removeContact (id) {
  return function (dispatch) {
    return firebase.database().ref(`contacts/${id}`).set(null).then(function (snapshot) {
      dispatch(deleteContact(snapshot.val()))
    });
  }
}
