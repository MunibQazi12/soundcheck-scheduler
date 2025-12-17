import Calendar from '@/assets/svg/calendar'
import Clockicon from '@/assets/svg/clockicon'
import CloseIcon from '@/assets/svg/closeicon'
import Locationicon from '@/assets/svg/locationicon'
import Peoplesicon from '@/assets/svg/peoplesicon'
import Tagicon from '@/assets/svg/tagicon'

interface Props {
    modalHandler: () => void,
    event: any,
}

const EventdetailModal = ({ modalHandler, event }: Props) => {
    console.log ("event : ", event );
    return (
        <div className='max-w-[340px] w-full sm:pt-6 sm:pb-10 sm:px-7 p-5 bg-pastel-purple dark:bg-dark-primary-50 xs:border-none border border-lightLavender-gray xs:rounded-none rounded '>
            <button type="button"
                onClick={modalHandler}
                className='float-right'>
                <CloseIcon />
            </button>
            <p className='mt-2 text-base text-heading-text font-semibold font-inter'>Event Details</p>
            <p className='mt-6 text-xs leading-normal text-heading-text font-semibold pb-2.5 border-b border-lightLavender-gray'>Wedding @The Arlo</p>
            <div className='py-3 flex gap-2 items-center text-xs leading-normal text-dark-gray border-b border-lightLavender-gray'>
                <Calendar color='#323232' />
                <span>Friday, May 10th</span>
            </div>
            <div className='py-3 flex gap-2 items-center text-xs leading-normal text-dark-gray border-b border-lightLavender-gray'>
                <Clockicon />
                <span>8:00 am - 12:00 pm</span>
            </div>
            <div className='py-3 flex gap-2 items-center text-xs leading-normal text-dark-gray border-b border-lightLavender-gray'>
                <Peoplesicon />
                <span>Sweet Matcha Band</span>
            </div>
            <div className='py-3 flex gap-2 items-center text-xs leading-normal text-dark-gray border-b border-lightLavender-gray'>
                <Tagicon />
                <span>$5000.00</span>
            </div>
            <div className='py-3 flex gap-2 items-center text-xs leading-normal text-dark-gray border-b border-lightLavender-gray'>
                <Locationicon />
                <span>Location</span>
            </div>
        </div>
    )
}

export default EventdetailModal