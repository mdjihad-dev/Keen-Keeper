import React from "react";
import { useNavigate, useRouteError } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-3xl w-full text-center">
        {/* Visual Element */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-black leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-1 bg-[#244D3F] rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Page Not Found
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto leading-relaxed">
            The resource you are looking for might have been removed, had its
            name changed, or is temporarily unavailable.
          </p>

          {/* Technical Detail (Optional) */}
          {error && (
            <p className="text-sm text-red-400 font-mono mt-2">
              Error Status: {error.statusText || error.message}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 text-sm font-bold text-[#244D3F] border border-[#244D3F] rounded-lg hover:bg-green-50 transition-all duration-300 w-full sm:w-auto"
          >
            GO BACK
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 text-sm font-bold text-white bg-[#244D3F] border border-[#244D3F] rounded-lg hover:bg-[#1a3a30] transition-all duration-300 shadow-lg shadow-green-100 w-full sm:w-auto uppercase tracking-wider"
          >
            Return Home
          </button>
        </div>

        {/* Branding Footer */}
        <div className="mt-20 border-t border-gray-100 pt-8">
          <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">
            System Error Code: 0x404_Access_Denied
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
