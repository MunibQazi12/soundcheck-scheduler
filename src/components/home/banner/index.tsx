import Image from "next/image"
import ConcertBanner from "/src/assets/images/concert-banner.png"
import TranslateScaleAnimation from "@/shared/translateScaleAnimation"

const Banner = () => {
    return (
        <section className="w-full bg-primary-100 dark:bg-dark-primary-50">
            <div className="w-full">
                <Image src={ConcertBanner} alt="concert" className="w-full object-cover" />
            </div>
            <div className="lg:py-48 py-32 bg-banner-layers bg-opacity-30 bg-no-repeat bg-cover lg:bg-position">
                <div className="max-w-3xl mx-auto px-3">
                    <TranslateScaleAnimation>
                        <h1 className="lg:text-[70.7px] md:text-6xl sm:text-5xl text-3xl  leading-1.2 text-white dark:text-darkheading text-center font-bold font-manrope">
                            One Stop Shop for all Music Professionals
                        </h1>
                    </TranslateScaleAnimation>
                </div>
            </div>
        </section>
    )
}

export default Banner;