import Table from "./table";

const Invitation = () => {


    return (
        <>
            <div className="sm:mt-4 pt-0.5 lg:pl-8 w-full max-w-full">
                <h2 className="text-heading-text dark:text-darkheading leading-normal xl:leading-[54px] text-2xl sm:text-3xl lg:text-4xl xl:text-[45px] font-bold font-manrope">
                    Send Invitation Links
                </h2>
                <p className="text-heading-text dark:text-darkheading font-light  sm:text-base text-sm sm:leading-normal leading-6 w-full max-w-[547px]">
                    Invite new members to your community by sending them a link to join. You can send multiple invitations at once.
                </p>

                <form className="mt-6 pt-0.5 w-full max-w-[904px]">
                    <label className="sm:text-base text-sm font-semibold sm:leading-normal leading-6 text-heading-text dark:text-darkheading">
                        Name
                    </label>
                    <div className="mt-1.5">
                        <input type="text" placeholder="Ben Ikwuagwu" className=" w-full text-ellipsis overflow-hidden whitespace-nowrap outline-none bg-transparent border border-solid border-[#F4F4F4] dark:border-lightGray dark:bg-dark-primary-50 rounded-[5px] py-[15px]  px-[17px] sm:text-base text-sm  font-light sm:leading-normal leading-6 text-lightGray" />
                    </div>
                    <div className="mt-5 flex sm:flex-nowrap flex-wrap w-full sm:gap-8 gap-3">
                        <div className="sm:w-3/6 w-full">
                            <label className="sm:text-base text-sm font-semibold sm:leading-normal leading-6  text-heading-text dark:text-darkheading">
                                Email
                            </label>
                            <div className="mt-1.5">
                                <input type="text" placeholder="ben.ikwuagwu@soundcheckscheduler.com" className=" w-full text-ellipsis overflow-hidden whitespace-nowrap outline-none bg-transparent border border-solid border-[#F4F4F4] dark:border-lightGray dark:bg-dark-primary-50 rounded-[5px] py-[15px]  px-[17px] sm:text-base text-sm  font-light sm:leading-normal leading-6 text-lightGray" />
                            </div>
                        </div>
                        <div className="sm:w-3/6 w-full">
                            <label className="sm:text-base text-sm font-semibold sm:leading-normal leading-6  text-heading-text dark:text-darkheading">
                                Phone Number
                            </label>
                            <div className="mt-1.5">
                                <input type="number" placeholder="e.g. 555-555-5555" className=" w-full text-ellipsis overflow-hidden whitespace-nowrap outline-none bg-transparent border border-solid border-[#F4F4F4] dark:border-lightGray dark:bg-dark-primary-50 rounded-[5px] py-[15px]  px-[17px] sm:text-base text-sm  font-light sm:leading-normal leading-6 text-lightGray" />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="my-6 bg-primary-100 dark:bg-dark-primary-50 rounded-md w-full text-[#FFFFFF] dark:text-darkheading h-11 md:h-[53px] px-2 mx-auto lg:mx-0 max-w-[192px] font-aptos flex justify-center items-center sm:text-base text-sm sm:leading-normal leading-6 font-semibold">
                        Send Invitation
                        <div className=" flex justify-center items-center border ml-[9px] border-solid border-primary-100 dark:border-dark-primary-100 w-7 h-7 bg-[#FFFFFF] dark:bg-dark-primary-100 rounded-full">
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 1C6.5 0.723857 6.27614 0.5 6 0.5L1.5 0.5C1.22386 0.5 1 0.723857 1 1C1 1.27614 1.22386 1.5 1.5 1.5L5.5 1.5L5.5 5.5C5.5 5.77614 5.72386 6 6 6C6.27614 6 6.5 5.77614 6.5 5.5L6.5 1ZM1.35355 6.35355L6.35355 1.35355L5.64645 0.646446L0.646447 5.64645L1.35355 6.35355Z" fill="#022452" className="dark:fill-darkText"></path></svg>
                        </div>
                    </button>
                </form>
                <div className="bg-lightLavender dark:bg-dark-primary-50 w-full rounded-[7px] pt-5 md:pt-[35px] px-3 md:px-6 pb-4 md:pb-[27px]">
                    <h2 className="xl:text-[22px] text-lg md:text-xl font-bold  text-heading-text dark:text-darkheading leading-normal md:leading-[26px]">
                        List of Invitations
                    </h2>
                    <Table />
                </div>
            </div>
        </>
    );
}

export default Invitation;