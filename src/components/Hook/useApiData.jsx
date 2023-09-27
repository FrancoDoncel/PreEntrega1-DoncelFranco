import React, { useEffect } from 'react'
import { useState } from 'react'

const useApiData = (url) => {

    const [data,setData] = useState([]);
    //const [error,setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            }  catch (error) {
            //setError(error);
            console.log(error);
            }
        }
        getData();
    }, []);
    return [data]
}

export default useApiData