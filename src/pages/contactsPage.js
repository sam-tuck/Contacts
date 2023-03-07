
import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Header from '../components/Header';
import { useSetting } from '../context/contactContext';
import ContactList from '../components/contactList';


function ContactsPage() {
  const { setContacts } = useSetting();

  useEffect(() => { const getContacts = async () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => Response.json())
    .then(Response => {
      var data = Response.map(person => {
       return [person.name, person.company.name, person.phone.split(" ")[0],
      person.address.street, person.address.suite, person.address.city, person.email]   
      });
      setContacts(data);
    });
  }
  getContacts();
  },[setContacts]) 

  return (

    <div className="App">
      <Card>

      <Header/>

      <ContactList/>

    </Card>
    </div>
  );
}

export default ContactsPage;