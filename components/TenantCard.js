import React from "react";
import { format, formatDistanceToNow as distanceInWordsToNow } from "date-fns";
import _ from "lodash";

const indexObj = {
  PRD: { id: 1, color: "bg-teal-500" },
  TRN: { id: 2, color: "bg-blue-500" },
  TST: { id: 3, color: "bg-orange-500" },
  DEV: { id: 4, color: "bg-orange-500" },
  DEM: { id: 5, color: "bg-orange-500" }
};

const getTags = tenants =>
  tenants
    .map(t => {
      const postfix = t.name.split("_")[1];

      const index = indexObj[postfix]?.id || 999;
      const color = indexObj[postfix]?.color || "bg-teal-500";
      const { tenant_status, operational_status, process_status } = t;
      let tag = "";
      let tooltip = "";
      if (tenant_status) {
        if (!(tenant_status === "active" && operational_status === "online" && process_status === "idle")) {
          tag = `${tenant_status[0].toUpperCase()}-${operational_status[0].toUpperCase()}-${process_status.slice(0, 2).toUpperCase()}`;
        }
        tooltip = `${tenant_status}-${operational_status}-${process_status}`;
      }
      return { index, color, ...t, tag, tooltip };
    })
    .sort((a, b) => (a.index > b.index ? 1 : -1));

const TenantCard = ({ details }) => {
  const { customer, tenants, csm, pm, golivecomments, golivedate } = details;
  const farm = tenants[0]?.farm;
  const prefix = tenants && tenants.length && tenants.length > 0 ? tenants[0].name.split("_")[0] : "";
  const max = _.maxBy(tenants, t => t.lastupdated)?.lastupdated;
  // console.log(max ? format(parseInt(max), "yyyMMdd") : "");
  const max2 = max ? distanceInWordsToNow(parseInt(max)) : "";
  const tags = getTags(tenants);
  console.log("tags", tags);
  // const prefix = tenants[0] ? (tenants[0].split("_") ? tenants[0].split("_")[0] : "") : "";
  // console.log(tenants);
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
          <div className="ml-8 flex flex-col overflow-hidden">
            <div className=" text-2xl font-bold text-gray-700 overflow-hidden truncate">{customer.name || "Ames Company"}</div>
            <span className="text-gray-600 text-sm">Updated {max2 || " 14 days"} ago</span>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div className="text-lg text-gray-700 uppercase font-semibold">{farm || "Sydney"}</div>
          <div className="uppercase text-gray-700 tracking-wider mr-4">{prefix || ""}</div>
        </div>
        <div className="flex justify-between items-center mt-4">
          {tags.map(({ id, name, color, version, tooltip, tag }) => {
            let shortname = "";
            if (customer === "Infor") {
              shortname = name;
            } else shortname = name.split("_")[1];
            // const color = shortname.endsWith("PRD") ? "rgba(46, 202, 19, 1)" : shortname.endsWith("TRN") ? "#1da1f2" : "rgba(0,0,0,0.5)";
            // const color="bg-teal-300"
            return (
              <span key={tag.index} className={`text-xs text-white flex rounded-lg  uppercase px-2 py-1 mr-3  tracking-wider ${color}`}>
                {shortname}:{version}
              </span>
            );
          })}
        </div>
        <div className="border-t-2 border-gray-400 h-1 w-full mt-2"></div>
        <div className="ml-4 flex justify-between items-center mt-4">
          <div className="flex flex-col">
            <div className="text-gray-700 font-semibold">PM</div>
            <div className="text-gray-700 text-sm text-left">{pm || "PM note entered"}</div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-700 font-semibold">CSM</div>
            <div className="text-gray-700 text-sm text-left">{csm || "CSM Not know"}</div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-700 font-semibold">Go Live Date</div>
            <div className="text-gray-700 text-sm text-left">{format(parseInt(golivedate), "MMM, dd, yyyy") || "February 22nd, 2020"}</div>
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
