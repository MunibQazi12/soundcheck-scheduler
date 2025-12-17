'use client';
import Footer from "@/components/footer";
import Newsletter from "@/components/home/newsletter";
import TopBar from "@/components/topBar";
import { Fragment, useContext } from "react";

const OurstoryLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <Fragment>
            <TopBar />
            {children}
            <Newsletter />
            <Footer />
        </Fragment>
    );
}

export default OurstoryLayout;