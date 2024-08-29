import React from 'react';
import Netflix from './Netflix';
import '../src/Netflix.css'
//import './api/components/Netflix.module.css'
import EventHandling from './api/components/EventHandling';
import Eventsprops from './api/components/Eventsprops';
import Todo from './projects/Todo/Todo';



const App = () => {

 /* let age= 17;
  let data= 'watched';

  if (age > 18 ) data = "Donot watch";

  */

  return(

    //<Todo />
    //<Eventsprops />
 // <EventHandling />
    
    <section className='container'>
    <h1 className='cardheading'> List of Best Netflix Series </h1>
      <Netflix />
    </section>
  

  )

}

export default App;