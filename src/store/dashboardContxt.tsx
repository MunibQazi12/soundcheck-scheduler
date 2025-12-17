'use client';
import { EventType } from "@/types/event";
import { ReactNode, createContext, useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    eventName: yup.string().required('Event name is required'),
    date: yup.string().required('Date is required'),
    time: yup.string().required('Time is required').matches(/^\d{2}:\d{2}$/, 'Time must be in HH:MM format'),
    startTime: yup.string().required('Start time is required').matches(/^\d{2}:\d{2}$/, 'Start time must be in HH:MM format'),
    endTime: yup.string().required('End time is required').matches(/^\d{2}:\d{2}$/, 'End time must be in HH:MM format'),
    location: yup.string().required('Location is required'),
    gpsCoordinates: yup.string().required('GPS Coordinates are required'),

    clientContactName: yup.string().required('Client contact name is required'),
    clientContactPhoneNumber: yup.string().required('Client contact phone number is required').matches(/^\+?[0-9]{7,15}$/, 'Phone number must be valid'),
    clientContactEmail: yup.string().required('Client contact email is required').email('Must be a valid email'),
    venueContactName: yup.string().required('Venue contact name is required'),
    venueContactPhoneNumber: yup.string().required('Venue contact phone number is required').matches(/^\+?[0-9]{7,15}$/, 'Phone number must be valid'),
    venueContactEmail: yup.string().required('Venue contact email is required').email('Must be a valid email'),

    setList: yup.array().of(yup.string().url('Each song must be a valid URL')).optional(),
    specialRequests: yup.string(),
    // firstDanceSong: yup.string(),
    // fatherDaughterDanceSong: yup.string(),
    // motherSonDanceSong: yup.string(),
    // additionalDanceSongs: yup.array().of(yup.string()),

    arrivalTime: yup.string().required('Arrival time is required').matches(/^\d{2}:\d{2}$/, 'Arrival time must be in HH:MM format'),
    soundCheckTime: yup.string().required('Sound check time is required').matches(/^\d{2}:\d{2}$/, 'Sound check time must be in HH:MM format'),
    loadInInstructions: yup.string(),
    parkingInformation: yup.string(),

    stageSize: yup.string().required('Stage size is required'),
    powerSupply: yup.string().required('Power supply is required'),
    equipmentProvided: yup.string(),
    equipmentNeeded: yup.string(),
    soundSystem: yup.string(),

    fee: yup.string().required('Fee is required'),
    deposit: yup.string().required('Deposit is required'),
    balanceDue: yup.string().required('Balance due is required'),
    paymentMethod: yup.string().required('Payment method is required'),
    paymentSchedule: yup.string().required('Payment schedule is required'),

    ceremonyTime: yup.string().required('Ceremony time is required').matches(/^\d{2}:\d{2}$/, 'Ceremony time must be in HH:MM format'),
    cocktailHour: yup.string().required('Cocktail hour is required').matches(/^\d{2}:\d{2}$/, 'Cocktail hour must be in HH:MM format'),
    dinnerTime: yup.string().required('Dinner time is required').matches(/^\d{2}:\d{2}$/, 'Dinner time must be in HH:MM format'),
    speechesToasts: yup.string().required('Speeches/toasts time is required').matches(/^\d{2}:\d{2}$/, 'Speeches/toasts time must be in HH:MM format'),
    receptionTimeline: yup.string(),

    mealsProvided: yup.string(),
    breaks: yup.string(),
    greenRoom: yup.string(),

    emergencyContacts: yup.string(),
    venueEmergencyProcedures: yup.string(),

    notes: yup.string(),

    eventNameRecur: yup.string().required('Event name is required'),
    plansRecur: yup.string().required('Plans recur is required'),
})

export interface DashboardContxtType {
    formik: any;
    eventType: string;
    eventHandler: (event: EventType) => void;
    eventTypeHandler: (eventType: string) => void;
    progress: number;
    progressHandler: (progress: number) => void;
    event: EventType;
    eventDetails: EventType | null;
    events: EventType[];
    getCurrentEventDetails: () => void;
    getNextEventDetails: () => void;
    getPreviousEventDetails: () => void;
    eventModal: boolean;
    eventModalHandler: (value?: any) => void;
    toggleEventModal: () => void;
    sidebarMenu: boolean;
    sidebarMenuHandler: (value: boolean) => void;
}

export const DEFAULT_EVENT_DETAILS: EventType = {
    id: 1,
    eventType: 'wedding',
    eventName: 'The Arlo',
    date: `${new Date()}`,
    time: '12:12',
    startTime: '12:12',
    endTime: '12:12',
    location: 'Lahore',
    gpsCoordinates: '31.5204° N, 74.3587° E',

    clientContactName: 'Test',
    clientContactPhoneNumber: '0300000000000',
    clientContactEmail: 'test@test.com',
    venueContactName: 'Test',
    venueContactPhoneNumber: '0300000000000',
    venueContactEmail: 'test@test.com',

    // performation details 
    setList: ["https://www.youtube.com/watch?v=t0Q2otsqC4I"],
    specialRequests: 'This is test',
    firstDanceSong: '',
    fatherDaughterDanceSong: '',
    motherSonDanceSong: '',
    additionalDanceSongs: '',
    themeSongs: '',
    backgroundMusic: '',
    specialFocusAreas: '',
    rehearsalPerformanceNotes: '',

    arrivalTime: '12:12',
    soundCheckTime: '12:12',
    loadInInstructions: 'This is test instruction.',
    parkingInformation: 'This is test information.',

    stageSize: '1122',
    powerSupply: '1122',
    equipmentProvided: 'No equipment provided',
    equipmentNeeded: 'No equipment needed',
    soundSystem: 'No',

    fee: 0,
    deposit: 0,
    balanceDue: 0,
    paymentMethod: 'Card',
    paymentSchedule: `${new Date()}`,

    ceremonyTime: '12:12',
    cocktailHour: '12:12',
    dinnerTime: '12:12',
    speechesToasts: '12:12',
    receptionTimeline: '12:12',

    mealsProvided: 'No',
    breaks: 'No',
    greenRoom: 'No',

    emergencyContacts: '',
    venueEmergencyProcedures: '',

    notes: 'This is test note',

    eventNameRecur: 'Weekly Recur',
    plansRecur: 'Weekly',
};

