import user1 from "/src/assets/images/people1.png"
import user2 from "/src/assets/images/people2.png"
import user3 from "/src/assets/images/people3.png"
import user4 from "/src/assets/images/people4.png"
import user5 from "/src/assets/images/people5.png"

import Userdata from "./userdata"
import Paginations from "../paginations"

const PEOPLE_DATA = [
    {
        userimage: user1, 
        username: 'Radiant Echo',
        email: 'radiant.echo@example.com',
        phone: '(555) 123-4567',
        role: 'Administrator',
        logindate: 'June 17, 2024 7:11 AM'
    },
    {
        userimage: user2, 
        username: 'Mystic Rhythm',
        email: 'mystic.rhythm@example.com',
        phone: '(555) 678-9012',
        role: 'User',
        logindate: 'June 17, 2024 7:11 AM'
    },
    {
        userimage: user3, 
        username: 'Vivid Dreamers',
        email: 'vivid.dreamers@example.com',
        phone: '(555) 234-5678',
        role: 'User',
        logindate: 'June 17, 2024 7:11 AM'
    },{
        userimage: user4, 
        username: 'Azure Haze',
        email: 'azure.haze@example.com',
        phone: '(555) 678-9012',
        role: 'User',
        logindate: 'June 17, 2024 7:11 AM'
    },
    {
        userimage: user5, 
        username: 'Static Harmony',
        email: 'static.harmony@example.com',
        phone: '(555) 678-9012',
        role: 'User',
        logindate: 'June 17, 2024 7:11 AM'
    },
    {
        userimage: user1, 
        username: 'Echoing Silence',
        email: 'echoing.silence@example.com',
        phone: '(555) 123-4567',
        role: 'Administrator',
        logindate: 'June 17, 2024 7:11 AM'
    },
    {
        userimage: user2, 
        username: 'Velvet Mirage',
        email: 'velvet.mirage@example.com',
        phone: '(555) 678-9012',
        role: 'User',
        logindate: 'June 17, 2024 7:11 AM'
    },
    {
        userimage: user3, 
        username: 'Sonic Spectrum',
        email: 'sonic.spectrum@example.com',
        phone: '(555) 234-5678',
        role: 'User',
        logindate: 'June 17, 2024 7:11 AM'
    }
]

const Peopletable = () => {
    return (
        <div className="overflow-hidden w-full mt-2 overflow-x-auto">
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
            <Paginations />
        </div>
    )
}

export default Peopletable