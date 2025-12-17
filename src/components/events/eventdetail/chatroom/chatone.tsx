import Image from "next/image"
import chatanswer from "../../../../assets/images/chatanswer.png"
import ConcertImage from "../../../../assets/images/concert-banner.png"
const Chatone = () => {
    return (
        <div className="flex gap-2">
            <div className="w-9 h-9 rounded-full">
                <Image src={chatanswer} alt="chatanswer" />
            </div>
            <div className="w-[calc(100%-44px)]">
                <div className="flex xs:gap-3 gap-1 xs:flex-nowrap flex-wrap items-center">
                    <p className="text-xs leading-normal text-heading-text dark:text-darkheading font-semibold font-inter">Jordan Matthews</p>
                    <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">@jordanmatthews  13h</p>
                </div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter"><span className="text-heading-text dark:text-darkheading">New</span> @soundcheck!</p>
                <div className="my-2 w-full">
                    <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="mt-2">
                        <Image src={ConcertImage} alt="ConcertImage" className="rounded-[5px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatone