import { FaUser } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { GiShoppingBag } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";
import { TbReportSearch } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelp } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { navProps } from "@/Types/propsTypes";
export const menu_items: navProps[] = [
    {
        id: 1,
        title: "pages",
        istitle: true,
    },
    {
        id: 2,
        title: "Dashboard",
        route: "/dashboard",
        icon: MdDashboard,
        istitle: false,
    },
    {
        id: 3,
        title: "User",
        route: "/user",
        icon: FaUser,
        istitle: false,
    },
    {
        id: 4,
        title: "Product",
        route: "/products",
        icon: GiShoppingBag,
        istitle: false,
    },
    {
        id: 5,
        title: "Transactions",
        route: "/transactions",
        icon: GrTransaction,
        istitle: false,
    },
    {
        id: 6,
        title: "Analytics",
        istitle: true,
    },
    {
        id: 7,
        title: "Revenue",
        route: "/revenue",
        icon: BsCurrencyDollar,
        istitle: false,
    },

    {
        id: 8,
        title: "Report",
        route: "/report",
        icon: TbReportSearch,
        istitle: false,
    },
    {
        id: 9,
        title: "Teams",
        route: "/teams",
        icon: MdGroups2,
        istitle: false,
    },
    {
        id: 10,
        title: "User",
        istitle: true,
    },
    {
        id: 11,
        title: "Settings",
        route: "/settings",
        icon: IoMdSettings,
        istitle: false,
    },
    {
        id: 12,
        title: "Help",
        route: "/help",
        icon: IoMdHelp,
        istitle: false,
    },
    {
        id: 13,
        title: "LogOut",
        route: "/logout",
        icon: RiLogoutBoxLine,
        istitle: false,
    },
]