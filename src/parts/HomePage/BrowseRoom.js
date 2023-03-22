import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import useAsync from "../../helpers/hooks/useAsync";
import fetch from "../../helpers/fetch/index";

function Loading({ ratio = {} }) {
  const dummy = [
    {
      id: 1,
      ratio: {
        default: "1/9",
        md: "1/4",
      },
    },
    {
      id: 2,
      ratio: {
        default: "1/9",
        md: "2/2",
      },
    },
    {
      id: 3,
      ratio: {
        default: "1/9",
        md: "2/3",
      },
    },
    {
      id: 4,
      ratio: {
        default: "1/9",
        md: "1/3",
      },
    },
  ];

  return dummy.map((item, index) => {
    return (
      <div
        key={item.id}
        className={`relative card ${
          ratio?.wrapper.default?.[item.ratio.default]
        } ${ratio?.wrapper.md?.[item.ratio.md]}`}
        style={{ height: index === 0 ? 180 : "auto" }}>
        <div className="w-full h-full bg-gray-300 rounded-lg">
          <div className={`overlay ${ratio?.meta?.[item.ratio.md]}`}>
            <div className="w-24 h-3 mt-3 bg-gray-400 rounded-full"></div>
            <div className="h-3 mt-2 bg-gray-400 rounded-full w-36"></div>
          </div>
        </div>
      </div>
    );
  });
}

export default function BrowseRoom() {
  const { data, run, isLoading } = useAsync({
    data: { username: "" },
  });

  useEffect(() => {
    run(fetch({ url: "/api/categories/?page=1&limit=4" }));
  }, [run]);

  const ratioClassNames = {
    wrapper: {
      default: {
        "1/9": "col-span-9 row-span-1",
      },
      md: {
        "1/4": "md:col-span-5 md:row-span-1",
        "2/2": "md:col-span-3 md:row-span-1",
        "2/3": "md:col-span-3 md:row-span-2",
        "1/3": "md:col-span-5 md:row-span-2",
      },
    },
    meta: {
      "1/9":
        "left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72",
      "1/4":
        "left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72",
      "2/2":
        "inset-0 top-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12",
      "2/3":
        "inset-0 top-0 md:bottom-auto flex justify-center md:items-center flex-col  md:pl-0 pt-0 md:pt-12",
    },
  };

  return (
    <section className="" id="browse-the-room">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 sm:text-3xl">
            browse the room <br className="" />
            that we designed for you
          </h3>
        </div>
        <div className="grid grid-cols-8 grid-rows-2 gap-2 mt-5">
          {isLoading ? (
            <Loading ratio={ratioClassNames} />
          ) : (
            data.data.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`relative card ${
                    ratioClassNames?.wrapper.default?.[item.ratio.default]
                  } ${ratioClassNames?.wrapper.md?.[item.ratio.md]}`}
                  style={{ height: index === 0 ? 180 : "auto" }}>
                  <div className="card-shadow rounded-xl">
                    <img
                      src={`./images/content/${item.imageUrl}`}
                      alt={item.title}
                      className="object-cover object-center w-full h-full overflow-hidden overlay rounded-xl"
                    />
                  </div>
                  <div
                    className={`overlay ${
                      ratioClassNames?.meta?.[item.ratio.md]
                    }`}>
                    <h5 className="text-lg font-semibold">{item.title}</h5>
                    <span className="">
                      {item.products} item
                      {item.products > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
