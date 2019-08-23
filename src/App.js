import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './Components/NavBar';
import BookFinder from './Components/BookFinder';
import MovieTM from './Components/MovieTM';
import Contact from './Components/Contact';
import KnowledgeRocket from './Components/KnowledgeRocket';
import LambdaNotes from './Components/LambdaNotes';


import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      {/* <NavBar /> */}
     <MovieTM/>
     <BookFinder />
     <KnowledgeRocket />
     <LambdaNotes />
      <Contact/>
    </div>
  );
}

export default App;
