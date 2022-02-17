import React, { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState( initialState )

    const reset = () => {
        setValues(initialState);
    }

    //cuando el input cambie: 
    const handleImputChange = ({target}) => {
        setValues({
            //copiamos los valores anteriores: 
            ...values,
            //actualizamos los valores modificados:
            [target.name]: target.value
        });
        //para mostrar que los valores cambian:
        //console.log(values)
    }
    //retornamos los valores y la función que gestiona las variables
    return [values,handleImputChange,reset]
}
