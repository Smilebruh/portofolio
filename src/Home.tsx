import React, { useRef, useEffect } from "react";
import { keep_typing } from "./effect.ts";
import { Link }  from 'react-router-dom';

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
    <>
      <section className="flex flex-col items-center rounded-[5px] w-[97%] lg:h-[80%] lg:mt-5 lg:flex-row lg:justify-start mt-15">
        <div className="flex relative justify-center items-center w-1/2 lg:hidden">
          <img
            src="/myPortofolio/images/KawaiiFiona.webp"
            className="w-3/4 p-1/4 z-[2] rounded-full bg-[var(--bg-fiona)] animate-profileanimation"
          />
        </div>
        <div className="flex text-[var(--lavender-blush)] lg:text-[30px] text-[25px] justify-end items-center h-full lg:w-1/2 w-full animate-textanimation ">
          <div className="inline-flex flex-col lg:w-3/4 w-full h-3/4">
            <h1 className="flex justify-center lg:inline">
              <b>ML/AI + Fullstack Engineer</b>
            </h1>
            <div className="flex lg:justify-start justify-center">
              <h1
                ref={type_text}
                id="type_text"
                className="animate-cursorTyping pr-1 h-10 mt-10 font-bold lg:mt-5"
              ></h1>
            </div>
            <p className="text-[17px] lg:mt-5 mt-15 lg:text-left text-center">
              I'm a passionate software engineering student to explore and learn
              new technology. Feel free being my friend.
            </p>
            <div className="flex pt-10 lg:justify-start justify-center">
              <button
                id="random-button"
                className="flex text-[20px] justify-center items-center rounded-[10px] bg-[var(--black)] w-[150px] h-[50px] cursor-pointer hover:bg-transparent hover:border-white border-[var(--black)] border-2"
              >
                Contact Me
              </button>
            </div>

            <footer className="lg:mt-15 mt-34 lg:ml-2 w-full flex lg:justify-start justify-center gap-4 ">
              <Link to="https://www.kaggle.com/smilehacking">
                <img
                  src="/myPortofolio/images/189_Kaggle_logo_logos-512.webp"
                  className="w-10"
                />
              </Link>
              <Link to="https://github.com/smilebruh/smilebruh" className="flex justify-center items-center">
                <img 
                  src="/myPortofolio/public/images/github-mark-c791e9551fe4/github-mark/github-mark.png" 
                  className="w-9 bg-[var(--lavender-blush)] rounded-full"
                />
              </Link>
              <Link to="https://stackoverflow.com/users/29076795/smilebruh">
                <img 
                  src="/myPortofolio/public/images/Stack_Overflow_icon.svg" 
                  className="w-9"  
                />
              </Link> 
              <Link to="https://www.instagram.com/dimasalx.sa_/">
                <img 
                  src="/myPortofolio/public/images/ig.png" 
                  className="w-9"
                />
              </Link>
            </footer>
          </div>
        </div>

        <div className="hidden lg:flex relative justify-center items-center w-1/2">
          <img
            src="/myPortofolio/images/KawaiiFiona.webp"
            className="w-3/4 p-1/4 z-[2] rounded-full bg-[var(--bg-fiona)]"
          />
        </div>
      </section>
    </>
  );
}
