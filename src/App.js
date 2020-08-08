import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import Axios from 'axios';
import axios from "axios";
function App() {
 
  const [number,setnumber] = useState(1);
  const [name,setName] = useState();
  const [moves,setMoves] = useState();
  useEffect(()=>{
    async function getdata(){
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`);
      setName(result.data.name);
      setMoves(result.data.moves.length);
    }
    getdata();
  }
  );
   return(
     <div>
       <h1>The pokemon number is {number}</h1>
   <h1>The pokemon name is {name}</h1>
   <h1>The number of moves are {moves}</h1>
      <h1>Choose your pokemon number</h1>
       <select value={number} onChange={
         (event)=>setnumber(event.target.value)
       }>
         <option value="1">1</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="25">25</option>
         <option value="201">201</option>
         <option value="204">204</option>
         <option value="207">207</option>
         <option value="210">210</option>
         <option value="213">213</option>
      </select>
      </div>
   )
}

export default App;
