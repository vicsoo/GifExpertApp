import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

	const [inputValue, setInputValue] = useState('');

	const onInputChange = (e) => { // Podemos desestructurar el target { target }, target.value
		// console.log(e.target.value);
		setInputValue(e.target.value);
	}

	const onSubmit = (e) => {
		e.preventDefault();
		// console.log(inputValue);

		if(inputValue.trim().length <= 1) return;

		onNewCategory( inputValue.trim() );
		setInputValue('');

		// setCategories( (categories) => [inputValue, ...categories] );
		// setInputValue('');
	}

  return (
    <form onSubmit={ (event) => onSubmit(event) } >
			<input
				type="text"
				placeholder="Buscar Gif"
				value={ inputValue }
				onChange={ onInputChange } // es lo mismo que: onChange={ (e) => onInputChange(e) }
			/>
    </form>
  )
}
