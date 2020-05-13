import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Api from '../services/api';

import '../css/business-frontpage.css'
import '../bootstrap/css/bootstrap.css'
import '../css/main.css'

export default function Search() {
    const [name, setName] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('name');
        console.log("nome= " + name.value)
        const response = await Api.get('/cards/search?q=' + name.value)
        console.log(response.data.total_cards)
        console.log(response.data)

        //parei no loop___________________________________________________
        //console.log(response.data.data[0].name)

        let total = response.data.total_cards

        ReactDOM.render(total, document.getElementById('cartas'));

        let position = 0

        for (let i = 0; i < total; i++) {
           
           
          const cardName = response.data.data[position].name
         
          console.log(cardName)
           position ++
            
           ReactDOM.render(cardName, document.getElementById("object"))
          }
          
    }

   


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label>Buscar:</label>
                <input type="text" id="name" name="name" onChange={event => setName(event.target.value)} value={name} ></input>
                <button type="submit" className="btn">Buscar</button>
            </form>


            <div id="cartas">

            </div>
            <div id="object">
               
            </div>
        </div>
    )
}

