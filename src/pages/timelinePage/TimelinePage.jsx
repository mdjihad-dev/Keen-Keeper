import React, { useContext } from "react";
import { TimelineContext } from "../../mainLayout/Root"; // তোমার পাথ অনুযায়ী ঠিক করে নিও
import { IoCall, IoChatbubble, IoVideocam } from "react-icons/io5";

const TimelinePage = () => {
  // ১. কনটেক্সট থেকে সব অ্যাক্টিভিটি নিয়ে আসলাম
  const { activities } = useContext(TimelineContext);

  // ২. আইকন এবং কালার সেট করার জন্য একটা হেল্পার ফাংশন
  const getActionDetails = (type) => {
    switch (type) {
      case "Call":
        return {
          icon: <IoCall />,
          color: "border-red-500",
          textColor: "text-red-500",
        };
      case "Text":
        return {
          icon: <IoChatbubble />,
          color: "border-cyan-400",
          textColor: "text-cyan-400",
        };
      case "Video":
        return {
          icon: <IoVideocam />,
          color: "border-pink-500",
          textColor: "text-pink-500",
        };
      default:
        return {
          icon: "📅",
          color: "border-gray-200",
          textColor: "text-gray-500",
        };
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-12 px-4">
      <div className="space-y-4">
        {activities.length > 0 ? (
          activities.map((log) => {
            const { icon, color, textColor } = getActionDetails(log.type);
            return (
              <div
                key={log.id}
                className={`flex items-center gap-5 bg-white p-5 shadow-sm rounded-xl border-l-8 ${color} border-t border-r border-b border-gray-50 transition-transform hover:scale-[1.01]`}
              >
                <div
                  className={`text-2xl p-3 bg-gray-50 rounded-full ${textColor}`}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {log.type}{" "}
                    <span className="font-normal text-gray-500 text-sm">
                      with
                    </span>{" "}
                    {log.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{log.date}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-lg italic">
              No activities yet. Check in with a friend to start your timeline!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
