import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(){
const [keyword, setKeyword] = useState("");
const [definition, setDefinition] = useState(null);
const [photos, setPhotos] = useState(null);

function handleResponse(response){
    
    setDefinition(response.data[0]) 
}

function handlePexelsResponse(response){
    setPhotos(response.data.photos)
}

function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    
    const pexelsApiKey = "563492ad6f917000010000011fb8d7677824412aa80e70f611ed8a0d";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl,  {headers: headers }).then(handlePexelsResponse);
}
// https://dictionaryapi.dev/

function handleKeywordChange(event){
    event.preventDefault()
    setKeyword(event.target.value)

}

    return <div className="Dictionary">
        <section>
            <form onSubmit={search}>
            <input type="search" placeholder="Search for a word..." onChange={handleKeywordChange} className="Search"/>
            <input type="submit" value="Search" className="Submit"/> <br/>
            <hint><small>e.g. gin, cat, book</small></hint>
        </form>
            </section>
        <Results results={definition} />
        <Photos photos={photos} /> 
        {/* {photos} = photos state */}
        
    </div>
}