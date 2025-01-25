import { LuCircleUser, LuMoon, LuSun } from "react-icons/lu";
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className={styles.navbarContainer}>
            <Link to={'/'} className={styles.title}>Best Movies</Link>
            <a href="/profile" className={styles.userIcon}><LuCircleUser /></a>
        </nav>
    )
}