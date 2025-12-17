import Editicon from "@/assets/svg/editicon"
import Peoplesicon from "@/assets/svg/peoplesicon"
import PlusIcon from "@/assets/svg/plusicon"
import Groupheader from "./groupheader"

import user1 from "/src/assets/images/chatquestion.png"
import user2 from "/src/assets/images/drums.png"
import user3 from "/src/assets/images/guatrist.png"
import user4 from "/src/assets/images/keys.png"
import Userdata from "../usertable/userdata"
import Group1 from "../../../assets/images/people1.png"
import Group2 from "../../../assets/images/people2.png"

const PEOPLE_DATA = [
    {
        userimage: user1,
        username: 'Morgan Hayes',
        email: 'radiant.echo@example.com',
        phone: '(555) 123-4567',
        role: 'Bass',
        logindate: 'June 17, 2024 7:11 AM'
    },
    {
        userimage: user2,
        username: 'Logan Pierce',
        email: 'mystic.rhythm@example.com',
        phone: '(555) 678-9012',
        role: 'Drums',
        logindate: 'June 17, 2024 7:11 AM'
    },
    {
        userimage: user3,
        username: 'Alex Rowan',
        email: 'vivid.dreamers@example.com',
        phone: '(555) 234-5678',
        role: 'Electric Guitar',
        logindate: 'June 17, 2024 7:11 AM'
    }, {
        userimage: user4,
        username: 'Rowan Scott',
        email: 'azure.haze@example.com',
        phone: '(555) 678-9012',
        role: 'Keys',
        logindate: 'June 17, 2024 7:11 AM'
    }
]
const GROUP_HEADER = [
    { groupicon: Group1, groupname: 'Radiant Echo' },
    // {groupicon: Group2, groupname: 'Mystic Rhythm'}
]

const Groups = () => {
    return (
        <section className='py-5 xl:px-8 px-5 bg-pastel-purple dark:bg-dark-primary-100 h-[93vh] overflow-auto'>
            <div className="w-full flex gap-5 justify-between items-center xs:flex-nowrap flex-wrap">
                <div className="flex gap-3 items-center xs:w-fit w-full">
                    <div className="w-9 h-9 rounded-large bg-[#FFE5A4] dark:bg-dark-primary-50 flex items-center justify-center">
                        <Peoplesicon />
                    </div>
                    <p className="text-lg leading-1.2 font-bold text-heading-text dark:text-darkheading font-manrope">Groups</p>
                </div>
                <div className="flex gap-2.5 items-center xs:w-fit w-full">
                    <button className="xs:w-9 w-1/2 h-9 rounded-large flex items-center justify-center p-1 text-xs leading-normal bg-white dark:bg-dark-primary-50 text-heading-text font-semibold font-inter">
                        <Editicon />
                    </button>
                    <button className="xs:w-32 w-1/2 h-9 rounded-md flex gap-2 items-center justify-center p-1 text-xs leading-normal bg-primary-100 dark:bg-dark-primary-50 text-white dark:text-darkheading font-semibold font-inter">
                        <PlusIcon /> Add Group
                    </button>
                </div>
            </div>
            <div className="mt-5">
                {
                    GROUP_HEADER.map((item, index) => <Groupheader key={index} item={item} />)
                }
                <div className="overflow-hidden w-full overflow-x-auto">
                    <table className="w-full border-separate border-spacing-y-2.5">
                        <thead>
                            <th className="px-2 text-left w-9">
                                <div className="w-9 h-9 flex justify-center items-center">
                                </div>
                            </th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">Name</th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">EMAIL ADDRESS</th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">PHONE</th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">ROLE</th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">last login</th>
                            <th className="px-2 text-left text-[10px] leading-normal font-inter text-heading-text w-20"></th>
                        </thead>
                        <tbody>
                            {
                                PEOPLE_DATA.map((item, index) => <Userdata key={index} item={item} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-7">
                {
                    GROUP_HEADER.map((item, index) => <Groupheader key={index} item={item} />)
                }
                <div className="overflow-hidden w-full overflow-x-auto">
                    <table className="w-full border-separate border-spacing-y-2.5">
                        <thead>
                            <th className="px-2 text-left w-9">
                                <div className="w-9 h-9 flex justify-center items-center">
                                </div>
                            </th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">Name</th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">EMAIL ADDRESS</th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">PHONE</th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">ROLE</th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">last login</th>
                            <th className="px-2 text-left text-[10px] leading-normal font-inter text-heading-text w-20"></th>
                        </thead>
                        <tbody>
                            {
                                PEOPLE_DATA.map((item, index) => <Userdata key={index} item={item} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Groups