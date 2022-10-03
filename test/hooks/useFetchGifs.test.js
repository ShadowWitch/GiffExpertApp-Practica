import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el Hook useFetchGifs', () =>{

    const category = 'One Punch'

    test('Debe de regresar el estado inicial', () =>{
        // "renderHook" es para poder simular la renderizacion de un componente (ya que sin eso no podemos ejecutar un Hook ya que solo se pueden ejecutar dentro de un componente...)

        const { result } = renderHook(() => useFetchGifs(category))      
        const {images, isLoading} = result.current

        expect(isLoading).toBeTruthy()
        expect(Array.isArray(images)).toBeTruthy()
        expect(images.length).toBe(0)
    })

    test('Debe de retornar un arreglo de imagenes y el isLoading en true', async () =>{
        const { result } = renderHook(() => useFetchGifs(category))      

        await waitFor( // Le estoy diciendo que espere, a que lo que estan dentro se cumpla
            ( ) => expect(result.current.images.length).toBeGreaterThan(0) // "toBeGreaterThan" que sea mayor
        )

        const {images, isLoading} = result.current

        expect(isLoading).toBeFalsy()
        expect(Array.isArray(images)).toBeTruthy()
        expect(images.length).toBeGreaterThan(0)

    })

})
