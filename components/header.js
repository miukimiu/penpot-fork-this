import React from "react";
import logo from "../images/penpot-logo.png";
import githubLogo from "../images/github-mark.svg";

const Header = () => {
  return (
    <header className="w-full text-gray-700 bg-white shadow-sm body-font">
      <div className="container flex flex-row items-center p-2 mx-auto place-content-between">
        <div className="flex">
          <a href="https://penpotfest.org/" className="mr-5 font-medium">
            <img src={logo} alt="Penpot Fest" className="w-40" />
          </a>
        </div>

        <div className="flex">
          <a
            href="https://github.com/miukimiu/penpot-fork-this"
            className="ml-5 font-medium "
          >
            <img src={githubLogo} alt="github" className="w-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
