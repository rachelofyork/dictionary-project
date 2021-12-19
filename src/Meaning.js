import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    
    return (
       <div className="Meaning">
            <h4><em>{props.meaning.partOfSpeech}</em></h4>
{props.meaning.definitions.map(function(definition, index){
    return (
        <div key={index}>
     <div>
    <strong>{definition.definition}</strong>
    <br />
    {definition.example}
    
  <br />
   
   <Synonyms synonyms={definition.synonyms}/>
    </div>
        </div>
    )


})}
           
                
       </div>
    )
}