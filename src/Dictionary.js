import React, { useState } from "react"
import "./Dictionary.css"

export default function Dictionary(){
const [keyword, setKeyword] = useState("");

function search(event) {
    event.preventDefault();
    alert (`Searching for definition of ${keyword}...`)
}

function handleKeywordChange(event){
    event.preventDefault()
    setKeyword(event.target.value)

}

    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" placeholder="Search for a word..." onChange={handleKeywordChange}/>
            <input type="submit" vaue="Search" />
        </form>
    </div>
}