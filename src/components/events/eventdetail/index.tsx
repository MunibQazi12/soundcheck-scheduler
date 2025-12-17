import Band from "./band"
import Chatroom from "./chatroom"
import ContactInfo from "./contactInfo"
import EventSchedule from "./eventSchedule"
import CateringHospitality from "./cateringHospitality"
import Logistics from "./logistics"
import Mediacard from "./media"
import PaymentDetails from "./paymentDetails"
import TecehnicalRequirements from "./technicalRequirements"
import EmergencyInfo from "./emergencyInfo"
import PerformanceDetails from "./performanceDetails"
import AdditionalNotes from "./additionalNotes"

const EventDetail = () => {
  return (
    <section className='mt-7 pl-6 pr-[30px] pb-20 flex xl:flex-nowrap flex-wrap xl:gap-8 gap-4 justify-between'>
      <div className='xl:w-[63%] w-full flex flex-col gap-3'>
        <ContactInfo />
        <Logistics />
        <TecehnicalRequirements />
        <PaymentDetails />
        <EventSchedule />
        <CateringHospitality />
        <EmergencyInfo />
        <AdditionalNotes />
        <PerformanceDetails />
      </div>
      <div className='xl:w-[34%] w-full flex xl:flex-col flex-row flex-wrap xl:justify-normal justify-between gap-4'>
        <div className="xl:w-full md:w-[48%] w-full"> <Chatroom /></div>
        <div className="xl:w-full md:w-[48%] w-full"><Band /></div>
        <div className="xl:w-full md:w-[48%] w-full"><Mediacard /></div>
      </div>
    </section>
  )
}

export default EventDetail