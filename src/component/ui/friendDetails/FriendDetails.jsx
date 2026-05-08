import React from "react";
import { useLoaderData } from "react-router";
import {
  IoCallOutline,
  IoChatbubbleOutline,
  IoVideocamOutline,
} from "react-icons/io5";

const FriendDetails = () => {

  const {
    name,
    picture,
    status,
    tags,
    days_since_contact,
    goal,
    next_due_date,
    bio,
  } = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto my-16 px-4">
      <div className="grid lg:grid-cols-12 gap-8 items-start">

        {/* Left Side: Profile Card & Action Buttons (Span 4) */}
        <div className="lg:col-span-4 space-y-6">

          {/* Profile Card */}
          <div className="bg-white shadow-sm border border-gray-100 rounded-2xl py-10 px-6 text-center space-y-4">
            <img
              className="mx-auto w-24 h-24 object-cover rounded-full border-2 border-gray-200"
              src={picture}
              alt={name}
            />
            <div>
              <h2 className="text-2xl font-bold text-[#1E293B]">{name}</h2>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span
                  className={`px-4 py-1 rounded-full text-white text-xs font-bold uppercase ${
                    status === "overdue"
                      ? "bg-[#EF4444]"
                      : status === "on-track"
                        ? "bg-[#244D3F]"
                        : "bg-[#EFAD44]"
                  }`}
                >
                  {status}
                </span>
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#CBFADB] text-[#244D3F] text-xs font-bold px-4 py-1 rounded-full uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-500 italic text-sm">"{bio}"</p>
            <p className="text-xs text-gray-400">Preferred: email</p>
          </div>

          {/* Left Bottom Buttons */}
          <div className="flex flex-col gap-3">

            <button className="btn bg-white border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
              <span>🔔</span> Snooze 2 Weeks
            </button>

            <button className="btn bg-white border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
              <span>📂</span> Archive
            </button>

            <button className="btn bg-white border-gray-200 text-red-500 hover:bg-red-50 flex items-center justify-center gap-2">
              <span>🗑️</span> Delete
            </button>

          </div>
        </div>

        {/* Right Side: Stats & Goals (Span 8) */}
        <div className="lg:col-span-8 space-y-6">

          {/* Top Stats Row */}
          <div className="grid md:grid-cols-3 gap-4">

            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl py-8 px-4 text-center">
              <h2 className="text-[#244D3F] font-bold text-4xl">
                {days_since_contact}
              </h2>
              <p className="text-[#64748B] text-sm mt-1">Days Since Contact</p>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl py-8 px-4 text-center">
              <h2 className="text-[#244D3F] font-bold text-4xl">{goal}</h2>
              <p className="text-[#64748B] text-sm mt-1">Goal (Days)</p>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl py-8 px-4 text-center">
              <h2 className="text-[#244D3F] font-bold text-2xl mt-2">
                {next_due_date}
              </h2>
              <p className="text-[#64748B] text-sm mt-3">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal Card */}
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 flex justify-between items-center">
            <div>
              <h3 className="text-[#244D3F] font-bold text-lg">
                Relationship Goal
              </h3>
              <p className="text-gray-500 mt-1 text-sm">
                Connect every{" "}
                <span className="font-bold text-gray-800">{goal} days</span>
              </p>
            </div>

            <button className="btn btn-sm bg-gray-100 border-none text-gray-600 px-6">
              Edit
            </button>

          </div>

          {/* Quick Check-In Card */}
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8">
            <h3 className="text-[#244D3F] font-bold text-lg mb-6">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-4">

              <button className="flex flex-col items-center justify-center py-6 bg-[#F8FAFC] rounded-xl hover:bg-gray-100 transition-colors">
                <IoCallOutline className="text-2xl mb-2" />
                <span className="text-sm font-medium">Call</span>
              </button>

              <button className="flex flex-col items-center justify-center py-6 bg-[#F8FAFC] rounded-xl hover:bg-gray-100 transition-colors">
                <IoChatbubbleOutline className="text-2xl mb-2" />
                <span className="text-sm font-medium">Text</span>
              </button>

              <button className="flex flex-col items-center justify-center py-6 bg-[#F8FAFC] rounded-xl hover:bg-gray-100 transition-colors">
                <IoVideocamOutline className="text-2xl mb-2" />
                <span className="text-sm font-medium">Video</span>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
