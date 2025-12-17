import Image from "next/image"
import Chatquetioner from "../../../../assets/images/chatquestion.png"
import Uploadimageicon from "@/assets/svg/uploadimageicon"
import Gifuploadicon from "@/assets/svg/gificon"
import Bulleticon from "@/assets/svg/bulleticon"
import Uploademojiicon from "@/assets/svg/uploademoji"
import Calendar from "@/assets/svg/calendar"
import Locationicon from "@/assets/svg/locationicon"
import Calendaricon from "@/assets/svg/calendaricon"
import Chatone from "./chatone"
import Chattwo from "./chattwo"
const Chatroom = () => {
    return (
        <div className="bg-white dark:bg-dark-primary-50 pt-6 pb-9 xs:px-7 px-4 rounded-2xl">
            <p className="text-xs leading-1.2 font-inter font-semibold text-heading-text dark:text-darkheading">Chat Room</p>
            <div className="mt-5 h-[104px] border border-lightLavender-gray dark:border-lightGray rounded-[5px] pt-3 pl-3 pr-2 pb-2">
                <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full">
                        <Image src={Chatquetioner} alt="Chatquetioner" />
                    </div>
                    <div className="w-[calc(100%-32px)] h-11">
                        <div className="w-full h-full">
                            <input
                                placeholder="What is happening?"
                                className="w-full h-full rounded text-xs leading-normal text-dark-gray dark:text-darkText bg-white dark:bg-dark-primary-100 px-2"
                            />
                        </div>
                        <div className="mt-1 flex gap-2 justify-between items-center">
                            <div className="w-28 flex justify-between items-center">
                                <Uploadimageicon />
                                <Gifuploadicon />
                                <Bulleticon />
                                <Uploademojiicon />
                                <Calendaricon/>
                                <Locationicon />
                            </div>
                            <button className="p-1 text-xs leading-normal bg-primary-100 dark:bg-dark-primary-100 text-white data:text-darkText font-semibold w-[82px] h-[30px] rounded-md">Post</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6">
                <Chatone />
            </div>
            <div className="w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div className="pt-6">
                <Chattwo />
            </div>
        </div>
    )
}

export default Chatroom