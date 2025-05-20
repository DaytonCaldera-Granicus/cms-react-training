import { useEffect, useState } from 'react';
import axios from 'axios';

function useApi<T = any>() {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        setLoading(true);
        axios.get<T>('/api')
            .then(response => setData(response.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}

export default useApi;