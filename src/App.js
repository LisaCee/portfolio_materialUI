import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './Components/NavBar';
import BookFinder from './Components/BookFinder';
import MovieTM from './Components/MovieTM';
import Contact from './Components/Contact';
import KnowledgeRocket from './Components/KnowledgeRocket';


import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      {/* <NavBar /> */}
      <Contact/>
     <MovieTM/>
     <BookFinder />
     <KnowledgeRocket />
    </div>
  );
}

export default App;
