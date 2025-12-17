interface Props {
    color?: string;
}
const Calendar:React.FC<Props> = ({color}: Props) => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_7127_1873" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                <path d="M0 0H14V14H0V0Z" fill={color || '#fff'} />
            </mask>
            <g mask="url(#mask0_7127_1873)">
                <path d="M6.46223 10.7734H7.53774M9.69503 10.7734H10.7705M3.23567 10.7734H4.31118M6.46223 7.54688H7.53774M9.69503 7.54688H10.7705M3.23567 7.54688H4.31118M0.546875 4.84895H13.4593M10.2328 3.23567V0.546875M3.77344 3.23567V0.546875M2.70413 13.4531H11.3021C12.4935 13.4531 13.4593 12.4873 13.4593 11.2958V3.77967C13.4593 2.58825 12.4935 1.62239 11.3021 1.62239H2.70413C1.51271 1.62239 0.546875 2.58825 0.546875 3.77967V11.2958C0.546875 12.4873 1.51271 13.4531 2.70413 13.4531Z" stroke={color || '#fff'} strokeWidth="0.7" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
            </g>
        </svg>

    )
}

export default Calendar