import React, {useEffect, useState} from 'react';

const useRequest = (request) => {
    const [code, setCode] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        request()
            .then(response => setCode(response.statusCode))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, []);

    return[code, loading, error]
};

export default useRequest;