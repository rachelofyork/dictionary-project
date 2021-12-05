import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    
    return (
       <div className="Meaning">
            <h4><em>{props.meaning.partOfSpeech}</em></h4>
{props.meaning.definitions.map(function(definition, index){
    return (
        <div key={index}>
     <p>
    <strong>{definition.definition}</strong>
    <br />
    Example: {definition.example}
    <br />
    Synonyms
    <br />
   <Synonyms synonyms={definition.synonyms}/>
    </p>
        </div>
    )


})}
           
                
       </div>
    )
}