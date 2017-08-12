export const GET_CONTACTS = 'GET_CONTACTS'

export function getContacts (contacts) {
  return {
    type: GET_CONTACTS,
    contacts
  }
}