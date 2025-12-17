
const Paginations = () => {
    return (
        <div className="flex items-center justify-between py-8">
            <div className="flex flex-1 justify-between sm:hidden">
                <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">

                <div>
                    <nav className="isolate inline-flex items-center gap-1 rounded-md" aria-label="Pagination">
                        <a href="#" className="relative inline-flex items-center px-1">
                            <span className="sr-only">Previous</span>
                            <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.778 7.31706C3.95421 7.14085 3.95421 6.85514 3.778 6.67893L1.08893 3.98984L3.778 1.30072C3.95421 1.12451 3.95421 0.838851 3.778 0.662632C3.60179 0.486414 3.31608 0.486414 3.13989 0.662632L0.13173 3.67079C0.0470802 3.75538 -0.000448786 3.87017 -0.000448791 3.98984C-0.000448796 4.1095 0.0470802 4.22429 0.13173 4.30888L3.13989 7.31706C3.31608 7.49327 3.60179 7.49327 3.778 7.31706Z" fill="#323232" className="dark:fill-darkheading" />
                            </svg>
                        </a>
                        <a href="#" aria-current="page" className="relative z-10 inline-flex items-center justify-center bg-primary-100 dark:bg-dark-primary-50 w-7 h-7 rounded-md  p-2 text-sm font-inter text-white focus:z-20">1</a>
                        <a href="#" className="relative z-10 inline-flex items-center justify-center bg-white dark:bg-dark-primary-50 w-7 h-7 rounded-md  p-2 text-sm font-inter text-dark-gray dark:text-darkText focus:z-20">2</a>
                        <a href="#" className="relative z-10 inline-flex items-center justify-center bg-white dark:bg-dark-primary-50 w-7 h-7 rounded-md  p-2 text-sm font-inter text-dark-gray dark:text-darkText focus:z-20">3</a>
                        <div className="w-7 h-7 flex gap-1 items-center justify-center">
                            <span className="w-1 h-1 rounded-full bg-[#EAE2F8] dark:bg-dark-primary-50"></span>
                            <span className="w-1 h-1 rounded-full bg-[#EAE2F8] dark:bg-dark-primary-50"></span>
                            <span className="w-1 h-1 rounded-full bg-[#EAE2F8] dark:bg-dark-primary-50"></span>
                        </div>
                        <a href="#" className="relative z-10 inline-flex items-center justify-center bg-white dark:bg-dark-primary-50 w-7 h-7 rounded-md  p-2 text-sm font-inter text-dark-gray dark:text-darkText focus:z-20">7</a>
                        <a href="#" className="relative inline-flex items-center px-1">
                            <span className="sr-only">Next</span>
                            <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.132159 7.31706C-0.044053 7.14085 -0.044053 6.85514 0.132159 6.67893L2.82123 3.98984L0.132159 1.30072C-0.0440533 1.12451 -0.0440533 0.838851 0.132159 0.662632C0.308371 0.486414 0.594073 0.486414 0.770267 0.662632L3.77843 3.67079C3.86308 3.75538 3.91061 3.87017 3.91061 3.98984C3.91061 4.1095 3.86308 4.22429 3.77843 4.30888L0.770268 7.31706C0.594074 7.49327 0.308371 7.49327 0.132159 7.31706Z" fill="#323232" className="dark:fill-darkheading" />
                            </svg>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Paginations