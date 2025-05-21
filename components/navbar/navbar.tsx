import styles from './navbar.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { characterStore } from '@/stores/characterStore';
import { useEffect, useState } from 'react';


const Navbar = () => {
    const store = characterStore()
    const [favorites, setFavorites] = useState(store.characters.length)
    useEffect(()=>{
        setFavorites(store.characters.length)
    },[store.characters])
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src={'/logo.svg'} width={106} height={106} alt='Comic closet logo' />
            </div>
            <ul className={styles.options}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
            </ul>
            <div className={styles.favorites}>
                <a href="">
                    <span className={styles.icon}>&#9733;</span>
                    <span className={styles.text}>Favorites</span>
                    <span>{(favorites > 0) ? `(${favorites})`:''}</span>
                </a>
            </div>
            <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
            <label htmlFor="menu-toggle" className={styles.menuIcon}>
                <FontAwesomeIcon icon={faBars} />
            </label>
        </nav>
    )
}

export default Navbar;