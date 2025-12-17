import InputWithLabel from "./inputWithLabel";
import Spacer from "./spacer";

const ContactInformationForm = () => {
    return (
        <>
            <p className='text-sm leading-normal font-semibold text-heading-text dark:text-darkheading font-inter'>Contact Information</p>
            <p className='text-xs leading-normal text-heading-text font-inter dark:text-darkText'>{'Client Contact'}</p>
            <div className='mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5'>
                <div className='w-full'>
                    <InputWithLabel
                        type="text"
                        label={'Name (Name of the person who booked the band)'}
                        name={'clientContactName'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        type="tel"
                        label={'Phone Number'}
                        name={'clientContactPhoneNumber'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        type="email"
                        label={'Email Address'}
                        name={'clientContactEmail'}
                    />
                </div>
            </div>

            <Spacer className="mt-5" />

            <p className='text-xs leading-normal text-heading-text font-inter dark:text-darkText'>{'Venue Contact'}</p>
            <div className='mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5'>
                <div className='w-full'>
                    <InputWithLabel
                        type="text"
                        label={'Name (Venue manager or coordinator)'}
                        name={'venueContactName'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        type="tel"
                        label={'Phone Number'}
                        name={'venueContactPhoneNumber'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        type="email"
                        label={'Email Address'}
                        name={'venueContactEmail'}
                    />
                </div>
            </div>
        </>
    );
}

export default ContactInformationForm;
