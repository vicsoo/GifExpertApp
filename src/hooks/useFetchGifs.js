import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs,js';

// esto es un custom hook, un hook no es mas qu una funcion
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading( false );
    }

    useEffect( () => {
        getImages();
    })

    return ({
        images: images,
        isLoading: isLoading,
    })
}
