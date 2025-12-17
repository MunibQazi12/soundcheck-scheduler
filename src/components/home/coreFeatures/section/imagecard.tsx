import ScrollAnimation from "@/shared/scollanimation"
import Image, { StaticImageData } from "next/image"

interface props {
    sectionImages: StaticImageData[];
    render?: number;
}
const ImageCard = ({ sectionImages, render = 0 }: props) => {

    return (
        <ScrollAnimation removeClass={render}>
            <div className="max-w-[640px] lg:mx-0 mx-auto w-full bg-[#A347FF1A] dark:bg-dark-primary-50 rounded-2.5xl sm:p-[18px] p-3 shadow-customShadow relative">
                {
                    sectionImages[0]
                        ? <Image src={sectionImages[0]} alt="dashboardImage" className="rounded-large" />
                        : null
                }
                {
                    sectionImages.length > 1
                        ? <div className="bg-[#A347FF1A] rounded-large p-2 shadow-customShadow absolute left-0 bottom-0">
                            <ScrollAnimation>
                                <Image src={sectionImages[1]} alt="dashboardImage" className="w-[153px]"/>
                            </ScrollAnimation>
                        </div>
                        : null
                }
            </div>
        </ScrollAnimation>
    )
}

export default ImageCard