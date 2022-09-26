import { useState } from "react"
// import { AddCategory } from "./components/AddCategory"
// import { GifGrid } from "./components/GifGrid"

import {AddCategory, GifGrid} from './components/index.barril';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return alert('Ya existe');
        setCategories([...categories, newCategory])
        // setCategories(['Hola mundo', ...categories])
        // setCategories(cat => [...cat, 'Hola mundo'])
    }

    return (
        <>
            <h1>GifExpert</h1>

            <AddCategory 
                onNewCategory={onAddCategory}
            />

            {
                categories.map(category => (
                        <GifGrid 
                            category={category}
                            key={category}
                        />
                    ))
            }

        </>
    )
}
