import { useState } from "react"
import { AddCategory } from "./AddCategory"
import { GifGrid } from "./GifGrid"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Naruto'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return alert('Ya existe');
        setCategories([...categories, newCategory])
        // setCategories(['Hola mundo', ...categories])
        // setCategories(cat => [...cat, 'Hola mundo'])
    }

    const arr1 = [1, 2, 3]

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
