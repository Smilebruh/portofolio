import React, { useRef, useEffect } from "react";
import { keep_typing } from "./effect.ts";

export default function Home(): React.ReactElement {

  const type_text = useRef<HTMLHeadingElement>(null);
  const hasRan = useRef(false);

  useEffect(() => {
    if (type_text.current && !hasRan.current) {
      keep_typing(["Hi, you can call me Fiona 👋", "Glad To Meet You 😊"], 150);
      hasRan.current = true;
    }
  }, []);

  return (
   
        <section className="flex rounded-[5px] w-[97%] h-[80%] mt-5 ">
          <div className="flex text-white text-[30px] justify-end items-center h-full w-1/2">
            <div className="inline-flex flex-col w-3/4 h-3/4 ">
              <h1>
                <b>Cloud + Fullstack Engineer</b>
              </h1>
              <div className="flex">
                <h1
                  ref={type_text}
                  id="type_text"
                  className="animate-cursorTyping pr-1 h-10 mt-5 font-bold"
                ></h1>
              </div>
              <p className="text-[15px] mt-5">
                I'm a passionate software engineering student to explore and
                learn new technology. Feel free being my friend.
              </p>
              <div className="flex pt-10">
                <button
                  id="random-button"
                  className="flex text-[20px] justify-center items-center rounded-[10px] bg-[var(--dark-color)] w-[150px] h-[50px] cursor-pointer hover:bg-transparent border-[var(--dark-color)] border-3"
                >
                  More
                </button>
              </div>
            </div>
          </div>
          <div className="flex relative justify-center items-center w-1/2 ">
            <img
              src="/src/image/Fiona.png"
              className="w-3/4 p-1/4 z-[2] rounded-full bg-gray-200"
            />
          </div>
        </section>
  );
}
