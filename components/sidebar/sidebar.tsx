import { characterStore } from '@/stores/characterStore';
import styles from './sidebar.module.css'
import FavoriteCharacter from '../character/favorite';

const Sidebar = () => {

    const favorites = characterStore((state) => state.characters)


    return (
        <aside className={styles.sidebar}>
            <h1>Favorites</h1>
            {favorites.map((character) => (
                <FavoriteCharacter
                    key={character.id}
                    character={character} />
            ))}
        </aside>
    )
}

export default Sidebar;