import styles from './footer.module.css'
import Image from 'next/image';
const Footer = () => {
    return (
        <section className={styles.footer}>
            <Image src={'/logo.svg'} width={106} height={106} alt='footer logo' />
            <p>
                <span>Privacy Policy</span> | <span>Terms of Service</span>
            </p>
            <p>Copyright 2022. Comic Closet, LLC. All rights reserved.</p>
        </section>
    )
}

export default Footer;