import React from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
  
  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && <h4>Cargando...</h4> // AND logico, si la primera parte de la condicion pasa, ejecuta la siguiente
        }        
        <div className='card-grid'>
          { 
            // images.map( ({id, title}) => (
            //   <li key={ id }>{ title }</li>
            // ) )

            // images.map( img => 
            //   <li key={ img.id }>{ img.title }</li>
            // )

            images.map( ( image ) => ( 
              <GifItem key={ image.id } { ...image } />  // estoy exparciendo las propiedades del objeto image
            ) )
          }
        </div>
    </>
  )
}