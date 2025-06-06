import React, { type ReactElement } from "react";

export default function Home(): ReactElement {
    return(
      <>
      <div className="flex justify-center bg-[var(--background-color)] text-white font-robotoc z-[0]">
        <main className="flex flex-col items-center my-6 w-[92dvw] h-[92dvh] rounded-[5px] bg-[var(--main-color)]">
          <nav className="rounded-[5px] flex justify-center h-[10%] mt-5 w-[97%] ">
            <div>
              <img src="" />
            </div>

            <ul className="flex items-center gap-x-24">
              <li>
                <a id="home" className="hovered">
                  HOME
                </a>
              </li>
              <li>
                <a id="about" className="">
                  ABOUT
                </a>
              </li>
              <li>
                <a id="portofolio" className="">
                  PORTOFOLIO
                </a>
              </li>
            </ul>
          </nav>

          <section className="flex rounded-[5px] w-[97%] h-[80%] mt-5 ">
            <div className="flex text-white text-[30px] justify-end items-center h-full w-1/2">
              <div className="inline-flex flex-col w-3/4 h-3/4 ">
                <h1>
                  <b>Cloud + Fullstack Engineer</b>
                </h1>
                <div className="flex">
                  <h1
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
                    className="flex text-[20px] justify-center items-center rounded-[10px] bg-[var(--darker-color)] w-[150px] h-[50px] cursor-pointer hover:bg-transparent border-[var(--darker-color)] border-3"
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
        </main>
      </div>

      {/*   
  <script src="/src/module.js"></script>
  <script>    
    keep_typing(["Hi, you can call me Fiona 👋","Glad To Meet You 😊"],150)
  </script> */}
    </>
)}