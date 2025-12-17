import dashboardImage from "/src/assets/images/Dashboard.png";
import eventdetailsImage from "/src/assets/images/Event Details.png";
import greenRoom1 from "/src/assets/images/Greenroom1.png";
import greenRoom2 from "/src/assets/images/greenroom2.png";
import mediaFiles from "/src/assets/images/mediafiles.png";
import calendar from "/src/assets/images/CALENDAR 1.png";
import leaderDashboard from "/src/assets/icons/leaderDashboard.svg";
// import leaderDashboard from "../assets/svg/leaderdashboardicon"
import Eventdetailsicon from "/src/assets/icons/eventdetails.svg";
import greenroomIcon from "/src/assets/icons/greenroomicon.svg";
import mediaFilesicon from "/src/assets/icons/mediafiles.svg";
import calendarIcon from "/src/assets/icons/caledar.svg";

const dashboardFeature = "leader-dashboard";
const eventFeature = "event-details";
const greenroomFeature = "green-room";
const mediaFeature = "media-files";
const calendarFeature = "calender";

export const DEFAULT_FEATURE = dashboardFeature;

export const CORE_FEATURES = [
  {
    id: 1,
    label: "Leader Dashboard",
    section: dashboardFeature,
  },
  {
    id: 2,
    label: "Event Details",
    section: eventFeature,
  },
  {
    id: 3,
    label: "Chat Room",
    section: greenroomFeature,
  },
  {
    id: 4,
    label: "Media Files",
    section: mediaFeature,
  },
  {
    id: 5,
    label: "Calendar",
    section: calendarFeature,
  },
];

export const LEADER_DASHBOARD = {
  sectionImages: [dashboardImage],
  icon: leaderDashboard,
  heading: "Manage your band with ease using our intuitive dashboard",
  // subHeading: "Manage Your Band with Ease",
  description:
    "The Dashboard is your command center for managing your band’s activities. Get a comprehensive view of all upcoming events, track gig statuses, and monitor your band’s performance at a glance. \n\n Customize your dashboard to display the stats that matter most to you, ensuring you’re always in control and on top of your game.",
};

export const EVENT_DETAILS = {
  sectionImages: [eventdetailsImage],
  icon: Eventdetailsicon,
  heading: "Tired of missing event details? ",
  // subHeading: "Every Detail in One Place",
  description:
    "With <b>Soundcheck</b>, you’ll never miss a beat. Create and manage events effortlessly with pre-built templates for weddings, corporate events, parties, bar/club gigs, and rehearsals.\n\n Easily track accepts, pending, and declined invitations, and keep everyone in the loop with seamless integrations with Google Maps and calendar apps.",
};

export const GREEN_ROOM = {
  sectionImages: [greenRoom1, greenRoom2],
  icon: greenroomIcon,
  heading: "Chat Room",
  subHeading: "Stay Connected with Your Band",
  description:
    "Communication is key, and our Chat Room chat feature ensures that your band stays connected. This event-specific chat room allows for real-time messaging, file sharing, and collaboration, keeping everyone informed and engaged.\n\n Whether you’re coordinating last-minute changes or sharing setlists, the Chat Room is your hub for all band communications.",
};

export const MEDIA_FILES = {
  sectionImages: [mediaFiles],
  icon: mediaFilesicon,
  heading: "Media Files",
  subHeading: "All Your Media, Organized",
  description:
    "Our Media Files feature lets you store, manage, and share all your important media files in one place. Upload audio tracks, video clips, images, documents, and more. Musicians can view and annotate PDFs during gigs, ensuring everyone has the information they need at their fingertips. \n\n Attach media to specific events or songs for easy access and organization.",
};

export const CALENDAR = {
  sectionImages: [calendar],
  icon: calendarIcon,
  heading: "Calendar ",
  subHeading: "Seamless Scheduling",
  description:
    "Never double-book or miss an event again with our integrated Calendar feature. Sync your events with Google Calendar, Apple Calendar, and more, ensuring that all your schedules are up-to-date and in sync. \n\n Our drag-and-drop functionality and customizable views make managing your band’s schedule simple and intuitive.",
};

export const SECTION_MAPPER: any = {
  [dashboardFeature]: LEADER_DASHBOARD,
  [eventFeature]: EVENT_DETAILS,
  [greenroomFeature]: GREEN_ROOM,
  [mediaFeature]: MEDIA_FILES,
  [calendarFeature]: CALENDAR,
};

export const CORE_FEATURES_SECTION = [
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
