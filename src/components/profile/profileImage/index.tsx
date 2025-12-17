'use client';
import Image from "next/image";
import UserAvatar from "/src/assets/images/profileImg.png";
import { useContext } from "react";
import { AppContxt } from "@/store/appContxt";
import useWindowSize from "@/hooks/useWindowSize";

const Avatar = () => {

    const { profileMenu, profileMenuHandler } = useContext(AppContxt);
    const { width } = useWindowSize();
    return (
        <div className="flex items-center">
            <a href="#">
                <Image src={UserAvatar} alt={"Logo"} height={"49"} width={"49"} className="w-[49px] h-[49px]" />
            </a>
            {
                width <= 1024
                    ? <button
                        onClick={() => profileMenuHandler(!profileMenu)}
                        type="button"
                        className="pl-3.5 ml-px"
                    >
                        <svg className={`${profileMenu ? 'rotate-180' : ''}`} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.219668 0.219668C0.512558 -0.0732225 0.987438 -0.0732225 1.28033 0.219668L5.75 4.6893L10.2197 0.219668C10.5126 -0.0732225 10.9874 -0.0732225 11.2803 0.219668C11.5732 0.512558 11.5732 0.987437 11.2803 1.2803L6.2803 6.2803C6.1397 6.421 5.9489 6.5 5.75 6.5C5.5511 6.5 5.3603 6.421 5.2197 6.2803L0.219668 1.2803C-0.0732225 0.987437 -0.0732225 0.512558 0.219668 0.219668Z" fill="white" />
                        </svg>
                    </button>
                    : null
            }

        </div >
    )
}

export default Avatar