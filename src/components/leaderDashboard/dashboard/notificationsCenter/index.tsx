import Notification from "./notification";

const NotificationsCenter = () => {

    return (
        <div className="xl:px-[18px] px-3 mt-4 xl:h-[220px] h-[206px] overflow-y-auto lightpurplescrollbar">
            {/* Icon and label */}
            {
                [1, 2, 3, 4].map((item, index) => <Notification key={index} />)
            }
        </div>

    );
}

export default NotificationsCenter;