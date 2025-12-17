import Image from "next/image"
import Editicon from "@/assets/svg/editicon"

interface Props {
    item: {
        groupicon: any;
        groupname: string;
    }
}

const Groupheader = ({item}: Props) => {
    const {groupicon, groupname} = item;
  return (
    <div className="w-full py-2.5 pl-2 pr-4 flex gap-5 justify-between items-center bg-light-purple dark:bg-dark-primary-50 rounded-large">
        <div className="w-fit flex gap-4 items-center">
            <div className="w-11 h-11 rounded-full overflow-hidden">
                <Image src={groupicon} alt="group" className="w-full h-full"/>
            </div>
            <p className="text-sm leading-normal font-semibold text-white dark:text-darkheading font-inter">{groupname}</p>
        </div>
        <button className="w-9 h-9 bg-white dark:bg-dark-primary-100 rounded-large flex justify-center items-center">
            <Editicon />
        </button>
    </div>
  )
}

export default Groupheader