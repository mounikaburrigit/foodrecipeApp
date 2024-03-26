import React, { useState } from 'react';
import Product from "./Product"
import "./food.css"

const FoodrecipeApp = () => {
    const[search,setsearch]=useState("");
    const[data,setdata]=useState([])
    const API_ID="cd24223d";
    const API_KEY="bdf2fa03843e1a97350a320bacd5c8b1"	
    
    const submithandler=e=>{
        e.preventDefault();
        fetch(`https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${search}`).then(
        response=>response.json()
        ).then(
            data=>setdata(data.hits)
        )
    }
    return (
        <div>
            <center>
                <h3>Food Recipe App</h3>
                <form onSubmit={submithandler}>
                    <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)}/><br></br> <br></br>
                    <input type="submit" className='btn btn-primary' value="search"/>
                </form>
                {data.length>=1? <Product data={data}/>:null}
            </center>
        </div>
    );
};

export default FoodrecipeApp;