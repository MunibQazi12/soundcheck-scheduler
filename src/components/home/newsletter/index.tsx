import Sendbuttonicon from "@/assets/svg/sendbuttonicon"

const Newsletter = () => {
    return (
        <section className="bg-light-purple w-full dark:bg-dark-primary-50">
            <div className="max-w-[1440px] mx-auto xl:px-28 lg:px-10 sm:px-8 px-6 py-9 flex sm:flex-nowrap flex-wrap gap-5 sm:justify-between justify-center items-center">
                <div className="max-w-xl w-full">
                    <h3 className="xl:text-[40px] lg:text-[32px] md:text-2xl text-xl leading-normal text-white dark:text-darkheading font-semibold font-inter sm:text-left text-center">Subscribe to our newsletter.</h3>
                </div>
                <div className="max-w-[468px] w-full md:h-16 h-14 relative">
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full h-full py-5 sm:px-7 px-4 sm:pr-12 pr-10 bg-primary-100 dark:bg-dark-primary-100 rounded-large border border-primary-100 dark:border-lightGray text-white dark:text-darkText"
                    />
                    <button
                        type="button"
                        className="absolute sm:right-5 right-3 sm:top-5 top-4"
                    >
                        <Sendbuttonicon />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter