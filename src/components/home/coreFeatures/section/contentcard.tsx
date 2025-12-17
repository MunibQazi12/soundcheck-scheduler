import ScrollAnimation from '@/shared/scollanimation';
import Image from 'next/image';
import React from 'react';

interface Props {
    content: {
        icon: string;
        heading: string;
        subHeading?: string;
        description: any;
    };
    render?: number;
}

const ContentCard = ({ content, render = 0 }: Props) => {
    const { icon, heading, subHeading, description } = content;

    return (
        <div className="lg:max-w-[503px] w-full">
            <ScrollAnimation removeClass={render}>
                <div className="w-[53px] h-[53px] rounded-large bg-white dark:bg-dark-primary-50 flex justify-center items-center shadow-customShadow">
                    <Image src={icon} alt='dashboard' width={24} height={24} className='dark:invert brightness-50'/>
                </div>
            </ScrollAnimation>

            <div className="mt-5">
                <h3 className="sm:text-[32px] text-[28px] leading-1.2 font-bold text-heading-text dark:text-darkText font-manrope">{heading}</h3>
                <p className="sm:mt-6 mt-4 sm:text-lg text-base leading-1.2 text-heading-text dark:text-darkText ">
                    {subHeading}
                </p>
                <p className="mt-5 sm:text-base text-sm text-dark-gray dark:text-darkText whitespace-pre-line font-light">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ContentCard;
