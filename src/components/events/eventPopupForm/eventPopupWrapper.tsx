import CloseIcon from '@/assets/svg/closeicon'
import EventTypes from './eventTypes';
import { ReactNode, useContext } from 'react';
import { DashboardContxt } from '@/store/dashboardContxt';

interface Props {
    children: ReactNode;
    modalHandler: () => void
}

const EventPopupWrapper = ({ children, modalHandler }: Props) => {

    const { progress } = useContext(DashboardContxt)

    return (
        <div className="max-w-[945px] lightpurplescrollbar w-full md:h-[70vh] overflow-auto mx-auto border border-lightLavender-gray dark:border-lightGray md:rounded-2.5xl bg-pastel-purple dark:bg-dark-primary-100 pb-6 lg:pl-10 lg:pr-11 px-6 absolute left-0 right-0 top-0 md:top-[10vh]">
            <div className='pt-6 sticky top-0 bg-pastel-purple dark:bg-dark-primary-100'>
                <button
                    type="button"
                    onClick={modalHandler}
                    className='float-right cursor-pointer'>
                    <CloseIcon />
                </button>
                <div className="sm:mt-3 mt-8">

                    <div className="max-w-[400px] w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray mx-auto flex gap-8 justify-between items-center">
                        {
                            [0, 1, 2].map((item, index) => {
                                return (
                                    <div key={index} className={`w-5 h-5 rounded-full border-4 border-lightLavender-gray dark:border-dark-primary-50 ${item === progress ? "bg-light-purple dark:bg-pastel-purple" : "bg-pastel-purple dark:bg-dark-primary-100"} cursor-pointer`} />
                                );
                            })
                        }
                    </div>
                    <div className='sm:mt-[60px] mt-8 overflow-hidden'>
                        <div>
                            <EventTypes />

                        </div>
                    </div>
                </div>
            </div>
            {children}

        </div>
    );
}

export default EventPopupWrapper;