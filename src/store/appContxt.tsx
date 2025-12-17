'use client';
import { ReactNode, createContext, useState } from "react";

export interface AppContxt {
    profileMenu: boolean,
    profileMenuHandler: (val: boolean) => void
}

export const AppContxt = createContext<AppContxt>({
    profileMenu: false,
    profileMenuHandler: () => { }
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {

    const [profileMenu, setProfileMenu] = useState(false);

    const profileMenuHandler = (value: boolean) => {
        setProfileMenu(value)
    }

    return (
        <AppContxt.Provider value={{
            profileMenu,
            profileMenuHandler,
        }}>
            {children}
        </AppContxt.Provider>
    );
}

export default AppContextProvider;