
interface Props {
    item: {
        heading: string;
        stat: string | number
    }
}
const InfoCard = ({ item }: Props) => {
    const { heading, stat } = item;
    return (
        <div className={`md:w-1/4 xs:w-[48%] flex flex-col w-full xl:py-3 py-2 xl:pl-3 lg:pl-1.5 xl:pr-1.5 lg:pr-1 px-2 h-[73px] rounded-large bg-primary-100 dark:bg-dark-primary-50`}>
            <p className="text-[10px] text-white dark:text-darkText leading-normal uppercase ">{heading}</p>
            <p className="text-[22px] leading-1.2 text-white dark:text-darkText font-bold font-manrope mt-auto">{stat}</p>
        </div>
    );
}

export default InfoCard;