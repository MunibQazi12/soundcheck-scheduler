'use client'
import { useState } from "react"
import { CALENDAR, CORE_FEATURES, CORE_FEATURES_SECTION, DEFAULT_FEATURE, EVENT_DETAILS, GREEN_ROOM, LEADER_DASHBOARD, MEDIA_FILES, SECTION_MAPPER } from "@/dump/home"
import Section from './section';
import RightScrollAnimation from "@/shared/rightscrollanimation";
import dashboardImage from "/src/assets/images/Dashboard.png";
import Eventdetailsicon from "/src/assets/icons/eventdetails.svg";
import eventdetailsImage from "/src/assets/images/Event Details.png";
import greenRoom1 from "/src/assets/images/Event Details.png";
import chatroom from "/src/assets/images/Chat.png";
import greenroomIcon from "/src/assets/icons/greenroomicon.svg";
import mediaFiles from "/src/assets/images/Media.png";
import mediaFilesicon from "/src/assets/icons/mediafiles.svg";
import calendar from "/src/assets/images/Calendar.png";
import calendarIcon from "/src/assets/icons/caledar.svg";


const TABS_ANIMATION_DELAY = ["!delay-0", "!delay-150", "!delay-300", "!delay-500", "!delay-700"]

import leaderDashboard from "/src/assets/icons/leaderDashboard.svg";

