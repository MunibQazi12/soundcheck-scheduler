import RightupArrow from "@/assets/svg/rightuparrow";
import YellowStart from "@/assets/svg/yellowstart";
import { EVENT_TYPE } from "@/dump/dashboard";
import { EventType } from "@/types/event";
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advancedFormat);

interface Props {
    event: EventType
}

const Event = ({ event }: Props) => {

    const { eventName = "", eventType = "", date = new Date(), startTime, endTime, location } = event;

    return (
        <tr className="h-[60px] bg-white dark:bg-dark-primary-50">
            <td className="rounded-s-large">
                <div className="w-full h-full flex justify-center items-center"><YellowStart /></div>
            </td>
            <td className="px-3">
                <p className="text-sm leading-normal font-semibold text-heading-text dark:text-darkheading font-inter whitespace-nowrap">{`${EVENT_TYPE[eventType]} @${eventName}`}</p>
                <p className="text-sm leading-normal text-dark-gray dark:text-darkText font-inter whitespace-nowrap">{location}</p>
            </td>
            <td className="px-3">
                <p className="text-sm leading-normal font-semibold text-heading-text dark:text-darkheading font-inter whitespace-nowrap">{dayjs(date).format('dddd, MMMM Do')}</p>
                <p className="text-sm leading-normal text-dark-gray dark:text-darkText font-inter whitespace-nowrap">{`${startTime} am - ${endTime} pm`}</p>
            </td>
            <td className="px-3">
            </td>
            <td className="px-3 rounded-e-large">
                <button type="button" className="w-28 h-8 bg-lightLavender dark:bg-dark-primary-100 rounded-md flex gap-1 justify-center items-center text-xs leading-normal font-semibold text-heading-text dark:text-darkText font-aptos">
                    View Details <div className="w-[18px] h-[18px] bg-white rounded-full flex justify-center items-center">
                        <RightupArrow />
                    </div>
                </button>
            </td>
        </tr>
    );
}

export default Event;