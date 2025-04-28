import styles from './loadingSpinner.module.css'
const LoadingSpinner = () => {
    return (
        <div className={styles['spinner-container']}>
            <img className={styles.spinner} src="./pokeball.svg" alt="Loading..." />
            <p>Loading <span>. </span><span>. </span><span>. </span></p>
        </div>
    );
}

export default LoadingSpinner;