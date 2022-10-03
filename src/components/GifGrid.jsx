
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import PropTypes from 'prop-types';

// https://api.giphy.com/v1/gifs/search?api_key=uGrjbURJnoZDKb5xysNp2bUD8ayZqDw7&q=OnePiece&limit=16

export const GifGrid = ({category}) =>{

    const {images, isLoading} = useFetchGifs(category)
    // console.log(category)
    // console.log(typeof category);

    return (
        <>
            <div>
                <h3>{category}</h3>
                {/* {
                    isLoading ? (<h2>Cargando...</h2>) : null
                } */}
                {
                    isLoading && (<h2>Cargando...</h2>) // Si estra en "true"
                }
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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
