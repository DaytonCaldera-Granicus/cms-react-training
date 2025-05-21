import { ReactNode, useEffect, useState } from 'react';
import styles from './layouts.module.css'
import Filter, { FilterValue } from '../filter/filter';
import List from './list';
import { Character, CharacterDetailResponse, CharacterResponse } from '@/types/Character';
import CharacterCard from '../character/character';
import useApi from '@/hooks/useApi';
import { characterStore } from '@/stores/characterStore';
import Sidebar from '../sidebar/sidebar';
import ComicSpinner from '../shared/loadingSpinner/comicLoading';
import Pager from '../pager/pager';

const CharacterList = () => {

    const store = characterStore();
    const [characters, setCharacters] = useState<Character[]>([]);
    const [limit, setLimit] = useState(15);
    const [prevOffset, setPrevOffset] = useState(0);
    const [offset, setOffset] = useState(0);
    const [filter, setFilter] = useState('');
    const [total, setTotal] = useState(0);
    const { data: fetchedCharacters, error, loading } = useApi({ endpoint: 'characters', limit: limit, offset: offset, filter: filter })
    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    useEffect(() => {
        setTotal(0);
        setTotal(0);
        if (fetchedCharacters && fetchedCharacters.results) {
            setTotal(fetchedCharacters.number_of_total_results);
            setOffset(fetchedCharacters.offset)
            const mappedCharacters = (fetchedCharacters.results).map((character: CharacterDetailResponse) => {
                return {
                    id: character.id,
                    name: character.name,
                    gender: (character.gender == 1) ? 'Male' : (character.gender == 2) ? 'Female' : 'Other',
                    origin: character?.origin?.name,
                    publisher: character?.publisher?.name,
                    image: character.image.original_url,
                    thumbnail: character.image.thumb_url
                } as Character;
            })
            setCharacters(mappedCharacters)
        }
    }, [fetchedCharacters])

    const addToFavorites = (character: Character) => {
        console.log('add to favorites', character);
        store.addCharacter(character);
    }


    const handleFilterChange = (newFilter: FilterValue) => {
        const urlFilter = Object.entries(newFilter)
            .filter(([_, value]) => value !== undefined && value !== '')
            .map(([key, value]) => `${key}:${String(value)}`)
            .join(',');
        console.log(urlFilter.toString());

        setFilter(urlFilter.toString());
    }

    const handlePrev = () => {
        if (offset > 0) {
            setPrevOffset(offset);
            setOffset(offset - limit);
        }
    }

    const handleNext = () => {
        setOffset(offset + limit)
        if (offset + limit < total) {
            setPrevOffset(offset);
            setOffset(offset + limit);
        }
    }

    return (
        <div className={styles.twoColumnLayout}>
            <button onClick={() => setShowSidebar(!showSidebar)} className={`${styles.showSidebarButton}`}>Show favorites &#9733;</button>
            <div className={styles.leftColumn}>
                <Filter onChange={handleFilterChange} />
                {!loading && !error ? (
                    <>
                        <List>
                            {characters.map((character) => (
                                <CharacterCard character={character} key={character.id} addToFavorites={() => addToFavorites(character)} />
                            ))}
                        </List>
                        <Pager start={offset + 1} end={offset + limit} total={total} onNext={handleNext} onPrev={handlePrev} />
                    </>
                ) : (loading) ? (<ComicSpinner />) : (<></>)}

            </div>
            <div className={`${styles.rightColumn} ${(showSidebar) ? styles.showSidebar : ''}`}>
                <Sidebar />
            </div>
        </div>
    )
}

export default CharacterList;