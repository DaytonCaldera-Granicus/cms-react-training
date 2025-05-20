import { ReactNode, useEffect, useState } from 'react';
import styles from './layouts.module.css'
import Filter from '../filter/filter';
import List from './list';
import { Character, CharacterDetailResponse, CharacterResponse } from '@/types/Character';
import CharacterCard from '../character/character';
import useApi from '@/hooks/useApi';
import { characterStore } from '@/stores/characterStore';

const CharacterList = () => {

    const store = characterStore();
    const [characters, setCharacters] = useState<Character[]>([]);
    const [limit, setLimit] = useState(15);
    const [offset, setOffset] = useState(0);
    const [filter, setFilter] = useState('');
    const { data: fetchedCharacters } = useApi({ endpoint: 'characters', limit: limit, offset: offset })

    useEffect(() => {
        console.log(fetchedCharacters);

        if (fetchedCharacters && fetchedCharacters.results) {
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

    useEffect(() => {
        console.log(store.characters);
    }, [store.characters])
    const handleFilterChange = (newFilter: string) => {
        setFilter(newFilter);
    }
    const handleLimitChange = (newLimit: number) => {
        setLimit(newLimit);
    }
    const handleOffsetChange = (newOffset: number) => {
        setOffset(newOffset);
    }
    const handleSortChange = (newSort: string) => {
        console.log('sort changed', newSort);
    }
    return (
        <div className={styles.twoColumnLayout}>
            <div className={styles.leftColumn}>
                <Filter />
                <List>
                    {characters.map((character) => (
                        <CharacterCard character={character} key={character.id} addToFavorites={() => addToFavorites(character)} />
                    ))}
                </List>
            </div>
            <div className={styles.rightColumn}>
                <h1>Here goes a sidebar</h1>
            </div>
        </div>
    )
}

export default CharacterList;