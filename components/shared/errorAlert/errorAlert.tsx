import styles from './errorAlert.module.css'
import { Error } from '@/types/error';

const ErrorAlert = ({ data }: { data: Error }) => {
    return (
        <div className={styles.card}>
            <div className={styles["border-left"]}></div>
            <div className={styles['text-content']}>
                <h1 className={styles.header}>Error: {}</h1>
                <p><strong>Status: {data.status}</strong> - {data.message}</p>
            </div>
        </div>
    );
}


export default ErrorAlert;