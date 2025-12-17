import Deleteicon from "@/assets/svg/deleteicon";
import Editicon from "@/assets/svg/editicon";

const UserActions = () => {

    return (
        <div className="w-20 flex justify-between items-center ml-auto">
            <button
                type="button"
                className="w-9 h-9 bg-[#F8F4FF] dark:bg-dark-primary-100 rounded-large flex justify-center items-center">
                <Editicon />
            </button>
            <button
                type="button"
                className="w-9 h-9 bg-[#F8F4FF] dark:bg-dark-primary-100 rounded-large flex justify-center items-center">
                <Deleteicon />
            </button>
        </div>
    );
}

export default UserActions