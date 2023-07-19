import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrend();
  }, []);

  const getTrend = () => {
    GlobalApi.getTrending.then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const elementRef = useRef();
  const slideR = (element) => {
    element.scrollLeft += screenWidth - 120;
  };

  const slideL = (element) => {
    element.scrollLeft -= screenWidth - 120;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-3xl absolute mx-8 mt-48 cursor-pointer"
        onClick={() => slideL(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-3xl absolute mx-8 mt-48 cursor-pointer right-0"
        onClick={() => slideR(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img key={item.id}
            src={IMAGE_BASE_URL + item.backdrop_path} alt=''
            className="min-w-full md:h-96 object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in shadow-lg shadow-black"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
