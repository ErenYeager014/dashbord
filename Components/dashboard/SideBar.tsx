
import styles from "@/Styles/dashboard/sidebar/sidebar.module.css"
import Profile from "./sidebar/Profile"
import NavLinks from "./sidebar/NavLinks"
const SideBar = () => {
    return (
        <div className={styles.sidebar}><Profile />
            <NavLinks /></div>
    )
}

export default SideBar