"use client";

import { useEffect, useRef, useState, useCallback } from "react";

import Home from "@/components/Home/index";
import Notes from "@/components/Notes/index";

import "./styles.scss";

export default function Page() {
  const [currentStage, setCurrentStage] = useState(0);
  const title = ["Home", "About"];
  const length = 2;

  const handleScroll = useCallback((event: WheelEvent) => {
    const delta = event.deltaY;

    if (delta > 0) {
      setCurrentStage((prev) =>
        prev - 1 < -length + 1 ? -length + 1 : prev - 1
      );
    } else {
      setCurrentStage((prev) => (prev + 1 > 0 ? 0 : prev + 1));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, {
      passive: true,
    });
  }, []);

  console.log(new Array(length));

  return (
    <main>
      <div id="header">
        <div id="title">
          MinT -
          <div
            id="page"
            style={{ transform: `translateY(calc(${currentStage * 20}px))` }}
          >
            {title.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
        </div>
      </div>
      <div id="nav">
        {Array(length)
          .fill(0)
          .map((v, i) => (
            <span
              key={i}
              className={`dot ${currentStage === -i ? "active" : ""}`}
            />
          ))}
      </div>

      <div
        id="main"
        style={{ transform: `translateY(calc(${currentStage * 100}vh))` }}
      >
        <Home />
        <Notes />
      </div>
    </main>
  );
}
