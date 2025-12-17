import Image from "next/image"

interface Props {
    item: {
        role?: string;
        name: string;
        icon?: any;
    }
}
const Banduser = ({item}: Props) => {
    const {role, name, icon} = item;
  return (
    <div className="w-[47%] flex gap-2 items-center">
        <div className="w-9 h-9 rounded-full border-2 border-[#802f40] overflow-hidden">
            <Image src={icon} alt="bassimage" width={36} height={36} className="w-full h-full"/>
        </div>
        <div className="w-[calc(100%-44px)]">
            <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading">{role}</p>
            <p className="text-xs leading-normal text-dark-gray dark:text-darkText">{name}</p>
        </div>
    </div>
  )
}

export default Banduser