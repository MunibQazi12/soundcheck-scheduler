import Image from "next/image"
import chatanswer from "../../../../assets/images/chatanswer.png"
import ConcertImage from "../../../../assets/images/concert-banner.png"
import CrowdImage from "../../../../assets/images/crowd-music-concert 1.png"
const Chattwo = () => {
    return (
        <div className="flex gap-2">
            <div className="w-9 h-9 rounded-full">
                <Image src={chatanswer} alt="chatanswer" />
            </div>
            <div className="w-[calc(100%-44px)]">
                <div className="flex xs:gap-3 gap-1 items-center xs:flex-nowrap flex-wrap">
                    <p className="text-xs leading-normal text-heading-text dark:text-darkheading font-semibold font-inter">Jordan Matthews</p>
                    <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">@jordanmatthews  13h</p>
                </div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter"><span className="text-heading-text dark:text-darkheading">New</span> @soundcheck!</p>
                <div className="my-2 w-full">
                    <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="mt-3">
                        <a href="#" className="text-xs leading-normal text-light-purple dark:text-darkText">Show more</a>
                        <div className="mt-2 w-full border border-lightLavender-gray dark:border-lightGray rounded-md flex items-center xs:flex-nowrap flex-wrap">
                            <div className="xs:max-w-[103px] w-full xs:h-auto h-[94px]">
                                <Image src={CrowdImage} alt="CrowdImage" className="h-full w-full xs:rounded-none rounded-md" />
                            </div>
                            <div className="xs:w-[calc(100%-103px)] w-full p-3">
                                <p className="text-[10px] leading-normal text-dark-gray dark:text-darkText font-inter">muusic.com</p>
                                <p className="mt-1 text-[10px] leading-normal text-heading-text dark:text-darkheading font-inter">Episode 373a: Live concert</p>
                                <p className="mt-1 text-[10px] leading-normal text-dark-gray dark:text-darkText font-inter">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt ut.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chattwo