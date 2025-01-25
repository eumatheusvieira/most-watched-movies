import NavBar from "./components/navbar";
import { LuCircleUser } from "react-icons/lu";
import styles from './Profile.module.css'

export default function Profile() {
    if (!localStorage.getItem('name')) {
        localStorage.setItem("name", prompt("DIGITE SEU NOME"));
    }
    function removeUser() {
        localStorage.removeItem('name')
        location.reload()
    }
    return (
        <>
            <NavBar />
            <div className={styles.userContainer}>
                <div className={styles.userContent}>
                    <p className={styles.userIcon}>
                        <LuCircleUser />
                    </p>
                    <p className={styles.name}>{(localStorage.getItem('name')).toUpperCase()}</p>
                </div>
                <button className={styles.btn} onClick={removeUser}>TROCAR USUÁRIO</button> 
            </div>
            <hr/>
        </>
    )
}