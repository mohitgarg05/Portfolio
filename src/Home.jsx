import React from 'react';

import Navbar from './Navbar';
import './Home.css';

function Home()
{
    return(
        <>
            <Navbar />
            <div className = "bgcolor">
            
                <h1 className="welcome" style={{color:"white"}}>Welcome</h1>
                
            
            
            </div>
            <h3 className ="caption">Happy to see you</h3>
        </>
    );
}

export default Home;