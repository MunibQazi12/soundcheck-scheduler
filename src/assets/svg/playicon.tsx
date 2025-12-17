interface Props {
    size?: string;
    color?: string;
}

const Playicon:React.FC<Props> =  ({size, color}) => {
    return (
        <svg width={size || "10"} height={size || "10"} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 3.13397C7.16667 3.51887 7.16667 4.48113 6.5 4.86603L2 7.4641C1.33333 7.849 0.500001 7.36788 0.500001 6.59808L0.500001 1.40192C0.500001 0.632124 1.33333 0.150998 2 0.535898L6.5 3.13397Z" fill={color || "#412161"} className='dark:fill-darkheading' />
        </svg>
    )
}

export default Playicon