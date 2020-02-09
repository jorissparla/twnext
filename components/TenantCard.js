import React from "react";

const TenantCard = () => {
  const [isOn, toggle] = React.useState(false);
  return (
    <div className="w-full max-w-lg ">
      <div
        className="rounded shadow-lg m-4 bg-blue-100 p-4"
        style={{ backgroundImage: "linear-gradient(to right bottom,rgba(29, 161, 242, 0.4), white)" }}
      >
        <div className="flex justify-start items-center">
          <div className="rounded-full h-16 w-16 bg-green-300 text-green-800 p-3  flex items-center justify-center text-lg font-semibold shadow-lg">
            Live
          </div>
          <div className="ml-8 flex flex-col">
            <div className=" text-2xl font-bold text-gray-700">Ames Company</div>
            <span className="text-gray-600 text-sm">Updated 14 days ago</span>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div className="text-lg text-gray-700 uppercase font-semibold">Sydney</div>
          <div className="uppercase text-gray-700 tracking-wider mr-4">Ames</div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-white flex rounded-lg bg-indigo-500 uppercase px-2 py-1 mr-3  tracking-wider ">PRD:LNCE 2020.03</span>
          <span className="text-xs text-white flex rounded-lg bg-orange-500 uppercase px-2 py-1 mr-3 font-semibold">DEV:LNCE 2020.03</span>
          <span className="text-xs text-white flex rounded-lg bg-blue-500 uppercase px-2 py-1 mr-3 font-semibold">TST:LNCE 2020.03</span>
        </div>
        <div className="border-t-2 border-gray-400 h-1 w-full mt-2"></div>
        <div className="ml-4 flex justify-between items-center mt-4">
          <div className="flex flex-col">
            <div className="text-gray-700 font-semibold">PM</div>
            <div className="text-gray-700 text-sm text-left">PM note entered</div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-700 font-semibold">CSM</div>
            <div className="text-gray-700 text-sm text-left">CSM Not know</div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-700 font-semibold">Go Live Date</div>
            <div className="text-gray-700 text-sm text-left">February 22nd, 2020</div>
          </div>
        </div>
        <div className="ml-2 flex justify-between items-center mt-6">
          <button className=" border-2 border-gray-400 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>INCIDENTS</span>
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
          </button>
          <div className="flex justify-between items-center pt-4 mb-4" onClick={() => toggle(!isOn)}>
            {isOn ? (
              <span className="border rounded-full border-grey bg-blue-500  flex items-center cursor-pointer w-12 justify-start">
                <span className="rounded-full border w-6 h-6 border-grey shadow-inner  shadow"></span>
              </span>
            ) : (
              <span className="border rounded-full border-grey flex items-center cursor-pointer w-12 bg-green justify-end">
                <span className="rounded-full border w-6 h-6 border-grey shadow-inner  shadow"></span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TenantCard;
