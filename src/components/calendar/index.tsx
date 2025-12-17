'use client'
import Calendar from "./calendar";
import Header from "./header";


const Index = () => {

    return (
        <div className="py-7 xl:pl-8 xl:pr-[30px] px-5 w-full bg-pastel-purple dark:bg-[#25293c]">
            <Header />
            <div className="bg-white dark:bg-dark-primary-50 rounded-[7px] pt-[22px] pb-10 sm:px-9 px-4 relative events-calender">
                <Calendar/>
            </div>
        </div>
    );
}

export default Index;