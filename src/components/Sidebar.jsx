import React from "react";
import { MdLegendToggle, MdSpaceDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img src="/logo.png" alt="logo" className="w-10" />
          <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            <MdLegendToggle size={24} />
          </button>
        </div>

        <ul className="flex-1 px-3">
          <li className="flex items-center py-2 px-3 relative my-1 font-medium rounded-md cursor-pointer ">
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center py-2 px-3 relative my-1 font-medium rounded-md cursor-pointer ">
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center py-2 px-3 relative my-1 font-medium rounded-md cursor-pointer ">
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center py-2 px-3 relative my-1 font-medium rounded-md cursor-pointer ">
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center py-2 px-3 relative my-1 font-medium rounded-md cursor-pointer ">
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </li>
        </ul>

        <div className="border-t flex p-4 items-center">
          <FaRegUserCircle size={32} />

          <div className=" w-52 items-center ml-4">
            <h4 className="font-semibold">John Doe</h4>
            <span className="text-sm">johndoe@gmail.com</span>
          </div>

          <BsThreeDotsVertical size={20} />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
