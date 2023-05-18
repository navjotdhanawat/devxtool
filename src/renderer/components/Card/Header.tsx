import React from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';

export default function Header() {
  return (
    <div id="drag-region" className="flex flex-row titlebar bg-sidebar">
      <div className="basis-2/12 min-w-180 hidden md:block">
        <div className="flex">
          <div className=" bg-red-500 m-2 rounded-full w-3 h-3">
            {/* <HiOutlineXMark size={12} className="m-[2px]" /> */}
          </div>
          <div className=" bg-yellow-500 w-3 h-3 m-2 rounded-full" />
          <div className=" bg-green-500 w-3 h-3 m-2 rounded-full" />
        </div>
      </div>
      <div className="basis-2/12 min-w-180  bg-file-section">
        <div className="flex md:hidden">
          <div className=" bg-red-500 w-3 h-3 m-2 rounded-full" />
          <div className=" bg-yellow-500 w-3 h-3 m-2 rounded-full" />
          <div className=" bg-green-500 w-3 h-3 m-2 rounded-full" />
        </div>
      </div>
      <div className="basis-8/12 sm:basis-10/12 min-w-180 " />
    </div>
  );
}
