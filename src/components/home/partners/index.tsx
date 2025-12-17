import Image from "next/image"
import partnerImage from "/src/assets/images/sweet-matcha.svg"
import ScrollAnimation from "@/shared/scollanimation";

const MEETUPSECTION_ANIMATION_DELAY = ["!delay-100", "!delay-100"]

const Partners = () => {
    return (
        <section className="w-full bg-white dark:bg-dark-primary-100  overflow-hidden">
            <div className="max-w-[1440px] mx-auto md:pt-[85px] md:pb-[121px] sm:py-20 py-16 xl:px-28 lg:px-10 sm:px-8 px-6">
                <h1 className="text-heading-text dark:text-darkheading font-bold md:text-[45.04px] sm:text-4xl text-3xl  leading-1.2 text-center font-manrope">Meet our Partners</h1>
                <div className="mt-12 flex lg:flex-nowrap flex-wrap gap-9 items-center justify-between">
                    <div className="lg:w-1/2 w-full">
                        <ScrollAnimation className={`${MEETUPSECTION_ANIMATION_DELAY[0]}`}>
                            <div className="sm:h-[194px] h-[154px] rounded-large pt-7 pb-[38px] xl:pl-20 xl:pr-[53px] px-8 flex flex-col justify-center items-center dark:bg-dark-primary-50 shadow-customShadow dark:shadow-darkShadow">
                                <div>
                                    <Image src={partnerImage} alt="sweetmatcha" className="lg:mx-0 mx-auto dark:invert" />
                                </div>
                                <a href="void:javascript(0)" className="mt-1.5 flex gap-3 items-center justify-center font-aptos text-base font-semibold text-heading-text dark:text-darkText capitalize">
                                    <span className="">Learn More</span>
                                    <div className="w-7 h-7 rounded-full bg-light-purple dark:bg-dark-primary-100 flex justify-center items-center">
                                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.5 1C6.5 0.723857 6.27614 0.5 6 0.5L1.5 0.5C1.22386 0.5 1 0.723857 1 1C1 1.27614 1.22386 1.5 1.5 1.5L5.5 1.5L5.5 5.5C5.5 5.77614 5.72386 6 6 6C6.27614 6 6.5 5.77614 6.5 5.5L6.5 1ZM1.35355 6.35355L6.35355 1.35355L5.64645 0.646446L0.646447 5.64645L1.35355 6.35355Z" fill="#fff" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <ScrollAnimation className={`${MEETUPSECTION_ANIMATION_DELAY[1]}`}>
                            <div className="sm:h-[194px] h-[154px] rounded-large py-[38px] xl:pl-10 xl:pr-6 px-6 flex flex-col justify-center items-center dark:bg-dark-primary-50 shadow-customShadow dark:shadow-darkShadow">
                                <h2 className="xl:text-[53.38px] sm:text-5xl text-2xl leading-1.2 font-manrope font-medium text-heading-text dark:text-white lg:text-left text-center">
                                    THE NIGHTOWLS
                                </h2>
                                <a href="void:javascript(0)" className="mt-[26px] flex gap-3 items-center justify-center font-aptos text-base font-semibold text-heading-text dark:text-darkText capitalize">
                                    <span className="">Learn More</span>
                                    <div className="w-7 h-7 rounded-full bg-light-purple dark:bg-dark-primary-100 flex justify-center items-center">
                                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.5 1C6.5 0.723857 6.27614 0.5 6 0.5L1.5 0.5C1.22386 0.5 1 0.723857 1 1C1 1.27614 1.22386 1.5 1.5 1.5L5.5 1.5L5.5 5.5C5.5 5.77614 5.72386 6 6 6C6.27614 6 6.5 5.77614 6.5 5.5L6.5 1ZM1.35355 6.35355L6.35355 1.35355L5.64645 0.646446L0.646447 5.64645L1.35355 6.35355Z" fill="#fff" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners;