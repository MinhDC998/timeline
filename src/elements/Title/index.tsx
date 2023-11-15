import React, { memo } from "react";

interface ITitle {
  title: string;
  children: React.ReactNode;
}

export default memo(({ title, children }: ITitle) => {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="font-bold py-1 text-2xl border-b border-rose-200 w-full capitalize">
        {title}
      </div>

      {children}
    </div>
  );
});
