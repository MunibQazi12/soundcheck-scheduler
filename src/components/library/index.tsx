import LibraryIcon from "@/assets/svg/libraryicon"
import Uploadfiles from "./uploadfiles"
import FilterIcon from "@/assets/svg/filtericon"
import Group1 from "/src/assets/images/mediagroup.png"
import audiomp3 from "/src/assets/images/audiomp3.png"
import audiomp4 from "/src/assets/images/audiomp4.png"
import pdf from "/src/assets/images/pdf.png"
import textfile from "/src/assets/images/textfile.png"
import Groupheader from "../people/groups/groupheader"
import Userdata from "../people/usertable/userdata"

const GROUP_HEADER = [
    { groupicon: Group1, groupname: 'Perfect by Ed Sheeran' },
    // {groupicon: Group2, groupname: 'Mystic Rhythm'}
]

const PEOPLE_DATA = [
    {
        userimage: audiomp3,
        username: 'File 1.mp3',
        email: 'June 17, 2024 7:11 AM',
        phone: '3MB',
    },
    {
        userimage: audiomp4,
        username: 'File 1.mp4',
        email: 'June 17, 2024 7:11 AM',
        phone: '3MB',
    },
    {
        userimage: pdf,
        username: 'File 1.pdf',
        email: 'June 17, 2024 7:11 AM',
        phone: '3MB',
    }, {
        userimage: textfile,
        username: 'File 1.mp3',
        email: 'June 17, 2024 7:11 AM',
        phone: '3MB',
    }
]

const Library = () => {
    return (
        <section className='pt-5 pb-14 xl:px-8 px-5 bg-pastel-purple dark:bg-dark-primary-100'>
            <Uploadfiles />
            <div className="mt-[26px] w-full flex gap-5 justify-between items-center xs:flex-nowrap flex-wrap">
                <div className="flex gap-3 items-center xs:w-fit w-full">
                    <div className="w-9 h-9 rounded-large bg-[#FFE5A4] dark:bg-dark-primary-50 flex items-center justify-center">
                        <LibraryIcon className="stroke-[#323232]" />
                    </div>
                    <p className="text-lg leading-1.2 font-bold text-heading-text dark:text-darkheading font-manrope">Media Library</p>
                </div>
                <div className="flex gap-2.5 items-center w-fit">
                    <button className="w-[100px] h-9 rounded-md flex gap-2 items-center justify-center p-1 text-xs leading-normal bg-white text-heading-text font-semibold font-inter">
                        <FilterIcon /> Filter
                    </button>
                </div>
            </div>
            <div className="mt-5">
                {
                    GROUP_HEADER.map((item, index) => <Groupheader key={index} item={item} />)
                }
                <div className="overflow-hidden w-full overflow-x-auto">
                    <table className="w-full border-separate border-spacing-y-2.5">
                        <thead>
                            <th className="px-2 text-left w-9">
                                <div className="w-9 h-9 flex justify-center items-center">
                                </div>
                            </th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">Name</th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">Upload Date</th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">SIZE</th>
                            <th className="px-2 text-left text-[10px] leading-normal font-inter text-heading-text w-[124px]"></th>
                        </thead>
                        <tbody>
                            {
                                PEOPLE_DATA.map((item, index) => <Userdata key={index} item={item} tableName={"library"}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-7">
                {
                    GROUP_HEADER.map((item, index) => <Groupheader key={index} item={item} />)
                }
                <div className="overflow-hidden w-full overflow-x-auto">
                    <table className="w-full border-separate border-spacing-y-2.5">
                        <thead>
                            <th className="px-2 text-left w-9">
                                <div className="w-9 h-9 flex justify-center items-center">
                                </div>
                            </th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">Name</th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">Upload Date</th>
                            <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading uppercase">SIZE</th>
                            <th className="px-2 text-left text-[10px] leading-normal font-inter text-heading-text w-[124px]"></th>
                        </thead>
                        <tbody>
                            {
                                PEOPLE_DATA.map((item, index) => <Userdata key={index} item={item} tableName={"library"}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Library