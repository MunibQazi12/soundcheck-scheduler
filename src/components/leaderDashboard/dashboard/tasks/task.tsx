const Task = () => {

    return (
        <div className="flex gap-2 py-3 border-b border-lightLavender-gray dark:border-lightGray">
            <div>
                <input type="checkbox" className="w-[14px] h-[14px] accent-primary-100 border border-lightLavender-gray rounded-[3px]" />
            </div>
            <div className="text-heading-text dark:text-darkText font-inter">
                <p className="text-xs leading-normal ">Welcome to Soundcheck - here are some things to get you started</p>
                <p className="mt-1 text-[8px] leading-normal">Created 02.07.2024   Not Assigned   Set Due Date</p>
            </div>
        </div>
    );
}

export default Task;