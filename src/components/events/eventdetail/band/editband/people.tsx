import Image from "next/image"
import Darkplusicon from "@/assets/svg/darkplusicon"
import Swapicon from "@/assets/svg/swapicon"

interface Props {
    item:{
        icon: any;
        role: string;
        name: string;
    }
}

const BandPeople = ({item}: Props) => {
    const {icon, role, name} = item;
  return (
    <div className="flex xs:gap-5 gap-2 flex-wrap justify-between items-center">
        <div className="w-44 flex gap-2 items-center">
            <div className="w-9 h-9 rounded-full overflow-hidden">
                <Image src={icon} alt="people1"/>
            </div>
            <div className="w-[calc(100%-44px)]">
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading font-inter">{role}</p>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">{name}</p>
            </div>
        </div>
        <div className="w-[170px] flex items-center justify-between gap-2">
            <button 
                type="button"
                className="w-[34px] h-[34px] p-2 rounded-large bg-white dark:bg-dark-primary-100 flex justify-center items-center"
            ><Darkplusicon/></button>
            <button 
                type="button"
                className="w-[34px] h-[34px] p-2 rounded-large bg-white dark:bg-dark-primary-100 flex justify-center items-center"
            ><Swapicon/></button>
            <div className="w-[82px] h-[34px] p-2 rounded-large bg-white dark:bg-dark-primary-100 flex justify-center items-center text-xs leading-normal text-dark-gray dark:text-darkText font-inter">$3000.00</div>
        </div>
    </div>
  )
}

export default BandPeople