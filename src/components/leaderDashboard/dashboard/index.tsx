'use Client'
import Events from "./events";
import NotificationsCenter from "./notificationsCenter";
import InfoCard from "./infoCard";
import Tasks from "./tasks";
import YellowStart from "@/assets/svg/yellowstart";
import Header from "./events/header";
import BellIcon from "@/assets/svg/bellicon";
import PlusIcon from "@/assets/svg/plusicon";

const INFO_CARDS = [
    { heading: 'total members', stat: '0', },
    { heading: 'past events', stat: '0', },
    { heading: 'events this month', stat: '0', },
    { heading: 'Confirmed events this month', stat: '$0', },
]

const Dashboard = () => {

    return (
        <section className="py-4 min-h-[93vh] xl:pl-8 xl:pr-[30px] px-5 w-full bg-pastel-purple dark:bg-dark-primary-100 bg-opacity-80 dark:opacity-90 flex lg:flex-nowrap flex-wrap xl:gap-8 gap-5">
            <div className="xl:w-[69%] lg:w-[65%] w-full relative">
                <div className="flex gap-4 items-center justify-between w-full md:flex-nowrap flex-wrap">
                    {
                        INFO_CARDS.map((item, index) => <InfoCard key={index} item={item} />)
                    }
                </div>
                <Header />
                <div className="overflow-hidden w-full mt-2 overflow-x-auto">
                    <table className="w-full border-separate border-spacing-y-2.5">
                        <thead>
                            <th className="text-left w-7">
                                <div className="w-[27px] h-[27px] border border-lightLavender-gray rounded-[5px] flex justify-center items-center">
                                    <YellowStart />
                                </div>
                            </th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading">Event</th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading">Time</th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading">Price</th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text w-[136px]"></th>
                        </thead>
                        <tbody>
                            <Events />
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="xl:w-[28%] lg:w-1/3 w-full flex lg:flex-col sm:flex-row flex-col lg:gap-2.5 gap-5">
                <div className="lg:w-full sm:w-1/2 w-full h-80 bg-white dark:bg-dark-primary-50 rounded-[15px] py-4 xl:px-[14px] px-2.5">
                    <div className="w-full bg-pale-purple dark:bg-dark-primary-100 rounded-large p-3 flex gap-3 items-center">
                        <div className="w-9 h-9 bg-light-purple dark:bg-dark-primary-50 rounded-large flex justify-center items-center">
                            <BellIcon />
                        </div>
                        <p className="text-lg leading-1.2 font-bold text-heading-text dark:text-darkheading font-manrope">Notification Center</p>
                    </div>
                    <NotificationsCenter />
                </div>
                <div className="lg:w-full sm:w-1/2 w-full h-80 bg-white dark:bg-dark-primary-50 rounded-[15px] py-4 xl:px-[14px] px-2.5">
                    <div className="w-full bg-pale-purple dark:bg-dark-primary-100 rounded-large py-3 px-[14px] flex gap-3 items-center justify-between">
                        <p className="text-lg leading-1.2 font-bold text-heading-text dark:text-darkheading font-manrope">Tasks</p>
                        <div className="flex gap-1.5 items-center">
                            <button className="py-2 px-[18px] rounded-large bg-white dark:bg-dark-primary-50 text-xs leading-normal font-inter text-dark-gray dark:text-darkText">All Tasks</button>
                            <button className="w-[34px] h-[34px] rounded-large bg-light-purple dark:bg-dark-primary-50 flex justify-center items-center">
                                <PlusIcon className="dark:stroke-white"/>
                            </button>
                        </div>
                    </div>
                    <Tasks />
                </div>
            </div>
        </section >
    );
}

export default Dashboard;