import React, { useEffect, useRef } from "react";
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
  const currentPageLink = useRef<HTMLElement | null | undefined>(null);
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
      hasRan = true;
    }
  });

  return (
    <Router>
      <div className="flex justify-center bg-[var(--background-color)] text-[var(--lavender-blush)] font-roboto z-[0] h-screen w-screen">
        <main className="flex flex-col items-center my-6 w-[95%] h-[92%] rounded-[5px] bg-[var(--main-color)]">
          <nav className="rounded-[5px] flex justify-center h-[10%] mt-5 w-[97%]">
        
            <div className="flex items-center justify-center">
              <Link
                to="/"
                id="home"
                className="currentPage link"
                draggable={false}
              >
                HOME
              </Link>

              <Link 
                to="/about" 
                id="about" 
                className="link" 
                draggable={false}
              >
                ABOUT
              </Link>

              <Link
                to="/portofolio"
                id="portofolio"
                className="link"
                draggable={false}
              >
                PORTOFOLIO
              </Link>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portofolio" element={<Portofolio />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
