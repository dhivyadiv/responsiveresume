import React from "react";

const Footer = ({ data }) => {
  if (data) {
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
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>
          <br />

          <div>
            <footer class="fixed bottom-0 left-0 z-20 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2022{" "}
                <a href="https://flowbite.com/" class="hover:underline">
                  Government™
                </a>
                . All Rights Reserved.
              </span>
              <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 font-semibold">
                <li>
                  <a href="/about" class="mr-4 hover:underline md:mr-6 ">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="dhivyabharathi"
                    class="mr-4 hover:underline md:mr-6 font-semibold"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="dhivyabharathi"
                    class="mr-4 hover:underline md:mr-6 font-semibold"
                  >
                    Licensing
                  </a>
                </li>
                <li>
                  <a href="/contact" class="hover:underline font-semibold">
                    Contact
                  </a>
                </li>
              </ul>
            </footer>
          </div>

          <br />
          <ul className="copyright">
            <li class="flex justify-center ...">
              Made by{" "}
              <a
                title="DHIVYA"
                href="http://www.dhivyadiv.com/"
                class="... ring-2 ring-pink-300 ring-inset"
              >
                DHIVYA
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
