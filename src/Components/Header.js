import React from "react";
import TypeWriter from "react-typewriter";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;

    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <>
      <div
        class='bg-[url("https://images.pexels.com/photos/11346010/pexels-photo-11346010.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")] h-screen w-full bg-cover bg-center linear-gradient'
        id="home"
      >
        <div class="flex flex-col justify-center items-center ">
          <nav id="nav-wrap">
            <ul id="nav" className="nav">
              <br />
              <br />

              <nav class=" text-center bg-white px-2 sm:px-4 py-2.5 dark:bg-purple-600 fixed w-full z-20 top-0 center-0 border-b border-purple-700 dark:border-purple-800 text-7xl text-white-900 dark:text-white "></nav>
              <a
                className="smoothscroll"
                href="#home"
                class="py-2 pr-4 pl-3 text-white-700  font-bold rounded hover:bg-gray-100 font-semibold"
              >
                Home
              </a>

              <a
                className="smoothscroll"
                href="#about"
                class=" py-2 pr-4 pl-3 text-black-700  font-bold rounded hover:bg-gray-100  font-semibold"
              >
                About
              </a>

              <a
                className="smoothscroll"
                href="#resume"
                class=" py-2 pr-4 pl-3 text-black-700  font-bold rounded hover:bg-gray-100  font-semibold"
              >
                Resume
              </a>

              <a
                className="smoothscroll"
                href="#works"
                class=" py-2 pr-4 pl-3 text-black-700  font-bold rounded hover:bg-gray-100  font-semibold"
              >
                Works
              </a>

              <a
                className="smoothscroll"
                href="#contact"
                class=" py-2 pr-4 pl-3 text-black-700 font-bold rounded hover:bg-gray-100 font-semibold"
              >
                Contact
              </a>
            </ul>
          </nav>
        </div>

        <br />

        <div className="row banner">
          <div className="banner-text">
            <h1 class="text-xl font-semibold text-white-300 text-white flex justify-center mb-2 pt-64 text-5xl font-bold text-center text-white">
              <TypeWriter typing={0.5}>
                {name ? `I'm ${name}.` : null}
              </TypeWriter>
            </h1>

            <br />

            <h1>
              <h2 class="text-3xl text-center pt-4 text-white">
                Living in chennai..working as a FrontEnd developer!.
              </h2>
            </h1>

            {<ul className="social">{networks}</ul>}
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </div>
    </>
  );
};

export default Header;
