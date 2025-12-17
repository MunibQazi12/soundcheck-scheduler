import Image from 'next/image'
import CEO from "../../../assets/images/ceo.png"

interface Props {
    titleClassName?: string;

    item: {
        cardImage: any;
        name: string;
        designation: string;
    }
}

const Card = ({item , titleClassName}: Props) => {
    const {cardImage, name, designation} = item;
  return (
    <div className='w-fit mx-auto'>
        <div className='rounded-large'>
            <Image src={cardImage} alt='CEO' />
        </div>
        <h4 className={` ${titleClassName} sm:mt-6 mt-4 leading-1.2 text-heading-text dark:text-darkheading font-bold font-manrope`}>{name}</h4>
        <p className='sm:mt-3 mt-1.5 lg:text-base text-sm text-dark-gray dark:text-darkText font-inter font-light'>{designation}</p>
    </div>
  )
}

export default Card