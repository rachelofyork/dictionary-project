import React from "react";

export default function Meaning(props){
    console.log(props.meaning)
    return (
       <div className="Meaning">
            <h4><em>{props.meaning.partOfSpeech}</em></h4>
{props.meaning.definitions.map(function(definition, index){
    return (
        <div key={index}>
     <p>
    <strong>{definition.definition}</strong>
    <br />
    {definition.example}
    </p>
        </div>
    )


})}
           
                
       </div>
    )
}