const CoreFeatures = () => {

    // const [selectedFeature, setSelectedFeature] = useState<string>(DEFAULT_FEATURE);
    const [render, setRender] = useState<number>(0);


    const LEADER_DASHBOARD = {
        sectionImages: [dashboardImage],
        icon: leaderDashboard,
        heading: "Manage your band with ease using our intuitive dashboard",
        description: <p>
            {`The`} <b>Dashboard</b> {`is your command center for managing your band’s activities. Get a comprehensive view of all upcoming events, track gig statuses, and monitor your band’s performance at a glance. \n\n Customize your dashboard to display the stats that matter most to you, ensuring you’re always in control and on top of your game.`}
            </p>,
    };

    const EVENT_DETAILS = {
        sectionImages: [eventdetailsImage],
        icon: Eventdetailsicon,
        heading: "Tired of missing event details? ",
        description: <p>
            {`With`} <b>Soundcheck</b> {`you’ll never miss a beat. Create and manage events effortlessly with pre-built templates for weddings, corporate events, parties, bar/club gigs, and rehearsals.\n\n Easily track accepts, pending, and declined invitations, and keep everyone in the loop with seamless integrations with Google Maps and calendar apps.`}
            </p>,
    };

    const GREEN_ROOM = {
        sectionImages: [greenRoom1, chatroom],
        icon: greenroomIcon,
        heading: "Delete the Group Chats, Download Soundcheck",
        description: <p>
            {`Communication is key, and the`} <b>Chat Room</b> {`ensures that your band stays connected. This event-specific chat room allows for real-time messaging, file sharing, and collaboration, keeping everyone informed and engaged.\n\n Whether you’re coordinating last-minute changes or sharing setlists, the Chat Room is your hub for all band communications.`}
        </p>
        ,
    };

    const MEDIA_FILES = {
        sectionImages: [calendar],
        icon: mediaFilesicon,
        heading: "Scheduling your band has never been this simple",
        description: <p>
            {`Never double-book or miss an event again with the integrated`} <b>Calendar</b>{`. Sync your events with Google Calendar, Apple Calendar, and more, ensuring that all your schedules are up-to-date and in sync. Our drag-and-drop functionality and customizable views make managing your band’s schedule simple and intuitive.`}
        </p>,
    };

    const CALENDAR = {
        sectionImages: [mediaFiles],
        icon: mediaFilesicon,
        heading: "All your media, Organized. ",
        description: <p>
            {`The`} <b> Media </b>  {` section lets you store, manage, and share all your important media files in one place. Upload audio tracks, video clips, images, documents, and more. Musicians can view and annotate PDFs during gigs, ensuring everyone has the information they need at their fingertips. \n\n Attach media to specific events or songs for easy access and organization.`}
        </p>,
    };

    const CORE_FEATURES_SECTION = [
        {
            id: 1,
            section: LEADER_DASHBOARD,
        },
        {
            id: 2,
            section: EVENT_DETAILS,
        },
        {
            id: 3,
            section: GREEN_ROOM,
        },
        {
            id: 4,
            section: MEDIA_FILES,
        },
        {
            id: 5,
            section: CALENDAR,
        }
    ]

    return (
        <section id="features" className='w-full bg-white dark:bg-dark-primary-100'>
            <div className="bg-section-gradient dark:bg-dark-primary-100 w-full rounded-large">
                <div className='max-w-[1440px] mx-auto md:pt-[107px] pt-11 pb-11 xl:px-28 lg:px-10 sm:px-8 px-6 coreMain dark:bg-dark-primary-100'>
                    <h2 className='text-heading-text dark:text-darkheading fadeInUp font-bold md:text-[45.04px] sm:text-4xl text-3xl  leading-1.2 text-center font-manrope coreAnimation'>Core Features</h2>
                    {/* --------------------- OLD  START----------------------- */}
                    {/* 12 August 2024, Design Changed */}
                    {/* <div className="flex lg:flex-nowrap flex-wrap gap-5 justify-center items-center sm:mt-14 mt-10 mb-5">
                        {
                            CORE_FEATURES?.map((feature, index) => {
                                return (
                                    <div onClick={() => {
                                        setRender(preState => selectedFeature !== feature.section ? preState + 1 : preState);
                                        setSelectedFeature(feature.section);
                                    }}
                                        key={feature.id}
                                        className="lg:max-w-[227px] sm:max-w-[180px] xs:max-w-40 w-full">
                                        <RightScrollAnimation className={`${TABS_ANIMATION_DELAY[index]}`}>
                                            <button type="button" className={`rounded-large xl:text-lg sm:text-base text-sm leading-1.2 font-bold  lg:h-20 xs:py-5 py-3 px-2 w-full hover:scale-105 transition duration-200 ease-linear ${selectedFeature === feature.section ? "bg-light-purple dark:bg-dark-primary-200 text-white shadow-customShadow dark:shadow-darkShadow" : "bg-white dark:bg-dark-primary-50 text-heading-text dark:text-darkText hover:bg-hover-color hover:text-white"}`}>{feature.label}</button>
                                        </RightScrollAnimation>
                                    </div>
                                );
                            })
                        }
                    </div> 
                    <Section render={render} content={SECTION_MAPPER[selectedFeature]} /> */}
                    {/* --------------------- OLD  END----------------------- */}

                    {
                        CORE_FEATURES_SECTION?.map((item) => {
                            const { id, section } = item;
                            return (<Section key={id} render={id} content={section} />);
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default CoreFeatures




// --------------------------- OLD DESIGN ----------------------------------
// const ClearEventIcons = ({ icon }: props) => {
//     return (
//         <div className="w-[65px] h-[65px] bg-white rounded-full flex justify-center items-center shadow-customShadow">
//             <Image src={icon} alt="eventicon" width={24} height={24} />
//         </div>
//     )
// }

// const CalenderDates = ({ day }: { day: number }) => {
//     return (
//         <div className="w-[62px] h-[62px] p-2 rounded-large bg-white text-[22px] leading-1.2 text-heading-text font-bold font-manrope flex justify-end items-start">{day}</div>
//     )
// }

// const ClearEvent = () => {
//     return (
//         <div className='w-[48%] h-[421px] bg-[#FFF4EA80] p-12 rounded-2.5xl'>
//             <div className="max-w-[480px]">
//                 <h4 className="text-[22px] leading-1.2 font-bold font-manrope text-dark-gray">Clear Event Information</h4>
//                 <p className="text-base text-dark-gray mt-9">
//                     Band leaders can easily input and update detailed information  about upcoming events, including dates, venues, setlists, and logistical arrangements.  All information is clearly listed for band members to access at any time.
//                 </p>
//                 <div className="mt-[60px] w-full flex justify-between items-end h-[104px]">
//                     <div> <ClearEventIcons icon={EventCalendar} /></div>
//                     <div className="mb-8"> <ClearEventIcons icon={Location} /></div>
//                     <div className="mb-4 w-20 h-20 bg-white rounded-full flex justify-center items-center shadow-customShadow">
//                         <Image src={Avatar} alt="Avatar" width={80} height={80} />
//                     </div>
//                     <div className="mb-1"> <ClearEventIcons icon={Layers} /></div>
//                     <div className="mb-10"> <ClearEventIcons icon={Menus} /></div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const SharedCalendar = () => {
//     return (
//         <div className='w-[48%] h-[421px] bg-lightLavender p-8 rounded-2.5xl'>
//             <div className="max-w-[480px] overflow-hidden">
//                 <h4 className="text-[22px] leading-1.2 font-bold font-manrope text-dark-gray max-w-[344px]">Shared Calendar with Availability Management</h4>
//                 <p className="text-base text-dark-gray mt-7">
//                     Band members can easily view and update their availability, ensuring everyone is on the same page.
//                 </p>
//                 <div className="mt-[60px] py-[14px] px-5 bg-white rounded-large flex justify-between items-center">
//                     <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28033 11.2803C6.57322 10.9874 6.57322 10.5126 6.28033 10.2197L1.8107 5.75L6.28033 1.2803C6.57322 0.987402 6.57322 0.512602 6.28033 0.219702C5.98744 -0.0731983 5.51256 -0.0731984 5.2197 0.219702L0.219703 5.2197C0.0790031 5.3603 3.12106e-06 5.5511 3.11236e-06 5.75C3.10367e-06 5.9489 0.0790031 6.1397 0.219703 6.2803L5.2197 11.2803C5.51256 11.5732 5.98744 11.5732 6.28033 11.2803Z" fill="#323232" />
//                     </svg>
//                     <span className="text-[22px] leading-1.2 font-bold font-manrope">June 2024</span>
//                     <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M0.219667 11.2803C-0.0732225 10.9874 -0.0732225 10.5126 0.219667 10.2197L4.6893 5.75L0.219667 1.2803C-0.073223 0.987402 -0.073223 0.512602 0.219667 0.219702C0.512557 -0.0731983 0.987437 -0.0731984 1.2803 0.219702L6.2803 5.2197C6.421 5.3603 6.5 5.5511 6.5 5.75C6.5 5.9489 6.421 6.1397 6.2803 6.2803L1.2803 11.2803C0.987437 11.5732 0.512558 11.5732 0.219667 11.2803Z" fill="#323232" />
//                     </svg>

//                 </div>
//                 <div className="mt-3 w-full flex gap-2 items-center overflow-x-auto">
//                     {
//                         [1, 2, 3].map((day, index) => <CalenderDates key={index} day={day} />)
//                     }
//                     <div className="w-[62px] h-[62px] p-2 rounded-large bg-white text-[22px] leading-1.2 text-heading-text font-bold font-manrope flex justify-end items-start shadow-customShadow">4</div>
//                     <div className="w-[62px] h-[62px] p-2 rounded-large bg-primary-50 text-[22px] leading-1.2 text-heading-text font-bold font-manrope flex justify-end items-start">5</div>
//                     <div className="w-[62px] h-[62px] p-2 rounded-large bg-primary-100 text-[22px] leading-1.2 text-white font-bold font-manrope flex justify-end items-start">6</div>
//                     <div className="w-[62px] h-[62px] p-2 rounded-large bg-primary-100 text-[22px] leading-1.2 text-white font-bold font-manrope flex justify-end items-start">7</div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// const DragDropFunctionality = () => {
//     return (
//         <div className="xl:w-[38.5%] w-[38%] h-[306px] bg-lightLavender rounded-2.5xl py-12 px-8">
//             <div className="max-w-[360px] w-full">
//                 <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M25.6191 12.0807L22.124 8.58651C22.0387 8.49824 21.9368 8.42784 21.824 8.3794C21.7113 8.33097 21.59 8.30548 21.4673 8.30441C21.3446 8.30334 21.2229 8.32672 21.1093 8.37319C20.9958 8.41966 20.8926 8.48828 20.8058 8.57505C20.719 8.66182 20.6504 8.76501 20.6039 8.87858C20.5575 8.99216 20.5341 9.11385 20.5352 9.23656C20.5362 9.35927 20.5617 9.48053 20.6102 9.59329C20.6586 9.70604 20.729 9.80801 20.8173 9.89326L23.0001 12.0761H13.9241V2.99999L16.1069 5.18285C16.2812 5.35119 16.5147 5.44434 16.757 5.44223C16.9993 5.44013 17.2311 5.34293 17.4024 5.17159C17.5738 5.00024 17.6709 4.76845 17.673 4.52614C17.6752 4.28383 17.582 4.05039 17.4137 3.87609L13.9241 0.380937C13.8034 0.260167 13.66 0.164365 13.5023 0.099003C13.3445 0.033641 13.1754 0 13.0046 0C12.8338 0 12.6647 0.033641 12.507 0.099003C12.3492 0.164365 12.2058 0.260167 12.0851 0.380937L8.59095 3.87609C8.42261 4.05039 8.32946 4.28383 8.33157 4.52614C8.33367 4.76845 8.43086 5.00024 8.60221 5.17159C8.77355 5.34293 9.00533 5.44013 9.24764 5.44223C9.48994 5.44434 9.72338 5.35119 9.89768 5.18285L12.0759 2.99999V12.0761H2.99993L5.18274 9.89326C5.35108 9.71896 5.44422 9.48552 5.44212 9.24321C5.44001 9.0009 5.34282 8.76911 5.17148 8.59776C5.00014 8.42642 4.76835 8.32923 4.52605 8.32712C4.28374 8.32502 4.0503 8.41817 3.87601 8.58651L0.380929 12.0807C0.260161 12.2015 0.164361 12.3448 0.0990009 12.5026C0.0336403 12.6604 0 12.8295 0 13.0003C0 13.171 0.0336403 13.3402 0.0990009 13.4979C0.164361 13.6557 0.260161 13.7991 0.380929 13.9198L3.87601 17.414C4.0503 17.5824 4.28374 17.6755 4.52605 17.6734C4.76835 17.6713 5.00014 17.5741 5.17148 17.4028C5.34282 17.2314 5.44001 16.9996 5.44212 16.7573C5.44422 16.515 5.35108 16.2816 5.18274 16.1073L2.99993 13.9244H12.0759V23.0005L9.89306 20.8177C9.80781 20.7294 9.70583 20.659 9.59309 20.6106C9.48034 20.5622 9.35907 20.5367 9.23637 20.5356C9.11366 20.5345 8.99197 20.5579 8.8784 20.6044C8.76482 20.6508 8.66164 20.7195 8.57487 20.8062C8.4881 20.893 8.41948 20.9962 8.37302 21.1098C8.32655 21.2233 8.30317 21.345 8.30424 21.4677C8.3053 21.5905 8.3308 21.7117 8.37923 21.8245C8.42766 21.9372 8.49806 22.0392 8.58633 22.1245L12.0805 25.6187C12.2012 25.7396 12.3445 25.8355 12.5023 25.9009C12.6601 25.9663 12.8292 26 13 26C13.1708 26 13.3399 25.9663 13.4977 25.9009C13.6555 25.8355 13.7988 25.7396 13.9195 25.6187L17.4137 22.1235C17.5019 22.0383 17.5723 21.9363 17.6208 21.8235C17.6692 21.7108 17.6947 21.5895 17.6958 21.4668C17.6968 21.3441 17.6734 21.2224 17.627 21.1088C17.5805 20.9953 17.5119 20.8921 17.4251 20.8053C17.3384 20.7185 17.2352 20.6499 17.1216 20.6035C17.008 20.557 16.8863 20.5336 16.7636 20.5347C16.6409 20.5357 16.5197 20.5612 16.4069 20.6097C16.2942 20.6581 16.1922 20.7285 16.1069 20.8168L13.9241 23.0005V13.9244H23.0001L20.8173 16.1073C20.729 16.1925 20.6586 16.2945 20.6102 16.4073C20.5617 16.52 20.5362 16.6413 20.5352 16.764C20.5341 16.8867 20.5575 17.0084 20.6039 17.122C20.6504 17.2355 20.719 17.3387 20.8058 17.4255C20.8926 17.5123 20.9958 17.5809 21.1093 17.6273C21.2229 17.6738 21.3446 17.6972 21.4673 17.6961C21.59 17.6951 21.7113 17.6696 21.824 17.6211C21.9368 17.5727 22.0387 17.5023 22.124 17.414L25.6191 13.9244C25.7398 13.8037 25.8356 13.6603 25.901 13.5026C25.9664 13.3448 26 13.1757 26 13.0049C26 12.8341 25.9664 12.665 25.901 12.5072C25.8356 12.3495 25.7398 12.2061 25.6191 12.0854V12.0807Z" fill="#323232" />
//                 </svg>
//                 <p className="mt-11 text-[22px] leading-1.2 font-bold font-manrope text-heading-text">Drag and Drop Functionality</p>
//                 <p className="text-base text-dark-gray mt-5">Simplify scheduling and updates with intuitive drag and drop features.</p>
//             </div>
//         </div>
//     )
// }

// const Integration = () => {
//     return (
//         <div className="xl:w-[58.5%] w-[58%] bg-lightLavender rounded-2.5xl"></div>
//     )
// }