import styles from './hero.module.css'
import Image from 'next/image';
const Hero = () => {
    return (
        <section className={styles.hero}>
            <Image src={'/hero-photo.png'} width={1440} height={650} alt='Hero photo for comic closet' />
            <div className={styles.text_content}>Comic Closet</div>
        </section>
    )
}

export default Hero;