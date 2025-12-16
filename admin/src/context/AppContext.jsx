import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY || "₹";
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // ✅ FIXED DATE FORMATTER
    // (18_12_2025 → 18 Dec 2025)
    const slotDateFormat = (slotDate) => {
        if (!slotDate) return "";

        const dateArray = slotDate.split("_");
        const day = dateArray[0];
        const monthIndex = Number(dateArray[1]) - 1; // 🔥 FIX
        const year = dateArray[2];

        return `${day} ${months[monthIndex]} ${year}`;
    };

    // Calculate age properly
    const calculateAge = (dob) => {
        if (!dob) return "";

        const birthDate = new Date(dob);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    const value = {
        backendUrl,
        currency,
        slotDateFormat,
        calculateAge,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
