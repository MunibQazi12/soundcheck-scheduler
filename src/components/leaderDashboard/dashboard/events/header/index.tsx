'use client'
import EventIcon from "@/assets/svg/eventIcon";
import FilterIcon from "@/assets/svg/filtericon";
import { useState } from "react";
import FilterModal from "./filtermodal";
import CreateEvent from "../../../createEvent"
const Header = () => {

    const [filterModal, setFilterModal] = useState(false);

    return (
        <>
            <div className="mt-5 flex sm:flex-nowrap flex-wrap gap-5 items-center justify-between">
                <div className="sm:max-w-[220px] w-full flex gap-3 items-center">
                    <div className="w-9 h-9 bg-light-purple dark:bg-dark-primary-50 rounded-large flex justify-center items-center">
                        <EventIcon />
                    </div>
                    <p className="text-lg leading-1.2 font-bold font-manrope text-heading-text dark:text-darkheading">Upcoming Events</p>
                </div>
                <div className="sm:max-w-64 w-full flex justify-end gap-2.5 items-center">
                    <button
                        type="button"
                        onClick={() => setFilterModal(true)}
                        className="sm:w-[100px] w-1/2 h-9 rounded-md bg-white flex justify-center items-center gap-1.5">
                        <FilterIcon />
                        Filter
                    </button>
                    <CreateEvent />
                </div>
            </div>
            {
                filterModal ?
                    <FilterModal handler={() => setFilterModal(false)} />
                    : <></>
            }
        </>
    );
}

export default Header;