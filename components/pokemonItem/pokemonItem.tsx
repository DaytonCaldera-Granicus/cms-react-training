import Image from 'next/image';
import styles from './pokemonItem.module.css'
import { PokemonResponse } from '@/types/Pokemon';


const PokemonCard = ({ pokemon }: { pokemon: PokemonResponse }) => {
    return (
        <div className={styles.card}>
            <div className={styles['thumbnail-holder']}>
                <Image src={pokemon.thumbnail} alt='pokemon sprite' width={185} height={185} className={styles.thumbnail} />
                <button className={styles['fav-button']}><Image src={'bolt.svg'} width={30} height={30} alt=''/></button>
            </div>
            <div className={styles['text-content']}>
                <h2>{pokemon.name}</h2>
                <p><strong>Pokedex ID: </strong>{pokemon.id}</p>
            </div>
        </div>
    );
}

export default PokemonCard;