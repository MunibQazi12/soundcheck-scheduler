import Peoplesicon from "@/assets/svg/peoplesicon"
import PlusIcon from "@/assets/svg/plusicon"
import Uploadicon from "@/assets/svg/uploadicon"

const Peopleheader = () => {
    return (
        <div className="w-full flex gap-5 justify-between items-center xs:flex-nowrap flex-wrap">
            <div className="flex gap-3 items-center xs:w-fit w-full">
                <div className="w-9 h-9 rounded-large bg-[#FFE5A4] dark:bg-dark-primary-50 flex items-center justify-center">
                    <Peoplesicon />
                </div>
                <p className="text-lg leading-1.2 font-bold text-heading-text dark:text-darkheading font-manrope">People</p>
            </div>
            <div className="flex gap-2.5 items-center xs:w-fit w-full">
                <button className="xs:w-[121px] w-1/2 h-9 rounded-md flex gap-2 items-center justify-center p-1 text-xs leading-normal bg-white text-heading-text font-semibold font-inter">
                    <Uploadicon /> Upload File
                </button>
                <button className="xs:w-32 w-1/2 h-9 rounded-md flex gap-2 items-center justify-center p-1 text-xs leading-normal bg-primary-100 dark:bg-dark-primary-50 text-white dark:text-darkheading font-semibold font-inter">
                    <PlusIcon /> Add People
                </button>
            </div>
        </div>
    )
}

export default Peopleheader