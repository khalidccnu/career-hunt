import React from "react";
import { Link } from "react-router-dom";
import { UilFacebookF, UilInstagram, UilTwitter } from "./Unicons.jsx";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-900 py-16 text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0 md:space-x-3">
          <div className="max-w-sm">
            <h1 className="navbar-brand font-semibold text-xl mb-3">
              Career Hunt
            </h1>
            <p className="text-gray-500">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <ul className="flex mt-4 space-x-1">
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="inline-flex justify-center items-center bg-white w-6 h-6 rounded-full"
                >
                  <UilFacebookF className="w-4 fill-[#337FFF] hover:rotate-[360deg] transition-transform duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="inline-flex justify-center items-center bg-white w-6 h-6 rounded-full"
                >
                  <UilTwitter className="w-4 fill-[#33CCFF] hover:rotate-[360deg] transition-transform duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="inline-flex justify-center items-center bg-white w-6 h-6 rounded-full"
                >
                  <UilInstagram className="w-4 fill-[#8F39CE] hover:rotate-[360deg] transition-transform duration-300" />
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 basis-2/4">
            <div>
              <h5 className="font-semibold">Company</h5>
              <ul className="text-xs mt-3 space-y-2">
                <li>
                  <Link to="#" className="hover:text-gradient">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gradient">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gradient">
                    Latest News
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gradient">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Support</h5>
              <ul className="text-xs mt-3 space-y-2">
                <li>
                  <Link to="#" className="hover:text-gradient">
                    Help Desk
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gradient">
                    Become a Partner
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Contact</h5>
              <p className="text-xs mt-3 leading-5">
                524 Broadway, NYC <br /> +1 777-978-5570
              </p>
            </div>
          </div>
        </div>
        <div className="border border-gray-800 my-5"></div>
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; Career Hunt. All Rights Reserved</p>
          <p>Powered by Career Hunt</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
