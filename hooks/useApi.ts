import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export interface FetchOptions {
    endpoint: string;
    limit: number;
    offset: number;
}

function useApi<T = any>(options?: FetchOptions) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    const fetchApi = useCallback(async (currentOptions: FetchOptions) => {
        setLoading(true);
        setError(null);

        const queryParams = new URLSearchParams();



        try {
            if (currentOptions) {
                for (const key in currentOptions) {
                    if (currentOptions[key as keyof FetchOptions] !== undefined) {
                        queryParams.append(key, String(currentOptions[key as keyof FetchOptions]));
                    }
                }
            }
            const queryString = queryParams.toString();
            const response = await axios.get(`/api?${queryString}`);
            setData(response.data.response);
        } catch (error: any) {
            console.error(error);
            const err = {
                message: error.message,
                status: error.code
            };
            setError(err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (options) {
            fetchApi(options);
        }
    }, [JSON.stringify(options), fetchApi]);

    return { data, loading, error };
}

export default useApi;
