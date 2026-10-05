
import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10 md:mt-16">
      <div className="relative overflow-hidden rounded-3xl bg-[#f7f3f0]">
        <div className="grid min-h-130 grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-12 lg:px-16">

          {/* Left Content */}
          <div className="z-10">
            <span className="mb-5 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              📚 Discover Your Next Favorite Book
            </span>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Books to
              <span className="text-green-600"> freshen up </span>
              your bookshelf
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
              Explore our collection of amazing books and discover stories,
              ideas, and knowledge that will make your bookshelf even better.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-lg bg-green-600 px-7 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:bg-green-700 hover:shadow-lg">
                View The List →
              </button>

              <button className="rounded-lg border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 transition duration-300 hover:border-green-600 hover:text-green-600">
                Learn More
              </button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
              <div>
                <p className="font-bold text-gray-900">10K+</p>
                <p>Books</p>
              </div>

              <div className="h-8 w-px bg-gray-300"></div>

              <div>
                <p className="font-bold text-gray-900">5K+</p>
                <p>Readers</p>
              </div>

              <div className="h-8 w-px bg-gray-300"></div>

              <div>
                <p className="font-bold text-gray-900">4.9/5</p>
                <p>Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={bannerImg}
                alt="Books on a bookshelf"
                className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                priority
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
