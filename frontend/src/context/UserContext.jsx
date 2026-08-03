import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);

    const updateProfile = (data) => setProfile((prev) => ({ ...prev, ...data }));

    return (
        <UserContext.Provider value={{ profile, setProfile, updateProfile }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const ctx = useContext(UserContext);
    if (!ctx) throw new Error('useUserContext must be used within UserProvider');
    return ctx;
};

export default UserContext;
