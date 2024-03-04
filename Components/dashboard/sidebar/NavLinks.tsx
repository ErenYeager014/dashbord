import { MdDashboard } from "react-icons/md";
import Link from "next/link"
import styles from "@/Styles/dashboard/sidebar/navlinks.module.css"
import { navProps } from "@/Types/propsTypes";
import { menu_items } from "@/utils/menuItems";
const NavLinks = () => {
    return (
        <div className={styles.navlinks}>
            {
                menu_items.map((data) => {
                    return <NavRoute key={data.id} {...data} />
                })
            }
        </div>
    )
}

export default NavLinks


const NavRoute: React.FC<navProps> = ({ istitle, title, route, icon }) => {
    return (
        <>
            {
                istitle ? <div className={styles.title}>
                    {title}
                </div>
                    :
                    <div className={styles.links}>
                        <Link href={route && route} className={styles.link}>
                            {icon && icon()}
                            <p>
                                {title}
                            </p>
                        </Link>
                    </div>
            }
        </>
    )
}