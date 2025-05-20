import Hero from '@/components/hero/hero'
import styles from './final.module.css'
import Navbar from '@/components/navbar/navbar'
import Announcement from '@/components/announcement/announcement'

export default function Final(){
    return (
        <section className={styles.container}>
            <Navbar />
            <Hero />
            <Announcement />
        </section>
    )
}