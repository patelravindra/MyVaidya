import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {

  /* ================= BASIC CONFIG ================= */
  const currencySymbol = "₹";
  const currency = "₹";
  const backendUrl = "https://myvaidya.onrender.com";

  /* ================= STATES ================= */
  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );
  const [userData, setUserData] = useState(false);

  /* ================= DATE HELPERS ================= */

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // 18_9_2025 → 18 September 2025
  const slotDateFormat = (slotDate) => {
    if (!slotDate) return "";

    const [day, month, year] = slotDate.split("_");
    const monthIndex = Number(month) - 1; // ✅ FIX

    return `${day} ${months[monthIndex]} ${year}`;
  };

  // Calculate age from DOB
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

  /* ================= API CALLS ================= */

  // Get Doctors
  const getDoctosData = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/doctor/list"
      );

      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Load User Profile
  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/user/get-profile",
        { headers: { token } }
      );

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  /* ================= EFFECTS ================= */

  useEffect(() => {
    getDoctosData();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    }
  }, [token]);

  /* ================= CONTEXT VALUE ================= */

  const value = {
    doctors,
    getDoctosData,

    currencySymbol,
    currency,

    backendUrl,

    token,
    setToken,

    userData,
    setUserData,
    loadUserProfileData,

    slotDateFormat,
    calculateAge
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
