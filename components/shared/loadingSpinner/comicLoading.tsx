import styles from './loadingSpinner.module.css'
const ComicSpinner = () => {
    return (
        <div className={`${styles['spinner-container']} ${styles['comic-spinner']}`}>
            <img className={styles.spinner} src="./logo.svg" alt="Loading..." />
            <p>Loading <span>. </span><span>. </span><span>. </span></p>
        </div>
    );
}

export default ComicSpinner;