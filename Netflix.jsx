import React from 'react';
import Card from './api/components/Card';
import seriesData from '../src/api/seriesData.json';


const Netflix = () => {
  
  return(
    <>
    <ul className='grid grid-three-cols'>
    {
      seriesData.map((curelem) => <Card key={curelem.id} curelem={curelem} />)
    }
    </ul>
      
    </>
  )

}

export default Netflix;