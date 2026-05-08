import React, { use } from 'react';
import { Link } from 'react-router';

const FriendCard = ({ data }) => {
const { name, picture, status, tags } = data;

  return (
    <Link to={'/friendDetails'}>
      <div className="shadow-lg text-center rounded-xl py-10 space-y-2">
        <img
          className="mx-auto w-32 h-auto object-cover rounded-full"
          src={picture}
          alt=""
        />
        <h2 className="text-xl font-bold">{name}</h2>
        <h3 className="text-base font-semibold">62 Days Ago</h3>
        {tags.map((tag, index) => (
          <p key={index} className="bg-[#CBFADB] w-16 rounded-lg mx-auto px-2">{tag}</p>
        ))}
        <p
          className={`px-3 py-1 rounded-full text-white text-sm inline-block ${
            status === "overdue"
              ? "bg-[#EF4444]"
              : status === "on-track"
                ? "bg-[#244D3F]"
                : status === "almost due"
                  ? "bg-[#EFAD44]"
                  : "bg-gray-500"
          }`}
        >
          {status}
        </p>
      </div>
    </Link>
  );
};

export default FriendCard;