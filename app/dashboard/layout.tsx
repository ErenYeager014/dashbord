
import NavBar from "@/Components/dashboard/NavBar"
import SideBar from "@/Components/dashboard/SideBar"
import { props } from "@/Types/propsTypes"
const Layout = ({ children }: props) => {
    return (
        <div>
            <div>
                <SideBar />
            </div>
            <div>
                <NavBar />
            </div>
        </div>
    )
}

export default Layout