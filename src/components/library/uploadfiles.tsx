import Uploadicon from "@/assets/svg/uploadicon"

const Uploadfiles = () => {
    return (
        <div className="py-4 px-6 bg-white dark:bg-dark-primary-50 rounded-md flex gap-5 justify-between items-center">
            <div className="max-w-md w-full">
                <p className="text-base font-semibold font-manrope text-heading-text dark:text-darkheading">Upload Media Files</p>
                <p className="mt-1 text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Upload your media files here. Supported formats: mp3, mp4, pdf, doc, etc.</p>
            </div>
            <button className="xs:w-[121px] w-1/2 h-9 rounded-md flex gap-2 items-center justify-center p-1 text-xs leading-normal bg-primary-100 dark:bg-dark-primary-100 text-white font-semibold font-inter">
                <Uploadicon className="fill-white"/> Upload File
            </button>
        </div>
    )
}

export default Uploadfiles