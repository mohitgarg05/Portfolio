import React , {useState}from 'react';
import './Smallnav.css';




function Smallnavbar()
{
    const projects =  (e)=>{
        e.preventDefault();
        //console.log("Clicked");
        document.getElementById('details').innerHTML = " <br> <ul><li style= 'color:#0385fe;'>Weather App(by fetching API)</li><li style= 'color:#0385fe;'>Sorting Visualizer(Static website)</li></ul>";
       

    };
    return(
        <>
            <div className = "nav">
                <ul>
                    <li><a href = "">About Me</a></li>
                    <li><a href = "/AboutMe" onClick = {projects}>Projects</a></li>
                </ul>
            </div>
        </>
    );
}

export default Smallnavbar;