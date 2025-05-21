import { Character } from '@/types/Character';
import styles from './character.module.css'
import Button from '../shared/buttons/button';
import Image from 'next/image';
import { characterStore } from '@/stores/characterStore';

interface FavoriteProps {
    character: Character;
}
const FavoriteCharacter = ({ character }: FavoriteProps) => {
    const removeFromFavorites = () => {
        characterStore.getState().removeCharacter(character.id);
    }
    return (
        <div className={styles.favorite}>
            <Button onClick={removeFromFavorites}>&times;</Button>
            <Image src={character.thumbnail} width={50} height={75} alt='hero thumb' />
            <div className={styles.favorite_info}>
                <h5>{character.name}</h5>
                <p>ID: <span>{character.id}</span></p>
            </div>
        </div>
    )
}

export default FavoriteCharacter;