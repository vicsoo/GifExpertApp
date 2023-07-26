import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball', 'Super Campeones']);

	const onAddCategory = ( item ) => {
    // const item = 'Radma 1/2';

    // si la nueva categoria existe, no la inserta
    if( categories.includes( item ) ) return;

		setCategories([item, ...categories]);
	}

	console.log(categories);

  return (
    <>  
        {/* Titulo */}
        <h1>Gift Expert App</h1>

        {/* Input */}
        <AddCategory onNewCategory={ (value) => onAddCategory(value) } />

        {/* <button onClick={ onAddCategory }>Agregar</button> */}

        {/* Listado de Gif */}
					{ 
            categories.map( category => (
              <GifGrid key={ category } category={ category } />
            ))
          }
    </>
  )
}