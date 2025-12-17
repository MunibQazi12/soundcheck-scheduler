interface Props {
    className?: string
}
const PlusIcon = ({ className }: Props) => {
    return (
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 1L5.5 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" className={`${className ? "" : "dark:stroke-darkheading"} `} />
            <path d="M10 5.5L1 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" className={`${className ? "" : "dark:stroke-darkheading"} `} />
        </svg>
    )
}

export default PlusIcon