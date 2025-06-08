import React, { useEffect, useRef, type RefObject  } from "react";
import Home from "./Home";
import About from "./About";
import Portofolio from "./Portofolio";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const linkId: string[] = ["home", "about", "portofolio"];

function changestyle(
  currentLink: HTMLElement | null,
  anotherLink: (HTMLElement | null)[],
  styleClass: string
): HTMLElement | undefined | null {
  if (!currentLink) return;
  let returnLink: HTMLElement | null = null;
  currentLink.classList.add(styleClass);

  for (const eachlink of anotherLink) {
    if (eachlink?.classList.contains(styleClass)) {
      returnLink = eachlink;
      eachlink.classList.remove(styleClass);
    }
  }

  return returnLink;
}

export default function App(): React.ReactElement {
  let hasRan: boolean = false;
  hasRan = true; 
  const menu: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

  const currentPageLink: React.RefObject<HTMLElement | null | undefined> = useRef<HTMLElement | null | undefined>(null);
  const linkRef: (HTMLElement | null)[] = Array(linkId.length).fill(null);

  useEffect(() => {
    if (!hasRan) {
      linkId.forEach(
        (ref, index) => (linkRef[index] = document.getElementById(ref))
      ); //assign the link object
      linkRef.forEach((ref) => {
        const anotherLink: (HTMLElement | null)[] = linkRef.filter(
          (element) => element !== ref
        );
        ref?.addEventListener(
          "click",
          () =>
            (currentPageLink.current = changestyle(
              ref,
              anotherLink,
              "currentPage"
            ))
        );
        ref?.addEventListener(
          "mouseover",
          () =>
            (currentPageLink.current = changestyle(
              ref,
              anotherLink,
              "currentPage"
            ))
        );
        ref?.addEventListener("mouseout", () => {
          const anotherLinkBefore: (HTMLElement | null)[] = linkRef.filter(
            (element) => element !== currentPageLink.current
          );
          changestyle(
            currentPageLink.current as HTMLElement | null,
            anotherLinkBefore,
            "currentPage"
          );
        });
      });
      
      menu.current?.addEventListener("click", () => {
        
      });


      hasRan = true;
    }
  });

  // rotate-[-45deg] translate-y-[11px]
  //rotate-[45deg]

  return (
    <Router>
      <div className="flex justify-center bg-[var(--background-color)] text-[var(--lavender-blush)] font-roboto z-[0] h-screen w-screen">
        <main className="flex flex-col items-center my-6 lg:w-[95%] lg:h-[92%] lg:rounded-[5px] bg-[var(--main-color)] w-screen h-screen">
          <div className="lg:hidden flex justify-end w-screen">
            <div ref={menu}  className=" flex w-[15%] h-[50%] flex-col items-center gap-2 m-[5%] cursor-pointer">
              <div className="line animate-lineRightDiagonalfor">1</div>
              <div className="line animate-vanishingLinefor">2</div>
              <div className="line animate-lineLeftDiagonalfor">3</div>
            </div>

            {/* <div id="x-logo" className=" w-[15%] h-[50%] flex-col items-center gap-[20%] m-[5%] cursor-pointer">
              <div className="diagonalLine rotate-45 translate-y-[100%]">1</div>
              <div className="diagonalLine rotate-[-45deg]">2</div>
            </div> */}
          </div>
          <nav className="rounded-[5px] flex justify-center h-[10%] mt-5 w-[97%]">
        
            <div className="lg:flex items-center justify-center hidden">
              <Link
                to="/myPortofolio/"
                id="home"
                className="currentPage link"
                draggable={false}
              >
                HOME
              </Link>

              <Link 
                to="/myPortofolio/about" 
                id="about" 
                className="link" 
                draggable={false}
              >
                ABOUT
              </Link>

              <Link
                to="/myPortofolio/portofolio"
                id="portofolio"
                className="link"
                draggable={false}
              >
                PORTOFOLIO
              </Link>
            </div>
          </nav>

          <Routes>
            <Route path="/myPortofolio/" element={<Home />} />
            <Route path="/myPortofolio/about" element={<About />} />
            <Route path="/myPortofolio/portofolio" element={<Portofolio />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