const DEFAULT_PROFILE = {
    formik: {},
    event: DEFAULT_EVENT_DETAILS,
    eventDetails: DEFAULT_EVENT_DETAILS,
    events: [],
    eventHandler: () => { },
    eventType: "wedding",
    eventTypeHandler: () => { },
    progress: 0,
    progressHandler: () => { },
    getCurrentEventDetails: () => { },
    getNextEventDetails: () => { },
    getPreviousEventDetails: () => { },
    eventModal: false,
    eventModalHandler: () => { },
    toggleEventModal: () => { },
    sidebarMenu: false,
    sidebarMenuHandler: () => {}
}

export const DashboardContxt = createContext<DashboardContxtType>(DEFAULT_PROFILE);

const DashboardContextProvider = ({ children }: { children: ReactNode }) => {

    const [sidebarMenu, setSidebarMenu] = useState(false);

    const [eventType, setEventType] = useState("wedding");
    const [progress, setProgress] = useState(0);
    const [event, setEvent] = useState(DEFAULT_EVENT_DETAILS);
    const [events, setEvents] = useState([DEFAULT_EVENT_DETAILS, { ...DEFAULT_EVENT_DETAILS, id: 2, eventName: "Event 2", eventType: 'barClub' }])

    const [sortedEvents, setSortedEvents] = useState<EventType[]>([]);
    const [eventDetails, setEventDetails] = useState<EventType | null>(null);
    const [eventModal, setEventModal] = useState(false);
    const [currentEventDetailsIndex, setCurrentEventDetailsIndex] = useState<number>(0);

    const eventTypeHandler = (eventType: string) => {
        setEventType(eventType);
    }
    const progressHandler = (progress: number) => {
        setProgress(progress)
    }

    const eventHandler = (event: EventType) => {
        setEvent(event)
    }

    const formik = useFormik<EventType>({
        initialValues: DEFAULT_EVENT_DETAILS,
        validationSchema,
        onSubmit: (values: any, formikHelpers) => {
            const updatedEvents = eventModal
                ? events?.map((event) => event?.id === values.id ? values : event)
                : [{ ...values, eventType, id: events?.length + 1 }, ...events]
            setEvents(updatedEvents)
            getCurrentEventDetails(updatedEvents);

            eventModal && setEventModal(false);
            formikHelpers.resetForm();
        },
    });

    const getCurrentEventDetails = (updatedEvents?: EventType[]) => {
        const currentDate = new Date().getTime();

        let closestDiff = Infinity;
        let currentIndex = 0;

        const sortedEvents: EventType[] = (updatedEvents && updatedEvents?.length > 0 ? updatedEvents : events).sort((a, b) => (new Date(a.date).getTime() - new Date(b.date).getTime()))

        sortedEvents.forEach((event, index) => {
            const eventDate = new Date(event.date).getTime();
            const diff = eventDate - currentDate;
            if (Math.abs(diff) < Math.abs(closestDiff)) {
                closestDiff = diff;
                currentIndex = 0;
            }
        });
        setSortedEvents(sortedEvents);
        setEventDetails(sortedEvents[currentIndex]);
        setCurrentEventDetailsIndex(currentIndex)
    };

    const getNextEventDetails = () => {
        const nextEventIndex = currentEventDetailsIndex + 1;
        if (sortedEvents && sortedEvents.length - 1 >= nextEventIndex) {
            setCurrentEventDetailsIndex(nextEventIndex);
            setEventDetails(sortedEvents[nextEventIndex])
        }
    }

    const getPreviousEventDetails = () => {
        const previousEventIndex = currentEventDetailsIndex - 1;
        if (sortedEvents && sortedEvents.length > 0 && previousEventIndex >= 0) {
            setCurrentEventDetailsIndex(previousEventIndex);
            setEventDetails(sortedEvents[previousEventIndex])
        }
    }

    const eventModalHandler = (toggle: boolean) => {
        if (!eventModal) {
            setEventModal(toggle)
            const { setFieldValue } = formik;
            eventDetails && Object?.keys(eventDetails)?.forEach((key: any) => {
                setFieldValue(key, eventDetails[key as keyof EventType])
            })
        }
    }
    const toggleEventModal = () => {
        setEventModal(!eventModal)
    }

    const sidebarMenuHandler =  (value: boolean) => {
        setSidebarMenu(value)
    }

    return (
        <DashboardContxt.Provider value={{
            formik,
            event,
            eventDetails,
            events,
            eventHandler,
            eventType,
            eventTypeHandler,
            progress,
            progressHandler,
            getCurrentEventDetails,
            getNextEventDetails,
            getPreviousEventDetails,
            eventModal,
            eventModalHandler,
            toggleEventModal,
            sidebarMenu,
            sidebarMenuHandler
        }}>
            {children}
        </DashboardContxt.Provider>
    );
}

export default DashboardContextProvider;