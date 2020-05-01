import React, {useState}  from 'react'
import Api from '../../services/api';

import '../../css/business-frontpage.css'
import '../../bootstrap/css/bootstrap.css'
import '../../css/main.css'

export default function Search(){
    const [name, setName] = useState('');
    
    async function handleSubmit(event){
        event.preventDefault();
        const name = document.getElementById('name');
        console.log("nome= " +  name.value )
        const response = await Api.get('/cards/search?q=' + name.value )
        console.log(response.data.total_cards)
        console.log(response.data)

        let total = response.data.total_cards

        document.getElementById("cartas").append(total)
        
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
        </div>
    )
}

