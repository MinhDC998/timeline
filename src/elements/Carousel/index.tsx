"use client";

import React, { memo, useEffect, useState, useRef } from "react";

import "./styles.scss";

interface IItem {
  name: string;
  image?: string;
  icon?: string;
}

const itemsDumpData: IItem[] = [
  {
    name: "element 1",
  },
  {
    name: "element 2",
  },
  {
    name: "element 3",
  },
  {
    name: "element 4",
  },
  {
    name: "element 5",
  },
];

export default function () {
  const ref = useRef<HTMLDivElement>(null);

  const [items, setItems] = useState<IItem[]>(itemsDumpData);
  const [count, setCount] = useState(0);

  const options = {
    showItems: 2,
    padding: 24,
  };

  const { padding, showItems } = options;

  useEffect(() => {
    console.log((ref.current?.clientWidth ?? 0) + padding);
    console.log(Math.ceil(count * ((ref.current?.clientWidth ?? 0) + padding)));
  }, []);

  const handle = (type: "next" | "prev") => () => {
    // setItems((prev) => {
    //   switch (type) {
    //     case "next":
    //       const next = prev.shift();

    //       return [...prev, next as IItem];

    //     case "prev":
    //       const pre = prev.pop();

    //       return [pre as IItem, ...prev];

    //     default:
    //       return [];
    //   }
    // });

    setCount((count) => (type === "prev" ? count + 1 : count - 1));
  };

  return (
    <div
      className=" bg-slate-500 relative overflow-x-hidden"
      style={{ paddingLeft: `${padding}px` }}
    >
      <div
        className={`absolute top-[50%] left-[10px] rounded-full border bg-white flex items-center justify-center z-10`}
        onClick={handle("prev")}
      >
        prev
      </div>
      <div
        className={`w-full flex gap-x-12 transition duration-150 ease-linear`}
        style={{
          transform: `translateX(${Math.ceil(
            count * ((ref.current?.clientWidth ?? 0) + padding)
          )}px)`,
          gap: `0 ${padding}px`,
        }}
      >
        {items.map((v, i) => {
          return (
            <div
              key={i}
              ref={ref}
              className="flex items-center justify-center grow-0 shrink-0 min-h-[300px] rounded bg-slate-300"
              style={{
                flexBasis: `calc(${100 / showItems}% - ${padding}px)`,
              }}
            >
              {v?.name}
            </div>
          );
        })}
      </div>
      <div
        className={`absolute top-[50%] right-[10px] rounded-full border bg-white flex items-center justify-center p-2 z-10`}
        onClick={handle("next")}
      >
        next
      </div>
    </div>
  );
}
