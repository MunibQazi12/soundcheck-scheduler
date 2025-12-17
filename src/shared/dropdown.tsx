import DropdownArrowIcon from "@/assets/svg/dropdownarrow";
import { Select, SelectItem, SelectSection } from "@nextui-org/react";
interface Props {
    options?: any;
    placeHolder?: string;
}
const Dropdown = ({ placeHolder, options }: Props) => {

    return (
        <div className="w-full relative">
            <Select
                placeholder={placeHolder}
                className="w-full h-11 customDropdown rounded-[5px] capitalize cursor-pointer bg-white dark:bg-dark-primary-100  text-sm leading-normal text-lightGray dark:text-darkText appearance-none"
            >
                <SelectSection className='bg-white shadow-lg z-50 capitalize'>
                    {options?.map((option: any) => (
                        <SelectItem className="hover:bg-purple-100 py-2 px-2 text-sm capitalize" key={option.key}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectSection>

            </Select>
        </div>
    )
}

export default Dropdown