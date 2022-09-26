import { useState, useEffect } from "react"
import {getGif} from '../helpers/getGifs'

// Un 'Hook' no es mas que una funcion que retorna o regresa algo...
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () =>{
        const newImages = await getGif(category);
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect(() => {
        // getGif(category)
        getImages()
    }, []) // Si dejamos ese arreglo vacio, quiere decir que lo que esta dentro del "{}" solo se disparara una sola vez cuando se renderize el componente...


    return {
        images: images,
        isLoading: isLoading
    }
}
