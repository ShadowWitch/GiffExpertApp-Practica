import { useState } from "react"
import {PropTypes} from 'prop-types'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()
        if(inputValue.trim().length <=1) return;
        onNewCategory(inputValue)
        setInputValue('')
    }

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    return (
        <form
            // className="form_gifs"
            onSubmit={onSubmit}
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
