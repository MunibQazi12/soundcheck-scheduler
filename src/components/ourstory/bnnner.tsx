interface Props {
    bannerhaeding: string;
}

const Banner = ({bannerhaeding} : Props) => {
    return (
        <section id="home" className="w-full bg-white dark:bg-dark-primary-100">
            <div className="w-full bg-primary-100 dark:bg-dark-primary-50 md:rounded-b-[80px] sm:rounded-b-[40px] rounded-b-2.5xl overflow-hidden">
                <div className="xl:px-28 lg:px-10 sm:px-8 px-6 bg-banner-layers bg-no-repeat bg-cover bg-bottom rotate-180 pb-[118px] pt-[188px]">
                    <h1 className="md:text-5xl sm:text-[40px] xs:text-3xl text-2xl !leading-1.2 text-white dark:text-darkheading text-center font-bold font-manrope rotate-180">{bannerhaeding}</h1>
                </div>
            </div>
        </section>
    )
}

export default Banner