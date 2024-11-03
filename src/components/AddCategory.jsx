import React, { useState } from 'react'

// export function AddCategory({setCategories}) {
export const AddCategory = ({ onAddCategory, categories }) => {



    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        //  console.log(target.value);
        setInputValue(target.value)

    }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     setCategories(categories => [ ...categories, inputValue]);

    //     // console.log(inputValue);
    //     setInputValue(''); 
    // };


    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <=1) return
        onAddCategory(inputValue.trim());
        console.log(inputValue);
        setInputValue('');

    };

    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <input type="text" placeholder='Buscar gifs' value={inputValue} onChange={onInputChange} />
                <button type='summit'>Enviar</button>
            </form>

        </div>
    )
}


