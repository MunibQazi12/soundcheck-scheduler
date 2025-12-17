import Editicon from "@/assets/svg/editicon"
import { DashboardContxt } from "@/store/dashboardContxt";
import { useContext } from "react";

interface Props {
    title: string
}

const SectionHeader = ({ title }: Props) => {

    const { eventModalHandler } = useContext(DashboardContxt);

    return (
        <div className="flex gap-4 justify-between items-center">
            <p className="text-sm font-semibold font-manrope uppercase text-heading-text dark:text-darkText">{title}</p>
            <button
                type="button"
                onClick={() => eventModalHandler(true)}
                className="w-9 h-9 rounded-large bg-[#F8F4FF] dark:bg-dark-primary-100 flex justify-center items-center">
                <Editicon />
            </button>
        </div>
    );
}

export default SectionHeader;