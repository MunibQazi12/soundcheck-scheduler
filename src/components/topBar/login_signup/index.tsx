import Link from "next/link";

const LoginSignup = () => {
    return (
        <div className="lg:w-[199px] w-40 md:flex hidden justify-between items-center text-white ">
            <Link href="/signin" className="lg:text-base text-sm leading-6 font-semibold headerLogin text-white dark:text-darkText hover:text-hover-color">Login</Link>
            <span className="h-[38px] w-[1px] bg-primary-50 dark:bg-lightGray"></span>
            <div className="flex gap-3 items-center cursor-pointer">
                <Link href={'/signup'}><span className="lg:text-base text-sm leading-6 font-semibold headerSignUp text-white hover:text-hover-color">Sign Up</span></Link>
                <Link href={'/profile'} className="w-7 h-7 rounded-full bg-light-purple dark:bg-dark-primary-100 flex justify-center items-center">
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 1C6.5 0.723857 6.27614 0.5 6 0.5L1.5 0.5C1.22386 0.5 1 0.723857 1 1C1 1.27614 1.22386 1.5 1.5 1.5L5.5 1.5L5.5 5.5C5.5 5.77614 5.72386 6 6 6C6.27614 6 6.5 5.77614 6.5 5.5L6.5 1ZM1.35355 6.35355L6.35355 1.35355L5.64645 0.646446L0.646447 5.64645L1.35355 6.35355Z" className="fill-[#022452] dark:fill-darkheading" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default LoginSignup