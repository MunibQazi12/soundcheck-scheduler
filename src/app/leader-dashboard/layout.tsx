"use client"
import Topbar from "@/components/leaderDashboard/topbar";
import DashboardContextProvider from "@/store/dashboardContxt";
import "../../assets/styles/calendar.css"
import SidebarComponent from "@/components/leaderDashboard/sidebar";

type Props = {
    children: React.ReactNode;
};

const LeaderDashboardLayout = ({ children }: Props) => {

    return (
        <DashboardContextProvider>
            <div className="flex">
                <SidebarComponent />
                <div className="lg:w-[calc(100%-233px)] w-full ml-auto h-full">
                    <Topbar />
                    {children}
                </div>
            </div>
        </DashboardContextProvider>
    );
}

export default LeaderDashboardLayout;