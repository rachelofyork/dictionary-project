import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(){
const [keyword, setKeyword] = useState("");
const [definition, setDefinition] = useState(null);

function handleResponse(response){
    
    setDefinition(response.data[0])
  
}

function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    
}
// https://dictionaryapi.dev/

function handleKeywordChange(event){
    event.preventDefault()
    setKeyword(event.target.value)

}

    return <div className="Dictionary">
        <section>
            <form onSubmit={search}>
            <input type="search" placeholder="Search for a word..." onChange={handleKeywordChange}/>
            <input type="submit" value="Search" className="Submit"/> <br/>
            <hint><small>e.g. gin, cat, book</small></hint>
        </form>
            </section>
        <Results results={definition} />
    </div>
}