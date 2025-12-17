import Image from "next/image"
import UserActions from "./actions";
import Libraryactions from "@/components/library/libraryactions";

interface Props {
    tableName?: string;
    item: {
        userimage?: any;
        username?: string;
        email?: string;
        phone?: string;
        role?: string;
        logindate?: string;


    }
}

const Userdata = ({ item, tableName }: Props) => {
    const { userimage, username, email, phone, role, logindate } = item;
    return (
        <tr className="h-12 bg-white dark:bg-dark-primary-50">
            <td className="rounded-s-md px-2">
                <div className='w-9 h-9 rounded-full flex justify-center items-center overflow-hidden'>
                    <Image src={userimage} alt="user" className="rounded-full" />
                </div>
            </td>
            <td className="px-3">
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading font-inter whitespace-nowrap">{username}</p>
            </td>
            <td className="px-3">
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter whitespace-nowrap">{email}</p>
            </td>
            <td className="px-3">
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter whitespace-nowrap">{phone}</p>
            </td>
            <td className="px-3">
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter whitespace-nowrap">{role}</p>
            </td>
            <td className="px-3">
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter whitespace-nowrap">{logindate}</p>
            </td>
            <td className="px-3 rounded-e-large">
                {tableName === 'library' ? <Libraryactions /> : <UserActions />}

            </td>
        </tr>
    )
}

export default Userdata