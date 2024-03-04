import styles from "@/Styles/dashboard/sidebar/profile.module.css"
import { FaUserCircle } from "react-icons/fa";
const Profile = () => {
    return (
        <div className={styles.profile}><div>
            <FaUserCircle fontSize={"40px"} />
        </div>
            <div>
                <h6 className={styles["user_name"]}>User1</h6>
                <p className={styles.role}>role</p>
            </div>
        </div>
    )
}

export default Profile