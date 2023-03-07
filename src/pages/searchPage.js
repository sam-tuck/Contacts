import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Header from '../components/Header';
import { useSetting } from '../context/contactContext';
import ContactList from '../components/contactList';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function SearchPage() {
  const { list, setList, setContacts } = useSetting(),

// hold value for the search.
  [searchName, setSearchName] = useState();

    useEffect(() => { const getContacts = async () => {
      // set height for search list
      const title = document.querySelector("h1").offsetHeight, 
       nav = document.querySelector(".header").offsetHeight,
       searchBar = document.querySelector(".input-group").offsetHeight;
       document.querySelector(".List").style.minHeight =`${window.innerHeight - title - nav - searchBar}px`

      fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response => Response.json())
        .then(Response => {
          var data = Response.map(person => {
             return [person.name, person.company.name, person.phone.split(" ")[0],
            person.address.street, person.address.suite, person.address.city, person.email]   
          });

            // set list to search through seperate to what is being displayed. Usually would be handled back end server call side.
            //so woluld not need duplicate.
        setList(data);
        });
      }
        getContacts();
    },[setContacts, setList])
           //search to return all matches regardless of case or incompleteness.
  function findContacts (e) {
    e.preventDefault()
    setContacts(list.filter((contact) => {
        for (let item of contact) {
          if (item.toLowerCase().includes(searchName.toLowerCase())) {
            return true;
          }}
          return false;
      }));
  };

  return (

    <div className="App">
      <Card>
      
      <Header/>

      <InputGroup className="mb-3 w-75 mx-auto" onChange={(e) => setSearchName(e.target.value)}>
        <Button variant="outline-dark" id="button-addon1" onClick={findContacts}>
          Search Contacts
        </Button>
        <Form.Control
          aria-label="Contact search"
          aria-describedby="search-bar"
        />
      </InputGroup>

      <ContactList/>

    </Card>
    </div>
  );
}

export default SearchPage;