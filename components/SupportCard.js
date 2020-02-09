import React from "react";

export default function SupportCard() {
  return (
    <div className="w-full max-w-md ">
      <div className="rounded-lg  m-4 bg-purple-200 p-4 shadow-lg">
        <div className="text-xl overflow-hidden truncate font-bold font-nice">Check for extended maintenance -Lifecycle policy</div>
        <span className="mt-2 text-sm tracking-wide text-gray-600">Last updated: Fri 07 Feb 2020, 04:06</span>
        <div className="mt-4">
          <span className="rounded-lg border bg-teal-300 text-gray-700 uppercase font-bold px-3 py-2 text-lg font-pop w-64">REPRODUCTION</span>
        </div>
        <div className="border-t-2 border-purple-100 h-1 w-full mt-4"></div>
        <div className="flex justify-between items-center mt-8">
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-pop font-semibold py-2 px-4 rounded inline-flex items-center  shadow-lg">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 2v10h16V6H2z" />
            </svg>
            <span>Open</span>
          </button>
        </div>
      </div>
    </div>
  );
}
