import Image from 'next/image';
import styles from './character.module.css'
import { Character } from '@/types/Character';
import Button from '../shared/buttons/button';

// Example: import your store hook
import { characterStore } from '@/stores/characterStore';
import { useEffect, useState } from 'react';

export interface CharacterProp {
    character: Character;
    addToFavorites?: () => void;
    className?: string;
}

const CharacterCard = ({ character, addToFavorites, className }: CharacterProp) => {

    const characters = characterStore(state => state.characters);
    const characterExists = characterStore(state => state.characterExists);

    const [isActive, setIsActive] = useState(() => characterExists(character.id));

    useEffect(() => {
        setIsActive(characterExists(character.id));
    }, [characters, characterExists]);


    return (
        <div className={styles.card}>
            <div className={styles['thumbnail-holder']}>
                <Image src={character.image} alt='comic cover' width={185} height={275} className={styles.thumbnail} />
                <Button onClick={addToFavorites}
                    className={`${styles.fav_button} ${isActive ? styles.active : ''}`}
                >
                    <Image src={'bolt.svg'} width={30} height={30} alt='' />
                </Button>
            </div>
            <div className={styles['text-content']}>
                <h2>{character.name}</h2>
                <p><strong>Gender: </strong>{character.gender}</p>
                <p><strong>Origin: </strong>{character.origin}</p>
                <p><strong>Publisher: </strong>{character.publisher}</p>
            </div>
        </div>
    );
}

export default CharacterCard;