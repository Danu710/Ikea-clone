import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb/index";
import Clients from "../parts/Clients";
import Footer from "../parts/Footer";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";
import useAsync from "../helpers/hooks/useAsync";
import fetch from "../helpers/fetch/index";
import useScrollToTop from "../helpers/hooks/useScrollToTop";

function LoadingProductsDetail() {
  return (
    <section>
      <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
        <div>
          <div className="h-16 bg-gray-300 rounded-full w-80 animate-pulse"></div>
          <div className="w-40 h-4 bg-gray-300 rounded-full animate-pulse"></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
          <div className="lg:col-span-3">
            <div className="relative mt-4"></div>

            <div className="flex gap-1 mt-1">
              {Array(5)
                .fill()
                .map((_, index) => {
                  return (
                    <div className="px-2 rounded-xl" key={index}>
                      <div className="object-cover w-24 h-24 bg-gray-300 rounded-lg rounded-xl item animate-pulse"></div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="lg:sticky lg:top-0">
            <div className="p-4 bg-gray-100 border rounded">
              <p className="text-sm">
                <span className="block">
                  <div className="h-4 mt-6 bg-gray-300 rounded-full w-36 animate-pulse"></div>
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
              <div className="h-4 mt-6 bg-gray-300 rounded-full w-36 animate-pulse"></div>
              <div className="h-4 mt-6 bg-gray-300 rounded-full w-88 animate-pulse"></div>
              <div className="w-40 h-4 mt-6 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-4 mt-6 bg-gray-300 rounded-full w-96 animate-pulse"></div>
              <div className="w-64 h-4 mt-6 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-4 mt-6 bg-gray-300 rounded-full w-88 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LoadingSuggestion() {
  return (
    <section className="px-4 py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex mb-4 flex-start">
          <h3 className="text-2xl font-semibold capitalize">
            Complete your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className="flex mb-4 -mx-3 overflow-x-auto">
          {Array(4)
            .fill()
            .map((_, index) => {
              return (
                <div
                  className="flex-none px-3"
                  style={{ width: 320 }}
                  key={index}>
                  <div className="relative p-4 pb-8 bg-white rounded-xl">
                    <div className="w-full overflow-hidden rounded-xl card-shadow h-36">
                      <div
                        className="h-full overflow-hidden rounded-lg bg-grey-300 animate-pulse"
                        style={{ widthL: 287, height: 150 }}></div>
                    </div>
                    <div className="w-56 h-4 mt-6 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="w-40 h-4 mt-3 bg-gray-300 rounded-full animate-pulse"></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default function Details() {
  useScrollToTop();

  const { idp } = useParams();
  const { data, run, isLoading } = useAsync({
    data: { username: "" },
  });

  useEffect(() => {
    run(fetch({ url: `/api/products/${idp}` }));
  }, [run, idp]);

  return (
    <>
      <Header />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      {/* 
      <LoadingProductsDetail /> */}
      {isLoading ? <LoadingProductsDetail /> : <ProductDetails data={data} />}
      {isLoading ? (
        <LoadingSuggestion />
      ) : (
        <Suggestion data={data?.relatedProducts || {}} />
      )}

      <Clients />
      <Footer />
    </>
  );
}
