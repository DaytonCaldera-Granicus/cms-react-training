import { Character } from '@/types/Character';
import styles from './list.module.css'
import CharacterCard from '../character/character';
import { useStore } from '@/stores/characterStore';


export interface ListProp {
    children: React.ReactNode;
}

const List = ({ children }: ListProp) => {
    return (
        <div className={styles.list_container}>
            {children}
        </div>
    )
}

export default List;