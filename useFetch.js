import React, { setState, useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    //useRef para referenciar un lugar del html:
    //en este caso, que referencie cuando el componente que usa el hook esta montado
    const isCreated = useRef(true);

    useEffect(() => {
        //cuando se destruya el componente, que no dispare el setState para no 
        //provocar un error
        return () => {
            isCreated.current = false;
        }
    }, [])

    //se ejecuta solo cuando el url cambia:
    useEffect(() => {
        //a cada modificacion de url volvemos a poner los datos iniciales:
        setState({ data: null, loading: true, error: null });
        //luego hacemos la petición:
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isCreated.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }
            })
    }, [url])

    //regreso el objeto solamente: 
    return state;
}