import { IconType } from "react-icons";

export interface props {
    children: React.ReactNode;
}
export interface navProps {
    istitle: Boolean,
    title: string,
    id: Number,
    route?: string,
    icon?: IconType
}