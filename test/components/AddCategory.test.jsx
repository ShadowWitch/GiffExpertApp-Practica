import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Prueba en <AddCategory />', () => {
    // test( 'Validar SnapShot', () =>{
    //     // <AddCategory />
    //     const {container} = render(<AddCategory  />)
    //     expect(container).toMatchSnapshot()
    //     // console.log(container)
    // })

    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => {}} />)
        const valor = 'One Punch'
        const inputText = screen.getByRole('textbox')
        fireEvent.input(inputText, {target: {value: valor}}) // Estoy mandando a llamar el evento "input" (Si mete datos), como parametro le pasamos el Objeto que recibira ese dicho evento... Y luego los datos que le queremos enviar
        
        // console.log(inputText.value)
        expect(inputText.value).toBe(valor)
        // screen.debug()
    })


    test('Debe de llamar onNewCategory() si el input tiene un valor', () =>{
        const inputValue = 'One Punch'
        
        // TODO: ???
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)

        const inputText = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(inputText, {target: {value: inputValue}})
        // expect(inputText.value).toBe(inputValue)
        
        fireEvent.submit(form) // El "submit" por defecto ya le manda la configuracion necesaria al "{}"
        expect(inputText.value).toBe('')
        // screen.debug()
        
        expect(onNewCategory).toHaveBeenCalled() // Estoy esperando a que se llame la funcion "onNewCategory"
        expect(onNewCategory).toHaveBeenCalledTimes(1) // Estoy esperando a que llame "1" vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue) // Estoy esperando a que haya sido llamada pasandole como parametro el "inputValue" o sea "One Punch"
        // expect(onNewCategory).toHaveBeenNthCalledWith(inputValue) // Estoy esperando a que haya sido llamada pasandole como parametro el "inputValue" o sea "One Punch"
        // expect(onNewCategory).toHaveBeenLastCalledWith(inputValue) // Estoy esperando a que haya sido llamada POR ULTIMA VEZ pasandole como parametro el "inputValue" o sea "One Punch"
    })

    test('No debe de llamar a la funcion onNewCategory() si el input esta vacio', () =>{
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}/>)

        const form = screen.getByRole('form')

        fireEvent.submit(form) // En caso de que no le enviemos nada con el "submit"

        // expect(onNewCategory).not.toHaveBeenCalled() // Si no se ha llamado
        expect(onNewCategory).toHaveBeenCalledTimes(0)
        screen.debug()
    })

})