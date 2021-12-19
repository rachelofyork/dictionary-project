import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Result(props){
   //if there are results, display them//
    if (props.results){
    return <div className="Results">
<section><h2 className="text-center mb-3">{props.results.word}</h2>
{props.results.phonetics.map(function(phonetic, index){
    return (<div key={index}><Phonetic phonetic={phonetic} /></div>);
    })}</section>
   
{props.results.meanings.map(function(meaning, index){
return (<section key={index} className="mb-3"> <Meaning meaning={meaning} /> </section> );
})}
    </div>
    
} else {return null}
}