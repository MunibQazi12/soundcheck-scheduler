'use client';
import { ReactNode, createContext, useState } from "react";

export interface Profile {
    industry: string;
    name: string;
    username: string;
    companyName: string;
    phoneNumber: string;
    email: string;
    website: string;
    address: string;
    city: string;
    facebookProfile: string;
    twitterProfile: string;
    linkedinProfile: string;
    instagramProfile: string;
}

export interface ProfileContxt {
    profile: Profile,
    profileHandler: (val: Profile) => void
}

const DEFAULT_PROFILE = {
    industry: 'Entertainment',
    name: 'Ben Ikwuagwu',
    username: 'sben123',
    companyName: 'Soundcheck Scheduler',
    phoneNumber: '555-555-5555',
    email: 'ben.ikwuagwu@soundcheckscheduler.com',
    website: 'https://www.soundcheckscheduler.com',
    address: '9137 Limcombe Dr, Toronto, Ontario L4C8R4',
    city: 'Austin',
    facebookProfile: 'https://facebook.com/healthyeats',
    twitterProfile: 'https://twitter.com/healthyeats',
    linkedinProfile: 'https://linkedin.com/healthyeats',
    instagramProfile: 'https://instagram.com/healthyeats',
}

export const ProfileContxt = createContext<ProfileContxt>({
    profile: DEFAULT_PROFILE,
    profileHandler: () => { }
});

const ProfileContextProvider = ({ children }: { children: ReactNode }) => {

    const [profile, setProfile] = useState(DEFAULT_PROFILE);

    const profileHandler = (values: any) => {
        setProfile(values)
    }

    return (
        <ProfileContxt.Provider value={{
            profile,
            profileHandler,
        }}>
            {children}
        </ProfileContxt.Provider>
    );
}

export default ProfileContextProvider;