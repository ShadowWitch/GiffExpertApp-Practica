import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem />', () => {
    const title = 'One Punch'
    const url = 'https://media0.giphy.com/media/lqFHf5fYMSuKcSOJph/giphy.gif?cid=284aee55m6ffwyzjtf0gogvv8ruy5aicg4gr0x9gii75v8v8&rid=giphy.gif&ct=g'
    test('Debe de hacer match con el SnapShot', () =>{

        // const {container} = render(<GifItem title={title} url={url} />)
        // console.log(container)

        const {container} = render(<GifItem title={title} url={url} />)
        // console.log(container)

        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar la imagen con el URL y la Alt indicada', () =>{

        render(<GifItem title={title} url={url} />)
        // screen.debug(); // ver componente renderizado en memoria (para recordar como va)
        // expect(screen.getByRole("img").src).toBe(url)
        // expect(screen.getByRole("img").alt).toBe(title)

        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('Debe mostrar el titulo en un componente', () => {
        render(<GifItem title={title} url={url} />)
        // console.log(screen.getByText(title)) // Buscara en el componente donde este la palabra que tiene "title"
        // console.log(screen.getByText(title))

        expect(screen.getByText(title)).toBeTruthy() // "toBeTruthy()" Comprueba si existe
    })
})

// qwe
