import { useEffect, useState } from "react";
import axios from 'axios';
import { Error } from '@/types/error';

const usePokemon = (pokemonName: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                setData(response.data.results);
            } catch (error:any) {
                const err: Error = {
                    message: error.message,
                    status:error.code
                };
                setError(err);
            }finally {
                setLoading(false);
            }
        }
        fetchPokemon();
    }, [pokemonName]);

    return { data, loading, error };
}

export default usePokemon;