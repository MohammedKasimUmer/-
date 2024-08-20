// src/App.js
import React from 'react';
import './App.css';
////import Interests from './components/Interests';
////import About  from './components/About';
////import Info from './components/Info'
//import Footer from './components/Footer'
//import Header from './components/Header'
//import Notes from './components/Notes'
////import Contact from './components/contact' 
////import Joke from './components/Jokes'
//import notes from '../src/note-list'
//// info, about, interest
import Entry from './components/Entry'; 
import emojis from '../src/emoji-list'
 
function App() {
 
  return (
    <div>
    <h1>
      <span>The emoji dictionary</span>
    </h1>
    <div className='emoji--box'>
      { emojis.map(
        (emojis)=>{
          return(
          <Entry 
            img = {emojis.emojis}
            name = {emojis.name}
            expression= {emojis.expression}
          
          
          />

          )
      })}
      </div>
    
    </div>
    )}
   /* //<>
    //<Header/>
    //<div className="notes--con">
    //  { notes.map(
    //    (notes)=>{
    //      return (
    //        
    //        <Notes 
    //          key = {notes.id}
    //          title= {notes.title}
    //          content = {notes.content}
    //        
    //        />
    //      )
    //    }
    //  )}
    //</div>
    
    */
  

export default App;
