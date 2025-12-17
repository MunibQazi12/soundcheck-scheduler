import Image from "next/image";
import Titleborder from "../../../assets/images/titleborder.png"
import googleicon from "../../../assets/icons/googleimage.png"
import iphone from "../../../assets/icons/iphone.png"
import facebook from "../../../assets/icons/facebook.png"
import bannerwaves from "../../../assets/images/banner-bg-cleaned-1.gif"

const HeroSection = () => {
  return (
    <section id="home" className="w-full bg-white dark:bg-dark-primary-100 relative">
      {/* <div className="w-full h-full bg-primary-100 absolute"></div> */}
      <div className="w-full bg-primary-100 dark:bg-dark-primary-50 md:rounded-b-[80px] sm:rounded-b-[40px] rounded-b-2.5xl bg-no-repeat bg-cover overflow-hidden">
        <div className="absolute w-full opacity-10">
          <Image src={bannerwaves} alt="bannerwaves" className="w-full"/>
        </div>
        <div className="lg:mt-[82px] sm:mt-16 mt-8 xl:px-28 lg:px-10 sm:px-8 px-6 rotate-180">
          <div className="max-w-fit mx-auto md:px-2.5 md:pb-[136px] sm:pb-24 pb-16 rotate-180">
            <div className="relative lg:max-w-fit md:max-w-[660px] sm:max-w-[550px] xs:max-w-[420px] max-w-[260px] mx-auto mainHeadingAnimation">
              <h1 className="md:text-5xl sm:text-[40px] xs:text-3xl text-2xl !leading-1.2 text-white dark:text-darkheading text-center font-bold font-manrope">Soundcheck is where every gig starts.</h1>
              <Image src={Titleborder} alt="Titleborder" className="absolute left-0 md:top-[52px] sm:top-[42px] xs:top-[30px] top-6 md:w-[308px] sm:w-[256px] xs:w-[198px] w-40" />
            </div>
            <p className="mt-[18px] md:text-xl xs:text-base !leading-normal text-sm text-white dark:text-darkText text-center xl:px-[308px] lg:px-[180px] md:px-16 font-light">Our comprehensive tool is revolutionizing the way musicians manage events and collaborate - and so much more.</p>
            <p className="mt-16 md:text-xl text-base text-center leading-1.2 font-inter text-white font-light">Sign up for free and create your first gig in minutes. </p>
            <div className="sm:mt-12 mt-8 flex flex-wrap gap-4 items-center justify-center">
              <button type="button"
                className="py-2.5 px-3 sm:w-[248px] w-full bg-[#F8F4FF] dark:bg-dark-primary-100 rounded-large flex gap-2 items-center text-base leading-1.2 text-heading-text dark:text-darkheading font-inter font-semibold"
              >
                <div className="sm:w-11 w-8 sm:h-11 h-8 flex justify-center items-center rounded-[5px] bg-[#A347FF1A] dark:bg-dark-primary-50 shadow-customShadow">
                  <Image src={googleicon} alt="googleicon" className="w-[22px] h-[22px]" />
                </div>
                <span className="">Sign up with Google</span>
              </button>
              <button type="button"
                className="py-2.5 px-3 sm:w-[248px] w-full bg-[#F8F4FF] dark:bg-dark-primary-100 rounded-large flex gap-2 items-center text-base leading-1.2 text-heading-text dark:text-darkheading font-inter font-semibold"
              >
                <div className="sm:w-11 w-8 sm:h-11 h-8 flex justify-center items-center rounded-[5px] bg-[#A347FF1A] dark:bg-dark-primary-50 shadow-customShadow">
                  <Image src={iphone} alt="iphone" className="w-4 h-[22px]" />
                </div>
                <span className="">Sign up with Apple</span>
              </button>
              <button type="button"
                className="p-2.5 sm:w-[248px] w-full bg-[#F8F4FF] dark:bg-dark-primary-100 rounded-large flex gap-2 items-center text-base leading-1.2 text-heading-text dark:text-darkheading font-inter font-semibold"
              >
                <div className="sm:w-11 w-8 sm:h-11 h-8 flex justify-center items-center rounded-[5px] bg-[#A347FF1A] dark:bg-dark-primary-50 shadow-customShadow">
                  <Image src={facebook} alt="facebook" className="w-[22px] h-[22px]" />
                </div>
                <span className="">Sign up with Facebook</span>
              </button>
            </div>
            <div className="mt-4 mb-2 max-w-4xl w-full mx-auto sm:px-[14px] h-6 flex justify-center items-center relative">
              <div className="w-full h-[1px] bg-white dark:bg-lightGray"></div>
              <p className="sm:text-base text-sm text-white absolute bg-primary-100 dark:bg-dark-primary-50 px-5 font-light">OR</p>
            </div>
            <p className="text-center text-[#559DF0] text-base leading-5 font-medium"><a href="">Sign up</a> free with email.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
