import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    if (!response.ok){
                        throw Error('Could not fetch');
                    }
                    return response.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                }).catch(error => {
                    if (error.name === 'AbortError') {
                        console.log('Abort');
                    } else {
                        setIsPending(false);
                        setError(error.message);
                    }
            })
        }, 1000);
    }, [url]);
    return {data, isPending, error};
}

export default useFetch;