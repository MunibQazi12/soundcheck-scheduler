'use client';
import Sidebar from "@/components/profile/sidebar";
import ProfileTopBar from "@/components/profile/topbar";
import useWindowSize from "@/hooks/useWindowSize";
import { AppContxt } from "@/store/appContxt";
import ProfileContextProvider from "@/store/profileContxt";
import { Fragment, useContext } from "react";

const ProfileLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const { width } = useWindowSize();
    const { profileMenu } = useContext(AppContxt)

    return (
        <Fragment>
            <ProfileContextProvider>
                <ProfileTopBar />
                <div className='max-w-[1440px] mx-auto flex justify-center pt-8 xl:pl-20 xl:pr-[86px] lg:px-10 sm:px-8 px-6 bg-white pb-8 md:pb-[54px] dark:bg-dark-primary-100'>
                    {
                        width > 1024
                            ? <div className="hidden lg:block w-full max-w-[311px]"><Sidebar /></div>
                            : null
                    }
                    {
                        width <= 1024 && profileMenu ? <div className='absolute lg:hidden block animateSlideBar bg-white left-[21px]'>
                            <Sidebar />
                        </div>
                            : null
                    }
                    {children}
                </div>
            </ProfileContextProvider>
        </Fragment>
    );
}

export default ProfileLayout;