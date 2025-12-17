import Darkplusicon from '@/assets/svg/darkplusicon';
import RightupArrow from '@/assets/svg/rightuparrow';
import InputWithLabel from './shared/inputWithLabel';
import BasicInformationForm from './shared/basicInformationForm';
import Spacer from './shared/spacer';
import ContactInformationForm from './shared/contactInformationForm';
import LogisticsForm from './shared/logisticsForm';
import TechnicalRequirementsForm from './shared/technicalRequirementsForm';
import PaymentDetailsForm from './shared/paymentDetailsForm';
import EventScheduleForm from './shared/eventScheduleForm';
import CateringHospitalityForm from './shared/cateringHospitalityForm';
import EmergencyInformationForm from './shared/emergencyInformationForm';
import AdditionalForm from './shared/additionalNote';
import { useContext } from 'react';
import { DashboardContxt } from '@/store/dashboardContxt';
import PerformanceDetails from './shared/performanceDetails';

const EVENT_TYPE_HEADING: { [key: string]: string } = {
    wedding: 'WEDDING DETAILS',
    corporate: 'CORPORATE DETAILS',
    party: 'PARTY DETAILS',
    barClub: 'BAR/CLUB DETAILS',
    rehearsal: 'REHEARSAL DETAILS',
    startFromScratch: 'CUSTOM',
}

const PopupSetupForm = () => {

    const { eventType } = useContext(DashboardContxt);


    return (
        <>
            <p className="mt-[33px] mb-5 text-base text-heading-text dark:text-darkheading font-semibold font-inter">{EVENT_TYPE_HEADING[eventType]}</p>
            <div>
                <BasicInformationForm />
                <Spacer />
                <ContactInformationForm />
                <Spacer />
                <PerformanceDetails />
                <Spacer />
                <LogisticsForm />
                <Spacer />
                <TechnicalRequirementsForm />
                <Spacer />
                <PaymentDetailsForm />
                <Spacer />
                <EventScheduleForm />
                <Spacer />
                <CateringHospitalityForm />
                <Spacer />
                <EmergencyInformationForm />
                <Spacer />
                <AdditionalForm />
                <div className='w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray mt-[60px] mb-[50px]'></div>
                <div className=''>
                    <div className='flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5'>
                        <div className='lg:w-[65.66%] xs:w-[48%] w-full'>
                            <InputWithLabel
                                label={'Name the Event'}
                                name={'eventNameRecur'}
                            />
                        </div>
                        <div className='lg:w-[32.33%] xs:w-[48%] w-full'>
                            <InputWithLabel
                                label={'Plans Recur'}
                                name={'plansRecur'}
                            />
                        </div>
                        <button className='mt-2.5 w-[168px] h-8 p-2 flex gap-1 items-center justify-center border border-primary-100 dark:border-lightGray rounded-md text-xs text-heading-text dark:text-darkheading font-semibold'>
                            <Darkplusicon /> Add Additional Fields
                        </button>
                    </div>
                </div>
                <div className='mt-5 mb-8 flex justify-end'>
                    <button
                        type='submit'
                        className='w-28 h-8 p-2 rounded-md flex gap-1 items-center justify-center text-xs font-semibold text-white dark:text-darkheading bg-primary-100 dark:bg-dark-primary-50'>
                        Add Times <div className='w-[18px] h-[18px] flex justify-center items-center bg-white rounded-full dark:bg-dark-primary-100'><RightupArrow /></div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default PopupSetupForm;