import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './Components/NavBar';
import BookFinder from './Components/BookFinder';
import Contact from './Components/Contact';


import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      {/* <NavBar /> */}
      <Contact/>
     <BookFinder />
    </div>
  );
}

export default App;
