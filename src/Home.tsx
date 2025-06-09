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
   
        <section className="flex flex-col items-center rounded-[5px] w-[97%] md:h-[80%] md:mt-5 md:flex-row md:justify-start mt-15">
          <div className="flex relative justify-center items-center w-1/2 md:hidden">
            <img
              src="/myPortofolio/images/KawaiiFiona.png"
              className="w-3/4 p-1/4 z-[2] rounded-full bg-[var(--bg-fiona)]"
            />
          </div>
          <div className="flex text-[var(--lavender-blush)] text-[30px] justify-end items-center h-full md:w-1/2 w-full ">
            <div className="inline-flex flex-col md:w-3/4 w-full h-3/4">
              <h1>
                <b>Cloud + Fullstack Engineer</b>
              </h1>
              <div className="flex">
                <h1
                  ref={type_text}
                  id="type_text"
                  className="animate-cursorTyping pr-1 h-10 mt-10 font-bold md:mt-5 "
                ></h1>
              </div>
              <p className="text-[17px] md:mt-5 mt-15">
                I'm a passionate software engineering student to explore and
                learn new technology. Feel free being my friend.
              </p>
              <div className="flex pt-10">
                <button
                  id="random-button"
                  className="flex text-[20px] justify-center items-center rounded-[10px] bg-[var(--black)] w-[150px] h-[50px] cursor-pointer hover:bg-transparent hover:border-white border-[var(--black)] border-2"
                >
                  More
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex relative justify-center items-center w-1/2 ">
            <img
              src="/myPortofolio/images/KawaiiFiona.png"
              className="w-3/4 p-1/4 z-[2] rounded-full bg-[var(--bg-fiona)]"
            />
          </div>
        </section>
  );
}
