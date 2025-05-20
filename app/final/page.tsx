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

export default function Final() {

    const mockCharacter = { name: 'Dayton', id: 1, gender: 'Male', origin: 'Human', publisher: 'DCA', image: 'http://i.annihil.us/u/prod/marvel/i/mg/9/b0/634d57a98bda4.jpg', thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/9/b0/634d57a98bda4.jpg' }



    return (
        <section className={styles.container}>
            <Navbar />
            <Hero />
            <Announcement />
            <CharacterList />

        </section>
    )
}