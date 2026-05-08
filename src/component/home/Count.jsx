import React from 'react';

const Count = () => {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="max-xl space-y-3 text-center bg-white shadow-lg rounded-xl py-10 px-8">
          <h2 className="text-[#244D3F] font-semibold text-3xl">10</h2>
          <p className="text-[#64748B]">Total Friends</p>
        </div>
        <div className="max-xl space-y-3 text-center bg-white shadow-lg rounded-xl py-10 px-8">
          <h2 className="text-[#244D3F] font-semibold text-3xl">03</h2>
          <p className="text-[#64748B]">On Track</p>
        </div>
        <div className="max-xl space-y-3 text-center bg-white shadow-lg rounded-xl py-10 px-8">
          <h2 className="text-[#244D3F] font-semibold text-3xl">06</h2>
          <p className="text-[#64748B]">Need Attention</p>
        </div>
      </div>
    );
};

export default Count;