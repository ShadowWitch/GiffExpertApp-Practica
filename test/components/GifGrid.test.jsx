
import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas sobre <GifGrid />', () =>{

    const category = 'One Punch'

    test('Debe mostrar el loading inicialmente' , () =>{

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>)
        
        // expect(screen.getByText(category)).toBeTruthy()
        expect(screen.getByText(category))
        expect(screen.getByText('Cargando...'))

        // screen.debug()

    })

    test('Debe de mostrar items cuando se cargan las imagenes desde useFetchGifs', async () =>{
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://giphy.com/123.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://giphy.com/222.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />)

        expect(screen.getAllByRole('img').length).toBe(2) // Le estoy diciendo que espero que vengan 2 imagenes (ya que le envie 2 objetos por el arreglo)
        // "getAllByRole()" es para extraer todos los elementos del Role que le pasemos como parametro
        // screen.debug()

    })
})