import Image from "next/image"

interface Props {
  label: string;
  icon: string;
  handler?: () => void
}

const SignInWith = ({ label, icon, handler }: Props) => {
  return (
    <button type="button" onClick={handler} className='w-full sm:h-16 h-14 border border-lightLavender-gray rounded-large py-[14px] px-[26px] flex gap-5 items-center'>
      <Image src={icon} alt="google" width={34} height={34} className="sm:w-[34px] w-7 sm:h-[34px] h-7" />
      <span className="sm:text-xl text-base leading-normal text-dark-gray ">{label}</span>
    </button>
  )
}

export default SignInWith