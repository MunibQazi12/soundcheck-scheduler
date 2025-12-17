interface Props {
    placeholder: string;
    type: string;
    name: string;
    className?: string;
}

const Input = ({ placeholder, type, name, className }: Props) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`py-5 px-4 w-full sm:h-16 h-14 border border-lightLavender-gray rounded-large sm:text-base text-sm text-lightGray ${className}`}
        />
    )
}

export default Input