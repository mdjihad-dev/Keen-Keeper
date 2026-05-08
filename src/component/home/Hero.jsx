import React from 'react';
import { MdAdd } from 'react-icons/md';

const Hero = () => {
    return (
      <section className="max-w-7xl mx-auto flex justify-center items-center my-28">
        <div className="max-w-4xl text-center space-y-4">
          <h2 className="text-5xl font-semibold text-[#1F2937]">
            Friends to keep close in your life
          </h2>
          <p className="text-[#64748B] max-w-xl text-center mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <button className="btn bg-[#244D3F] text-white font-semibold">
            {" "}
            <MdAdd />
            Add a Friend
          </button>
        </div>
      </section>
    );
};

export default Hero;