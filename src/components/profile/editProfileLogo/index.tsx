import Image from "next/image";
import editProfileLogo from "/src/assets/images/editProfileImg.png";

const EditProfileLogo = () => {
    return (
        <div className="flex justify-center items-center">
            <Image src={editProfileLogo} alt="edit profile logo" className="w-24 h-24 md:w-[119px] md:h-[119px]" />
        </div>
    )
}
export default EditProfileLogo