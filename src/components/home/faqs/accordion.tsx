'use client'
import React, { useRef, useState } from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

interface Props {
    item: {
        question: string;
        answer: string;
        id: number;
    }
    toggleHandler: () => void;
    toggle: boolean;
}

const FaqAccordion = ({ item, toggleHandler, toggle }: Props) => {
    const { question, answer } = item;
    const panelRef = useRef<any>(null);

    return (
        <Accordion>
            <AccordionItem className='border-b border-solid border-primary-50 dark:border-lightGray'>
                <AccordionItemHeading onClick={toggleHandler}>
                    <AccordionItemButton
                        className='my-6 accordion-toggle group inline-flex gap-2 justify-between leading-8 w-full transition duration-500'
                    >
                        <h5 className="md:text-[22px] text-base leading-1.2 text-white dark:text-darkheading font-semibold font-inter w-[calc(100%-12px)]">
                            {question}
                        </h5>
                        <svg
                            className={`transition-transform duration-700 ${toggle ? 'rotate-0' : 'rotate-180'}`}
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.219668 6.28033C0.512558 6.57322 0.987438 6.57322 1.28033 6.28033L5.75 1.8107L10.2197 6.28033C10.5126 6.57322 10.9874 6.57322 11.2803 6.28033C11.5732 5.98744 11.5732 5.51256 11.2803 5.2197L6.2803 0.219703C6.1397 0.0790029 5.9489 2.86102e-06 5.75 2.86102e-06C5.5511 2.86102e-06 5.3603 0.0790029 5.2197 0.219703L0.219668 5.2197C-0.0732225 5.51256 -0.0732225 5.98744 0.219668 6.28033Z"
                                fill="white"
                            />
                        </svg>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <div
                    // ref={panelRef}
                    className={`overflow-hidden transition-[max-height] duration-500 ease-linear ${toggle ? 'max-h-96' : 'max-h-0'}`}
                    // style={{
                    //     maxHeight: toggle ? `${panelRef?.current.scrollHeight}px` : '0px',
                    // }}
                >
                    <AccordionItemPanel>
                        <p className='pb-4 ms:text-base text-sm font-inter font-light text-white dark:text-darkText whitespace-pre-line'>
                            {answer}
                        </p>
                    </AccordionItemPanel>
                </div>
            </AccordionItem>
        </Accordion >
    );
};

export default FaqAccordion;