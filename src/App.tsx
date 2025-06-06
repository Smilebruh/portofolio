import React from "react";
import Home from "./Home";
import About from "./About";
import Portofolio from "./Portofolio";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function App(): React.ReactElement {
  return (
    <Router>
      <div className="flex justify-center bg-[var(--background-color)] text-white font-roboto z-[0] h-screen w-screen">
        <main className="flex flex-col items-center my-6 w-[92dvw] h-[92dvh] rounded-[5px] bg-[var(--main-color)]">
          <nav className="rounded-[5px] flex justify-center h-[10%] mt-5 w-[97%] ">
            {/* <div>
              <img src="" />
            </div> */}

            <ul className="flex items-center gap-x-24">
              <li>
                <Link to="/ " id="home" className="currentPage link" draggable={false}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about" id="about" className="link" draggable={false}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/portofolio" id="portofolio" className="link" draggable={false}>
                  PORTOFOLIO
                </Link>
              </li>
            </ul>
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
