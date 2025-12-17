import TableRow from "./tableRow";


const Table = () => {

    return (
        <>
            <div className="overflow-hidden w-full mt-5 overflow-x-auto">
                <table className="w-full border-separate border-spacing-y-2.5">
                    <thead className="">
                        <th className="px-2 w-9 whitespace-nowrap"></th>
                        <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading whitespace-nowrap">NAME</th>
                        <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading whitespace-nowrap">EMAIL ADDRESS</th>
                        <th className="px-3 text-left text-[10px] leading-normal font-inter text-heading-text dark:text-darkheading whitespace-nowrap">PHONE</th>
                        <th className="w-9 px-2 text-right"></th>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3, 4]?.map((item, index) => <TableRow key={index} />)
                        }
                    </tbody>

                </table>
            </div>
        </>
    );
}
export default Table;