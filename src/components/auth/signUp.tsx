import Image from 'next/image';
import Link from 'next/link';
import Input from "./input";
import Logo from "/src/assets/icons/dark-logo.svg";

import { SIGNIN_WITh } from "@/dump/auth";
import SignInWith from './signInWith';

const SignUp = () => {

    return (
        <div className='bg-white'>
            <div className='max-w-[1440px] h-full mx-auto flex md:flex-row flex-col-reverse items-center'>
                <div className='md:w-1/2 w-full'>
                    <div className='max-w-lg mx-auto w-full pt-[42px] pb-[78px] px-[14px] flex flex-col justify-center items-center'>
                        <Link href={'/'} className='w-full'>
                            <Image src={Logo} alt="soundcheck-logo" width={184} height={32} />
                        </Link>
                        <div className='sm:mt-11 mt-8 w-full'>
                            <h2 className="lg:text-4xl sm:text-3xl text-2xl leading-1.2 font-bold font-manrope text-heading-text">
                                Create your free account
                            </h2>
                            <p className='mt-2.5 pt-px w-[333px] sm:text-base text-sm font-light font-inter sm:leading-6 leading-normal text-heading-text'>
                                You’re one step closer to the best music you’ve ever made.
                            </p>
                        </div>
                        <div className='mt-2.5 w-full'>
                            {
                                SIGNIN_WITh.map((itemwith: any, index: any) => <div className='mt-[14px]' key={index}>
                                    <SignInWith key={index} icon={itemwith.icon} label={itemwith.label} />
                                </div>)
                            }
                        </div>
                        <div className='h-6 mt-[14px] w-full flex justify-center items-center relative '>
                            <div className='w-full h-[1px] bg-lightLavender-gray'>
                            </div>
                            <p className='sm:text-base text-sm text-heading-text absolute bg-white px-3'>OR</p>
                        </div>

                        <Input
                            placeholder='Email Address*'
                            type='email'
                            name="email"
                            className="mt-3.5"
                        />
                        <Input
                            placeholder='Password*'
                            type='password'
                            name="password"
                            className="mt-3.5"
                        />
                        <div className='mt-4 w-full'>
                            <button type="button" className="mt-[22px] bg-primary-100 rounded-large w-full text-[#FFFFFF] px-5 sm:h-[53px] h-12 items-center max-w-40 font-aptos flex justify-end text-base font-semibold">
                                Continue
                                <div className=" flex justify-center items-center border ml-[18px] border-[#412161] w-7 h-7 bg-[#FFFFFF] rounded-full">
                                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.5 1C6.5 0.723857 6.27614 0.5 6 0.5L1.5 0.5C1.22386 0.5 1 0.723857 1 1C1 1.27614 1.22386 1.5 1.5 1.5L5.5 1.5L5.5 5.5C5.5 5.77614 5.72386 6 6 6C6.27614 6 6.5 5.77614 6.5 5.5L6.5 1ZM1.35355 6.35355L6.35355 1.35355L5.64645 0.646446L0.646447 5.64645L1.35355 6.35355Z" fill="#BFA4F2"></path></svg>
                                </div>
                            </button>
                            <p className='sm:mt-7 mt-5 sm:text-base text-sm text-heading-text  '>
                                {`Alreday have an account? `}
                                <Link href='/signin' className='text-light-purple'>Log In</Link></p>
                        </div>

                    </div>
                </div>
                <div className='md:w-1/2 w-full md:min-h-[841px] sm:min-h-80 min-h-64 bg-primary-100'>
                    <div className='bg-login-layers md:h-[841px] sm:h-80 h-64 md:bg-cover bg-no-repeat	bg-right'></div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;