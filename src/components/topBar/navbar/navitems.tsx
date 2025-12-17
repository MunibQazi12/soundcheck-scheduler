
import Image from "next/image";
import Link from "next/link";

interface Props {
    item: {
        label: string;
        path: string;
        icon?: any;
    },
    className?: string
}
const Navitems = ({ item, className = "" }: Props) => {
    return (
        <li className={`flex items-center gap-1 text-white dark:text-darkText hover:text-hover-color ${className} ${item.icon ? "sm:w-auto w-full sm:justify-start justify-center" : ""}`}>
            {item.icon ? <Image src={item.icon} alt="test" height={6} width={6} className="dark:invert" /> : null}
            <Link href={item.path} className="lg:text-base text-sm">{item?.label}</Link>
        </li>
    )
}

export default Navitems