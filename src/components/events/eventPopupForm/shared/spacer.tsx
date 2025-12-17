interface Props {
    className?: string
}

const Spacer = ({ className = 'mt-9' }: Props) => {
    return (
        <div className={className}></div>
    );
}

export default Spacer;