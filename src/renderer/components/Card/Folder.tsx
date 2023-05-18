import React from "react";
import { BsFolder2 } from "react-icons/bs";

export default function Folder({
  name,
  count,
}: {
  name: string;
  count: number;
}) {
  return (
    <h4 className="flex items-center relative mb-2">
      <BsFolder2 className=" text-blue-500 text-md" />
      <span className="ml-2 text-sm truncate w-28">{name}</span>
      <span className="ml-2 text-sm absolute right-2 text-gray-400">
        {count}
      </span>
    </h4>
  );
}
