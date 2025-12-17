'use client'
import Link from "next/link";
import EditProfileLogo from "./editProfileLogo";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ProfileContxt } from "@/store/profileContxt";

const PROFILE_MENU = [
    {
        label: 'Dashboard',
        link: '/leader-dashboard'
    },
    {
        label: 'Edit Profile',
        link: '/profile'
    },
    {
        label: 'Invite People to Your Community',
        link: '/profile/invites'
    },
    {
        label: 'Notifications',
        link: '/profile/notifications'
    },
    {
        label: 'Settings',
        link: '/profile/settings'
    }
]

const Sidebar = () => {

    const pathname = usePathname();
    const { profile } = useContext(ProfileContxt)

    return (
        <div className="block w-full relative max-w-[311px] bg-lightLavender dark:bg-dark-primary-50 px-[19px] pt-2.5 md:pt-16 pb-[42px] rounded-2.5xl h-full">
            <EditProfileLogo />
            <h2 className="mt-7 text-base sm:text-base lg:text-lg lg:text-[22px] font-bold font-nunito text-heading-text dark:text-darkheading leading-normal lg:leading-[26px] text-center">
                {profile?.name}
            </h2>
            <a href="#" className="text-sm sm:text-base font-light leading-normal sm:leading-5 font-nunito text-heading-text dark:text-darkheading flex justify-center mt-3.5">
                {`@${profile?.username}`}
            </a>

            <div className="mt-[27px] w-full flex justify-between flex-col">
                <div className="flex flex-col gap-8 md:gap-9 lg:gap-[50px] md:mb-9 mb-8  mt-6 md:mt-[47px] h-80 lg:h-[374px]">
                    {

                        PROFILE_MENU?.map((item, index) => {
                            return (
                                <Link key={`${item.link} ${index}`} href={item.link} className={`${pathname === item.link ? 'cursor-pointer w-full px-3.5 md:px-[18px] py-3.5 md:py-[17px] text-left h-auto bg-primary-100 dark:bg-dark-primary-100 rounded-[5px] text-sm sm:text-base xl:text-lg leading-normal lg:leading-[27px] font-semibold  text-[#FFFFFF] ' : 'text-sm sm:text-base xl:text-lg leading-normal pl-0 md:pl-[18px] lg:leading-[27px]  text-heading-text dark:text-darkheading font-semibold'}`}>
                                    {item.label}
                                </Link>
                            )
                        })
                    }
                </div>
                <Link href='/support' className="text-sm sm:text-base xl:text-lg leading-normal pl-0 md:pl-[18px] lg:leading-[27px] lg:absolute bottom-[42px]  text-heading-text dark:text-darkheading font-semibold">
                    Help and Support
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;