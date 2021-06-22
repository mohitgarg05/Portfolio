import React from 'react';
import Home from './Home';
import AboutUs from './AboutUs';

import {Route} from 'react-router-dom';

function App() {
  return (
   <> 
    <Route  exact path ="/" >
      <Home />
    </Route>
    <Route exact path = "/AboutMe" >
      <AboutUs />
    </Route>
    
   </>
  );
}

export default App;
