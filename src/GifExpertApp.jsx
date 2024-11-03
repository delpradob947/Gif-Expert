import React, { useState} from 'react'
import { AddCategory ,GifGrid} from './components';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    // const inputRef = useRef();

    // const onAddCategory = () => {
    //     const newCategory = inputRef.current.value.trim();
    //     setCategories([...categories, newCategory]);
    //     setCategories(categories =>[...categories,newCategory])
    // }

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return alert('La categoria ya existe');

        setCategories([...categories, newCategory]);
    };

    return (
        <>

            <h1>GifExpertApp</h1>

            {/* <AddCategory setCategories={setCategories} /> */}
            <AddCategory onAddCategory={onAddCategory} />
            {/* <input type="text" name='' id="" ref={inputRef} />;
            <button onClick={onAddCategory}>Agregar</button> */}

            {categories.map(category => (<GifGrid key={category} category={category} />))}

        </>
    )
}

export default GifExpertApp
