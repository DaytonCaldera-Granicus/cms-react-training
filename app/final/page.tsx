'use client'
import Hero from '@/components/hero/hero'
import styles from './final.module.css'
import Navbar from '@/components/navbar/navbar'
import Announcement from '@/components/announcement/announcement'
import Filter from '@/components/filter/filter'
import Button from '@/components/shared/buttons/button'
import CharacterCard from '@/components/character/character'
import CharacterList from '@/components/list/characterList'
import List from '@/components/list/list'
import Footer from '@/components/footer/footer'

export default function Final() {
    
    return (
        <section className={styles.container}>
            <Navbar />
            <Hero />
            <Announcement />
            <CharacterList />
            <Footer />
        </section>
    )
}