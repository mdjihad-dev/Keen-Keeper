import React, { createContext, useState } from "react";
import Navbar from "../component/shared/navbar/Navbar";
import { Outlet } from "react-router";
import { ToastContainer} from "react-toastify";

import Footer from "./../component/shared/footer/Footer";

export const TimelineContext = createContext();

const Root = () => {
  
  const [activities, setActivities] = useState([]);

  const addActivity = (type, personName) => {
    const newLog = {
      id: Date.now(),
      type: type, 
      name: personName,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };

    setActivities([newLog, ...activities]);
  };

  return (
    <TimelineContext.Provider value={{ activities, addActivity }}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
          <ToastContainer
            position="top-center"
            autoClose={2000}
          />
        </main>
        <Footer />
      </div>
    </TimelineContext.Provider>
  );
};

export default Root;
