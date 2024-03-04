import NavBar from "@/Components/dashboard/NavBar"
import SideBar from "@/Components/dashboard/SideBar"
import { props } from "@/Types/propsTypes"
import styles from "@/Styles/dashboard/dashboard.module.css"
const Layout = ({ children }: props) => {
    return (
        <div className={styles.dashboard}>
            <div>
                <SideBar />
            </div>
            <div>
                <div>
                    <NavBar />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout