import { DashboardContxt } from "@/store/dashboardContxt";
import { useContext, useState } from "react";
import InputWithLabel from "./inputWithLabel";
import Darkplusicon from '@/assets/svg/darkplusicon';

const PerformanceDetails = () => {

    const { eventType, formik } = useContext(DashboardContxt)
    const { values: { setList = [] } } = formik;

    const [newSong, setNewSong] = useState('');

    const handleAddSong = () => {
        if (newSong.trim()) {
            formik.setFieldValue('setList', [...formik.values.setList, newSong.trim()]);
            setNewSong('');
        }
    };

    const handleRemoveSong = (index: number) => {
        const updatedSetList = formik.values.setList.filter((_: any, i: number) => i !== index);
        formik.setFieldValue('setList', updatedSetList);
    };

    return (
        <>
            <p className='text-sm leading-normal font-semibold text-heading-text dark:text-darkheading font-inter'>{eventType === 'rehearsal' ? 'Rehearsal Details' : 'Performanse Details'}</p>
            <div className='mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5'>
                <div className='w-full'>
                    <label className={`text-xs leading-normal text-dark-gray dark:text-darkText`}>
                        {'Set List'}
                    </label>
                    <input
                        type='text'
                        value={newSong}
                        onChange={(e) => setNewSong(e.target.value)}
                        placeholder='Enter song name'
                        className='w-full h-11 px-2 bg-white dark:bg-dark-primary-50 rounded-[5px] text-xs leading-normal text-dark-gray dark:text-darkText'
                    />
                    <ul className='mt-2'>
                        {setList.map((song: any, index: number) => (
                            <li key={index} className='flex justify-between items-center'>
                                <span>{song}</span>
                                <button type="button" onClick={() => handleRemoveSong(index)} className="text-red-500">Remove</button>
                            </li>
                        ))}
                    </ul>
                    <button
                        type='button'
                        onClick={handleAddSong}
                        className='w-[125px] h-8 border border-primary-100 dark:border-lightGray rounded-md flex gap-1.5 items-center text-xs font-semibold text-heading-text dark:text-darkheading justify-center mt-2'>
                        <Darkplusicon /> Add Song
                    </button>
                </div>
                {!['rehearsal'].includes(eventType)
                    ? <div className='w-full'>
                        <InputWithLabel
                            label={'Special Requests'}
                            name={'specialRequests'}
                        />
                    </div>
                    : null}
                {
                    ['wedding'].includes(eventType)
                        ? <>
                            <div className='w-full'>
                                <InputWithLabel
                                    label={'First Dance Song'}
                                    name={'firstDanceSong'}
                                />
                            </div>
                            <div className='w-full'>
                                <InputWithLabel
                                    label={'Father-Daughter Dance Song'}
                                    name={'fatherDaughterDanceSong'}
                                />
                            </div>
                            <div className='w-full'>
                                <InputWithLabel
                                    label={'Mother-Son Dance Song'}
                                    name={'motherSonDanceSong'}
                                />
                            </div>
                            <div className='w-full'>
                                <InputWithLabel
                                    label={'Additional Dances/Songs'}
                                    name={'additionalDanceSongs'}
                                />
                            </div>
                        </>
                        : null
                }
                {
                    ['corporate', 'party', 'barClub'].includes(eventType)
                        ? <>
                            <div className='w-full'>
                                <InputWithLabel
                                    label={'Theme Songs'}
                                    name={'themeSongs'}
                                />
                            </div>
                            <div className='w-full'>
                                <InputWithLabel
                                    label={'Background Music'}
                                    name={'backgroundMusic'}
                                />
                            </div>
                        </>
                        : null
                }
                {
                    ['rehearsal'].includes(eventType)
                        ? <>
                            <div className='w-full'>
                                <InputWithLabel
                                    label={'Special Focus Areas'}
                                    name={'specialFocusAreas'}
                                />
                            </div>
                            <div className='w-full'>
                                <InputWithLabel
                                    label={'Notes'}
                                    name={'rehearsalPerformanceNotes'}
                                />
                            </div>
                        </>
                        : null
                }

            </div>
        </>
    );
}


export default PerformanceDetails;