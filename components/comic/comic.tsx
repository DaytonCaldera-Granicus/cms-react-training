import Image from 'next/image';
import styles from './comic.module.css'
import { Comic } from '@/types/Comic'
import { getFormattedDate } from '@/utils/getFormattedDate';
import { getCreators } from '@/utils/getCreatorData';


const ComicCard = ({ comic }: { comic: Comic }) => {
    return (
        <div className={styles.card}>
            <div className={styles['thumbnail-holder']}>
                <Image src={comic.thumbnail} alt='comic cover' width={185} height={275} className={styles.thumbnail} />
                <button className={styles['fav-button']}><Image src={'bolt.svg'} width={30} height={30} alt=''/></button>
            </div>
            <div className={styles['text-content']}>
                <h2>{comic.title}</h2>
                <p><strong>Issue: </strong>{comic.issueNumber}</p>
                <p><strong>Published: </strong>{getFormattedDate(comic.publishedDate)}</p>
                <p><strong>Creators: </strong>{comic.creators ? getCreators(comic.creators) : 'N/A'}</p>
            </div>
        </div>
    );
}

export default ComicCard;