import firebase from '../config/firebase'

export const GET_CONTACTS = 'GET_CONTACTS'


export function getContacts (contacts) {
  return {
    type: GET_CONTACTS,
    contacts
  }
}

export function fetchContacts() {
  return function (dispatch) {
    return firebase.database().ref('contacts').once('value').then(function (snapshot) {
      dispatch(getContacts(snapshot.val()))
    });
  }
}
