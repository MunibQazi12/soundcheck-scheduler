
interface Props {
    label: string;
    isSelected: boolean;
    handler: () => void
}

const EventTypeButton = ({ label, isSelected = false, handler = () => { } }: Props) => {
    return (
        <button
            type="button"
            onClick={handler}
            className={`py-3 px-3 h-11 w-full rounded-[5px] text-xs leading-normal font-semibold font-inter ${isSelected ? "bg-light-purple text-white dark:bg-dark-primary-200" : "bg-white text-heading-text dark:bg-dark-primary-50 dark:text-darkText"}`}
        >
            {label}
        </button>
    )
}

export default EventTypeButton;