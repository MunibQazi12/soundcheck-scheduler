import Darkplusicon from "@/assets/svg/darkplusicon"
import EventIcon from "@/assets/svg/eventIcon"

const Header = () => {
    return (
        <div className="mb-5">
            <div className="flex xs:flex-nowrap flex-wrap gap-5 items-center justify-between">
                <div className="xs:max-w-[220px] w-full flex gap-3 items-center">
                    <div className="w-9 h-9 bg-light-purple dark:bg-dark-primary-50 rounded-large flex justify-center items-center">
                        <EventIcon />
                    </div>
                    <p className=" text-sm md:text-base xl:text-lg leading-1.2 font-bold font-manrope text-heading-text dark:text-darkheading">Events Calendar</p>
                </div>
                <button
                    type="button"
                    className="xs:w-32 w-full h-[30px] md:h-8 lg:h-9 rounded-md bg-white text-xs md:text-sm xl:text-base flex justify-center items-center gap-1.5">
                    <Darkplusicon />
                    Add Event
                </button>
            </div>
            <p className="text-xs leading-normal text-dark-gray dark:text-darkText xs:pl-12 xs:mt-0 mt-2">Select a day to add a new event.</p>
        </div>
    )
}

export default Header