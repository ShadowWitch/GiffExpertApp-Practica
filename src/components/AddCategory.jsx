import { useState } from "react"
import {PropTypes} from 'prop-types'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()
        // console.log('ACA >>> ', inputValue)
        // console.log('ACA >>', e.target.value);

        if(inputValue.trim().length <= 1) return;
        setInputValue('')
        onNewCategory(inputValue)
    }

    const onInputChange = ({target}) =>{
        // console.log('TARGET ACA>> ', target.value)
        // console.log(target)
        setInputValue(target.value)
    }

    return (
        <form
            // className="form_gifs"
            onSubmit={onSubmit}
            aria-label="form" // "aria-label" para que luego lo podamos llamar desde los Testing con "getByRole('form')" ya que luego no lo reconocera si no se lo pongo
        >
            <input 
                type="text" 
                placeholder="Seatch Gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}