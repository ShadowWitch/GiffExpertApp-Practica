
import {getGif} from '../../src/helpers/getGifs';

describe('Pruebas en helper getGifs()', () => {
    test('Debe retornar un array de Gifs', async () =>{
        const gifs = await getGif('One Punch')
        
        // console.log('GIF >>' , gifs)
        // console.log('ACA >> ', Array.isArray(gifs))
        // console.log(Array.isArray(pruab))

        expect(Array.isArray(gifs)).toBeTruthy()
        expect(gifs.length).toBeGreaterThan(0) // "toBeGreaterThan(0)" pregunto si es mayor que 0

        // console.log(gifs[0])

        expect(gifs[0]).toEqual({
            id: expect.any(String), // Que contal venga un String
            title: expect.any(String),
            url: expect.any(String)
        })

    })
})


// qwe