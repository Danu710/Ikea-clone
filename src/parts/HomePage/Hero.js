import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[url(https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1669285083730_1_1.jpeg)] bg-cover bg-center bg-no-repeat">
      <div className="p-8 bg-black/25 md:p-12 lg:px-16 lg:py-32">
        <div className="max-w-lg text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo!
          </h2>

          <p className="hidden max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            officia corporis quasi doloribus iure architecto quae voluptatum
            beatae excepturi dolores.
          </p>

          <div className="mt-4 sm:mt-8">
            <Link
              to="#browse-the-room"
              className="inline-flex items-center px-8 py-3 text-white transition bg-black rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring">
              <span className="text-sm font-medium"> Order Now </span>

              <svg
                className="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
