import { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import multiMonthPlugin from '@fullcalendar/multimonth'
import useWindowSize from "@/hooks/useWindowSize";
import EventdetailModal from './eventdetailmodal';

const Calendar = () => {

    const { width } = useWindowSize();
    const calendarRef = useRef<any>(null);
    const calendarApi = calendarRef?.current?.getApi();
    // events
    const [events, setEvents] = useState<any>([]);
    const [event, setEvent] = useState({});
    const [showViewModal, setShowViewModal] = useState(false);

    const headerCustomButtons = {
        timeGridDay: {
            text: 'Day',
            click: () => {
                calendarApi.changeView('timeGridDay')
            }
        },
        timeGridWeek: {
            text: 'Week',
            click: () => {
                calendarApi.changeView('timeGridWeek')
            }
        },
        dayGridMonth: {
            text: 'Month',
            click: () => {
                calendarApi.changeView('dayGridMonth')
            }
        },
        multiMonthYear: {
            text: 'Year',
            click: () => {
                calendarApi.changeView('multiMonthYear')
            }
        }
    }

    const headerToolbarButtons = {
        start: '',
        center: 'timeGridDay,timeGridWeek,dayGridMonth,multiMonthYear',
        end: ''
    }

    const getTime = (date: any, hour12 = false) => date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12 })
    const renderLabelContent = (eventInfo: any) => <p>{getTime(eventInfo.date, true)}</p>

    const renderEventContent = (eventInfo: any) => {
        const { event } = eventInfo;
        return (
            <div className="p-2 bg-light-purple shadow-customShadow w-full h-full flex justify-center items-center overflow-hidden">
                <h4 className="text-[10px] leading-normal font-semibold text-white break-all">{event.title}</h4>
            </div>
        );
    };

    const eventDropHandler = (event: any) => {
        setEvents((preState: any) =>
            preState.map((item: any) => (
                (item.id).toLocaleString() === (event.id).toLocaleString() ?
                    ({
                        ...item,
                        start: event.start,
                        end: event.start,
                    }) :
                    item
            )
            )
        )
    }

    const eventClickHandler = (event: any) => {
        setEvent(event);
        setShowViewModal(!showViewModal);
    }

    useEffect(() => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const currentDay = currentDate.getDate();

        const dummyEvents = [
            {
                id: 1,
                title: "Wedding @The Arlo",
                start: new Date(currentYear, currentMonth, currentDay, 8, 0),
                end: new Date(currentYear, currentMonth, currentDay, 12, 0),
                details: "Sweet Matcha Band",
                cost: "$5000.00",
                location: "Location 1"
            },
            {
                id: 2,
                title: "Wedding @The Arlo",
                start: new Date(currentYear, currentMonth, currentDay + 4, 8, 0),
                end: new Date(currentYear, currentMonth, currentDay + 4, 12, 0),
                details: "Sweet Matcha Band",
                cost: "$5000.00",
                location: "Location 2"
            },
            {
                id: 3,
                title: "Wedding @The Arlo",
                start: new Date(currentYear, currentMonth, currentDay - 2, 8, 0),
                end: new Date(currentYear, currentMonth, currentDay - 2, 12, 0),
                details: "Sweet Matcha Band",
                cost: "$5000.00",
                location: "Location 3"
            },
            {
                id: 4,
                title: "Wedding @The Arlo",
                start: new Date(currentYear, currentMonth, currentDay + 2, 8, 0),
                end: new Date(currentYear, currentMonth, currentDay + 2, 12, 0),
                details: "Sweet Matcha Band",
                cost: "$5000.00",
                location: "Location 4"
            }
        ];
        setEvents(dummyEvents);
    }, []);

    return (
        <>
            <FullCalendar
                ref={calendarRef}
                droppable={true}
                events={events}
                eventMaxStack={2}
                dayMaxEvents={2}
                editable={true}
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin, multiMonthPlugin]}
                initialView="dayGridMonth"
                customButtons={headerCustomButtons}
                headerToolbar={headerToolbarButtons}
                eventContent={(eventInfo) => renderEventContent(eventInfo)}
                slotLabelContent={() => renderLabelContent}
                eventDrop={(event) => eventDropHandler(event.event)}
                eventClick={(event) => eventClickHandler(event.event)}
                dayHeaderContent={(data) => {
                    if (data?.view?.type === 'timeGridDay') {
                        return <div className='flex flex-col w-full justify-left px-[63px] items-baseline'>
                            <p className='text-[10px] text-dark-gray text-center font-inter leading-[15px]'>{data.text.slice(0, 3)}</p>
                            <p className='text-heading-text sm:text-base text-xs font-semibold font-inter leading-5'>{`0${data.dow}`}</p>
                        </div>
                    }
                    if (data?.view?.type === 'timeGridWeek') {
                        return <div className='flex flex-col w-full justify-center items-center'>
                            <p className='text-[10px] text-center font-inter leading-[15px] text-dark-gray'>{width > 640 ? data?.text?.split(" ")[0] : data?.text?.split(" ")[0]?.slice(0, 1)}</p>
                            <p className="text-heading-text sm:text-base text-xs font-semibold font-inter leading-5">{`0${data.dow}`}</p>
                        </div>
                    }
                    if (data?.view?.type === "multiMonthYear") {
                        return <div className='flex flex-col w-full justify-center items-center'>
                            <p className='text-[10px] text-center font-inter leading-[15px]'>{data?.text?.slice(0, 1)}</p>
                        </div>
                    }
                    return data.text
                }}
            />
            {
                showViewModal
                    ? <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 z-10'>
                        <EventdetailModal event={event} modalHandler={() => {
                            setEvent({})
                            setShowViewModal(false)
                        }} />
                    </div>
                    : null
            }
        </>
    )
}

export default Calendar;