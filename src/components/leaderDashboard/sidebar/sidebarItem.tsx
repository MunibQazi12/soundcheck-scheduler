'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Item {
    label: string;
    path: string;
    icon?: any;
}

interface Props {
    item: {
        label: string;
        path: string;
        icon?: any;
        subItems?: Item[]
    },
}

const SidebarItem = ({ item }: Props) => {
    const { icon, label, subItems = [], path } = item;
    const pathname = usePathname();

    const isSelected = pathname === path;

    return (
        <li>
            <Link href={path} className={`flex gap-2 items-center py-2.5 px-[14px] text-sm text-white font-inter rounded-large hover:bg-light-purple dark:hover:bg-dark-primary-200  ${isSelected ? "bg-light-purple dark:bg-dark-primary-200" : ""}`}>
                {icon}
                <span>{label}</span>
            </Link>
            {
                subItems && subItems.length > 0 ?
                    <ul className="mt-2 list-none pl-5 flex flex-col gap-2">
                        {
                            subItems?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link href={item.path} className={`flex gap-2 items-center py-2.5 px-[14px] text-sm text-white font-inter rounded-large hover:bg-light-purple dark:hover:bg-dark-primary-200  ${isSelected ? "bg-light-purple dark:bg-dark-primary-200 " : ""}`}>
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul> : null
            }
        </li>
    )
}

export default SidebarItem