"use-client"
import Logo from "@/components/topBar/logo";
import SidebarItem from "./sidebarItem";
import LogoutIcon from "@/assets/svg/logouticon";
import DashboardIcon from "@/assets/svg/dashboardIcon"
import EventIcon from "@/assets/svg/eventIcon";
import Calendar from "@/assets/svg/calendar";
import PeopleIcon from "@/assets/svg/peopleicon";
import GroupsIcon from "@/assets/svg/groupsicon";
import MediaFilesIcon from "@/assets/svg/mediafilesicon";
import LibraryIcon from "@/assets/svg/libraryicon";
import useWindowSize from "@/hooks/useWindowSize";
import { useContext } from "react";
import { DashboardContxt } from "@/store/dashboardContxt";

const SIDEBAR_ITEMS = [
    { label: "Dashboard", path: "/leader-dashboard", icon: <DashboardIcon /> },
    { label: "Events", path: "/leader-dashboard/events", icon: <EventIcon /> },
    { label: "Calendar", path: "/leader-dashboard/calendar", icon: <Calendar /> },
    {
        label: "People", path: "/leader-dashboard/people", icon: <PeopleIcon />,
        subItems: [
            { label: "Groups", path: "/leader-dashboard/people/groups", icon: <GroupsIcon /> },
        ]
    },
    {
        label: "Media Files", path: "/leader-dashboard/media-files", icon: <MediaFilesIcon />,
        subItems: [
            { label: "Library", path: "/leader-dashboard/library", icon: <LibraryIcon /> },
        ]
    },
];

export const Sidebar = () => {

    return (
        <div className="w-[233px] h-full fixed left-0 top-0 bg-primary-100 dark:bg-dark-primary-50 bg-banner-layers bg-no-repeat bg-center animateSlideBar lg:z-0 z-10">
            <div className="h-[65px] flex justify-center items-center border-b border-primary-50 dark:border-lightGray">
                <div className="w-[174px] h-[29px]">
                    <Logo />
                </div>
            </div>
            <div className="h-[calc(100%-220px)] mt-[69px] mb-5 overflow-y-auto scrollbar-hide">
                <ul className="mb-5 list-none pl-7 pr-5 flex flex-col gap-2">
                    {
                        SIDEBAR_ITEMS?.map((item, index) => <SidebarItem key={index} item={item} />)
                    }

                </ul>
            </div>
            <div className="w-full mt-auto py-7 px-8 border-t border-primary-50 dark:border-lightGray absolute bottom-0 left-0">
                <a href="/signin" className="flex gap-3 items-center text-sm text-white font-inter">
                    <LogoutIcon />
                    <span>Log Out</span>
                </a>
            </div>
        </div>
    );
}

const SidebarComponent = () => {


    const { width } = useWindowSize();
    const { sidebarMenu } = useContext(DashboardContxt)

    return (
        <>
            {
                width > 1024
                    ? <div className="hidden lg:block w-full max-w-[233px]"><Sidebar /></div>
                    : null
            }
            {
                width < 1024 && sidebarMenu ? <div className='absolute lg:hidden block'>
                    <Sidebar />
                </div>
                    : null
            }
        </>
    );

}

export default SidebarComponent;