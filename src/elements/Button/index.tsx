import React, { memo } from "react";

interface IBtn {
  label: string;
  type?: "button" | "reset" | "submit";
}

export default memo(({ type = "button", label }: IBtn) => {
  return (
    <button
      className="rounded bg-blue-400 text-white text-sm flex items-center justify-center font-semibold py-2 px-1 w-1/12"
      type={type}
    >
      {label}
    </button>
  );
});
