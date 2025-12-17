import HeaderLogo from "../topBar/logo";
import ProfileLogo from "./profileImage";
import { useEffect, useState } from "react";

const ProfileTopBar: React.FC = () => {

  const [scrolltopdata, setscrolltopdata] = useState('');
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 10) {
        setscrolltopdata('');
      } else {
        setscrolltopdata('animationScrollNav');
      }
    });
  }, [])

  return (
    <header className={`bg-primary-100 dark:bg-dark-primary-50 border-b border-primary-50 dark:border-lightGray ${scrolltopdata}`}>
      <nav className="max-w-[1440px] mx-auto py-[19px] xl:pl-20 lg:px-10 sm:px-8 px-6 xl:pr-[85px] flex justify-between items-center">
        <div className="flex gap-5 justify-between items-center">
          <HeaderLogo />
        </div>
        <div>
            <ProfileLogo/>
        </div>
      </nav>
    </header>
  );
};

export default ProfileTopBar;
