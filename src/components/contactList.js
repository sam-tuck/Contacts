import React from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { useSetting } from '../context/contactContext';

export default function ContactList() {

  const { contacts, setContacts} = useSetting(),
        navigate = useNavigate();
  // on click navigate to search page and set clicked item as search.
  function findContacts(e) {
    setContacts(contacts.filter(contact => contact.includes(e.target.parentElement.getAttribute("value"))));
    navigate('/search');
  }
 
  return (
    <div className='List'>
  <Table hover borderless className='Indent'>
      <thead>
        <tr>
          <th >Contact</th>
          <th >Company</th>
          <th >Phone No.</th>
          <th >Address</th>
          <th >Email</th>
        </tr>
      </thead>
      <tbody>
      {contacts.map((contact, id) => { 
        return <tr key = {id}  onClick = {findContacts} value = {contact[0]}>
          <td >{contact[0]}</td>
          <td >{contact[1]}</td>
          <td >{contact[2]}</td>
          <td >{contact[3]}<br/>{contact[4]}<br/>{contact[5]}</td>
          <td >{contact[6]}</td>
        </tr>
      })}
      </tbody>
     </Table>
     </div>
  )
}
