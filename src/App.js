
import { Route, Routes } from 'react-router-dom';
import ContactsPage from './pages/contactsPage';
import SearchPage from './pages/searchPage';


function App() {


  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<ContactsPage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>


    </div>
  );
}

export default App;
