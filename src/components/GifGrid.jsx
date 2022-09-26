
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

// https://api.giphy.com/v1/gifs/search?api_key=uGrjbURJnoZDKb5xysNp2bUD8ayZqDw7&q=OnePiece&limit=16

export const GifGrid = ({category}) =>{

    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
            <div>
                <h3>{category}</h3>
                <div className='card-grid'>
                    {
                        images.map( image => (
                            <GifItem 
                                key={image.id}
                                // image={image}
                                {...image}
                            />
                        ))
                    }
                </div>
                
            </div>
        </>
    )
}