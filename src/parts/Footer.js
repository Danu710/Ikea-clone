import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoIkea1 from "../img/ikea1.png";

function SitemapLinks({ isActive, setActive, children, title }) {
  return (
    <div className="px-4 w-full md:w-2/12 mb-4 md:mb-0 accordion">
      <h5 className="text-lg font-semibold mb-2 relative">
        {title}
        <button
          onClick={() => setActive(isActive)}
          className={[
            "absolute block md:hidden right-0 transform -translate-y-1/2 focus:outline-none transition duration-200 top-1/2",
            isActive ? "rotate-0" : "rotate-180",
          ].join(" ")}>
          <svg
            width="20"
            height="9"
            viewBox="0 0 20 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.197257 0.403676C0.526597 -0.0396672 1.15298 -0.132085 1.59632 0.197256L9.75 6.25427L17.9037 0.197256C18.347 -0.132085 18.9734 -0.0396672 19.3027 0.403676C19.6321 0.847019 19.5397 1.4734 19.0963 1.80274L10.3463 8.30274C9.99227 8.56575 9.50773 8.56575 9.15368 8.30274L0.403676 1.80274C-0.0396667 1.4734 -0.132084 0.847019 0.197257 0.403676Z"
              fill="black"
            />
          </svg>
        </button>
      </h5>
      <ul
        className={[
          "md:h-auto md:visible md:opacity-100 overflow-hidden transition duration-200",
          isActive ? "h-0 invisible opacity-0" : "opacity-100",
        ].join(" ")}>
        {children}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [active, setActive] = useState(null);
  return (
    <footer aria-label="Site Footer" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4 justify-center">
          <SitemapLinks
            setActive={setActive}
            isActive={active === 1 ? null : 1}
            title="Overview">
            <li>
              <Link to="#" className="hover:underline py-1 block">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline py-1 block">
                Career
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline py-1 block">
                Contact Us
              </Link>
            </li>
          </SitemapLinks>

          <SitemapLinks
            setActive={setActive}
            isActive={active === 2 ? null : 2}
            title="Company">
            <li>
              <Link to="#" className="hover:underline py-1 block">
                Terms & Conds
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline py-1 block">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline py-1 block">
                For Developer
              </Link>
            </li>
          </SitemapLinks>

          <SitemapLinks
            setActive={setActive}
            isActive={active === 3 ? null : 3}
            title="Explore">
            <li>
              <Link to="/" className="hover:underline py-1 block">
                Terms & Conds
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline py-1 block">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline py-1 block">
                For Developer
              </Link>
            </li>
          </SitemapLinks>
        </div>

        <div className="mt-16 ">
          <ul className="flex justify-center gap-6 sm:justify-center">
            <li>
              <a
                to="/"
                rel="noreferrer"
                target="_blank"
                className="text-grey-300 transition hover:bg-gray-700">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                to="/"
                rel="noreferrer"
                target="_blank"
                className="text-grey-300  transition hover:bg-gray-700">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                to="/"
                rel="noreferrer"
                target="_blank"
                className="text-grey-300  transition hover:bg-gray-700">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>

            <li>
              <a
                to="/"
                rel="noreferrer"
                target="_blank"
                className="text-grey-300  transition hover:bg-gray-700">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>

          <div className="mt-16 sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Link to="/">
                <img
                  src={logoIkea1}
                  alt="logoIkea"
                  style={{ width: 120, height: 120 }}
                />
              </Link>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
              Copyright &copy; 2022. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
