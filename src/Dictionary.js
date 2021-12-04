import React, { useState } from "react"
import axios from "axios";
import "./Dictionary.css"

export default function Dictionary(){
const [keyword, setKeyword] = useState("");

function handleResponse(response){
    console.log(response.data[0])
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
        <form onSubmit={search}>
            <input type="search" placeholder="Search for a word..." onChange={handleKeywordChange}/>
            <input type="submit" value="Search" />
        </form>
    </div>
}