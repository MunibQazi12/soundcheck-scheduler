import Task from "./task";

const Tasks = () => {

    return (
        <div className="xl:px-[18px] px-3 mt-4 xl:h-[220px] h-[206px] overflow-y-auto lightpurplescrollbar">
            {/* banner design here  */}
            {
                [1, 2, 3, 4].map((item, index) => <Task key={index} />)
            }
        </div>
    );
}

export default Tasks;