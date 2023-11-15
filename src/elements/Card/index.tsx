import React, { memo } from "react";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import Image from "next/image";

export default memo(() => {
  return (
    <div className="card w-[300px] max-h-[200px] overflow-hidden flex flex-col rounded-xl gap-y-2 bg-white">
      <div className="h-[20px] flex items-center py-4">
        <div className="w-2/12">
          <CiLocationOn className="mx-auto text-lg" />
        </div>
        <div className="w-11/12 font-semibold text-xs text-slate-500">
          Location Name
        </div>
      </div>
      <div className="flex">
        <div className="w-2/12 flex items-center justify-center">
          <span className="flex [writing-mode:vertical-lr] items-center gap-x-2 h-full text-sm font-semibold tracking-widest">
            30 / 4 / 2022
            <CiCalendar className="rotate-90 " />
          </span>
        </div>
        <div className="w-11/12">
          <Image
            src="/photo.jpg"
            alt=""
            width={1000}
            height={1000}
            className="rounded-tl-xl w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
});
