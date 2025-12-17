import Image from "next/image"

interface Props {
    item: {
        icon: any;
        groupname: string;
    }
}

const Groups = ({item}: Props) => {
 const {icon, groupname} = item;
  return (
    <div className='w-full h-12 bg-white dark:bg-dark-primary-100 rounded-lg border border-lightLavender-gray dark:border-lightGray px-2.5 flex gap-4 items-center'>
        <div className='w-9 h-9 rounded-full'>
            <Image src={icon} alt="Group1" />
        </div>
        <p className="text-xs leading-normal font-semibold font-inter text-heading-text dark:text-darkText">{groupname}</p>
    </div>
  )
}

export default Groups