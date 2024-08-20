import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'


//onst names = ['alice','chane', 'kebede', 'sara'];
//onst uppernames = names.map(function(item){
//   return item[0].toUpperCase() + item.slice(1)
//
//   
//onsole.log(uppernames)
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />)