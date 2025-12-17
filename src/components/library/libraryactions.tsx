import Deleteicon from '@/assets/svg/deleteicon'
import Downloadicon from '@/assets/svg/downloadicon'
import Editicon from '@/assets/svg/editicon'
import Playicon from '@/assets/svg/playicon'

const Libraryactions = () => {
    return (
        <div className="w-32 flex justify-between items-center ml-auto">
            <button
                type="button"
                className="w-9 h-9 bg-[#F8F4FF] dark:bg-dark-primary-100 rounded-large flex justify-center items-center">
                <span className='mt-0.5 ml-1.5'><Playicon size='16px' color='#323232'/></span>
            </button>
            <button
                type="button"
                className="w-9 h-9 bg-[#F8F4FF] dark:bg-dark-primary-100 rounded-large flex justify-center items-center">
                <Downloadicon size='16px' color='#323232'/>
            </button>
            <button
                type="button"
                className="w-9 h-9 bg-[#F8F4FF] dark:bg-dark-primary-100 rounded-large flex justify-center items-center">
                <Deleteicon />
            </button>
        </div>
    )
}

export default Libraryactions