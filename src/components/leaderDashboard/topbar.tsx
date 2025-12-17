"use client"
import Image from "next/image";
import ProfileIamge from "/src/assets/images/editProfileImg.png"
import { useContext, useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { AppContxt } from "@/store/appContxt";
import { DashboardContxt } from "@/store/dashboardContxt";

const SearchBar = () => {

    return (
        <div className="max-w-[362px] w-full h-11 relative sm:ml-0 ml-auto">
            <input
                type="search"
                placeholder="Search"
                className="w-full h-full border border-lightLavender-gray dark:border-lightGray dark:bg-dark-primary-100 rounded-[5px] text-lightGray text-sm font-inter placeholder:italic py-3 pl-4 pr-12" />
            <div className="w-8 h-8 rounded-full bg-lightLavender flex justify-center items-center absolute top-1.5 right-3">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8807 13.305L10.6997 10.124C11.676 9.01064 12.2147 7.60191 12.2147 6.10736C12.2147 4.47594 11.5793 2.94235 10.4258 1.78887C9.27237 0.635388 7.73877 0 6.10736 0C4.47594 0 2.94235 0.635388 1.78887 1.78887C0.635388 2.94235 0 4.47594 0 6.10736C0 7.73877 0.635388 9.27237 1.78887 10.4258C2.94235 11.5793 4.47594 12.2147 6.10736 12.2147C7.60191 12.2147 9.01064 11.676 10.124 10.6997L13.305 13.8807C13.3845 13.9602 13.4887 14 13.5928 14C13.697 14 13.8012 13.9602 13.8807 13.8807C14.0398 13.7217 14.0398 13.464 13.8807 13.305ZM2.36461 9.8501C1.36501 8.8503 0.814314 7.52107 0.814314 6.10736C0.814314 4.69364 1.36501 3.36441 2.36461 2.36461C3.36441 1.36501 4.69364 0.814314 6.10736 0.814314C7.52107 0.814314 8.8503 1.36501 9.8501 2.36461C10.8497 3.36441 11.4004 4.69364 11.4004 6.10736C11.4004 7.52107 10.8497 8.8503 9.8501 9.8501C8.8503 10.8497 7.52107 11.4004 6.10736 11.4004C4.69364 11.4004 3.36441 10.8497 2.36461 9.8501Z" className="fill-[#323232] dark:fill-darkText" />
                </svg>
            </div>
        </div>
    )
}

const Topbar = () => {

    const { width } = useWindowSize();
    const { sidebarMenu, sidebarMenuHandler } = useContext(DashboardContxt);

    const [scrolltopdata, setscrolltopdata] = useState('');
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 10) {
                setscrolltopdata('');
            } else {
                setscrolltopdata('animationDashboardScrollNav');
            }
        });
    }, [])

    return (
        <nav className={`flex sm:flex-nowrap flex-wrap sm:gap-8 gap-3 justify-between items-center py-2.5 xl:pl-8 xl:pr-[30px] px-5 sm:h-[65px] border-b border-lightLavender-gray dark:border-lightGray dark:bg-dark-primary-50 ${scrolltopdata}`}>
            <div className="sm:max-w-[280px] max-w-[166px] w-full font-manrope">
                <p className="md:text-2xl sm:text-lg text-sm font-bold leading-1.2 text-heading-text dark:text-darkheading">Good Morning, Steve 👋</p>
            </div>
            <div className="md:max-w-[462px] sm:max-w-[280px] sm:w-full w-[70px] flex md:gap-6 gap-4 items-center">
                <div className="sm:block hidden w-full">
                    <SearchBar />
                </div>
                <div className="flex sm:gap-[18px] gap-3 items-center">
                    <div className="w-[46px] h-[46px] flex justify-center items-center">
                        <Image src={ProfileIamge} alt="ProfileIamge" />
                    </div>
                    {
                        width < 1024
                            ? <button
                                type="button"
                                onClick={() => sidebarMenuHandler(!sidebarMenu)}
                                className="sm:pl-3.5 ml-px"
                            >
                                <svg className={`${sidebarMenu ? 'rotate-180 transition-all' : 'rotate-0 transition-all'}`} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.219668 0.219668C0.512558 -0.0732225 0.987438 -0.0732225 1.28033 0.219668L5.75 4.6893L10.2197 0.219668C10.5126 -0.0732225 10.9874 -0.0732225 11.2803 0.219668C11.5732 0.512558 11.5732 0.987437 11.2803 1.2803L6.2803 6.2803C6.1397 6.421 5.9489 6.5 5.75 6.5C5.5511 6.5 5.3603 6.421 5.2197 6.2803L0.219668 1.2803C-0.0732225 0.987437 -0.0732225 0.512558 0.219668 0.219668Z" className="fill-[#323232] dark:fill-darkText" />
                                </svg>
                            </button>
                            : null
                    }
                </div>
            </div>
            {/* <div className="max-w-[362px] w-full h-11 ml-auto relative sm:hidden block ">
                <input
                    type="search"
                    placeholder="Search"
                    className="w-full h-full border border-lightLavender-gray dark:border-lightGray rounded-[5px] text-lightGray text-sm font-inter placeholder:italic py-3 pl-4 pr-12" />
                <div className="w-8 h-8 rounded-full bg-lightLavender flex justify-center items-center absolute top-1.5 right-3">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8807 13.305L10.6997 10.124C11.676 9.01064 12.2147 7.60191 12.2147 6.10736C12.2147 4.47594 11.5793 2.94235 10.4258 1.78887C9.27237 0.635388 7.73877 0 6.10736 0C4.47594 0 2.94235 0.635388 1.78887 1.78887C0.635388 2.94235 0 4.47594 0 6.10736C0 7.73877 0.635388 9.27237 1.78887 10.4258C2.94235 11.5793 4.47594 12.2147 6.10736 12.2147C7.60191 12.2147 9.01064 11.676 10.124 10.6997L13.305 13.8807C13.3845 13.9602 13.4887 14 13.5928 14C13.697 14 13.8012 13.9602 13.8807 13.8807C14.0398 13.7217 14.0398 13.464 13.8807 13.305ZM2.36461 9.8501C1.36501 8.8503 0.814314 7.52107 0.814314 6.10736C0.814314 4.69364 1.36501 3.36441 2.36461 2.36461C3.36441 1.36501 4.69364 0.814314 6.10736 0.814314C7.52107 0.814314 8.8503 1.36501 9.8501 2.36461C10.8497 3.36441 11.4004 4.69364 11.4004 6.10736C11.4004 7.52107 10.8497 8.8503 9.8501 9.8501C8.8503 10.8497 7.52107 11.4004 6.10736 11.4004C4.69364 11.4004 3.36441 10.8497 2.36461 9.8501Z" className="fill-[#323232] dark:fill-darkText" />
                    </svg>
                </div>
            </div> */}
            <div className="sm:hidden block w-full">
                <SearchBar />
            </div>
        </nav>
    );
}

export default Topbar;