"use client";

import Image from "next/image";
import Ring from "@/public/assets/icons/ring.svg";
import Location from "@/public/assets/icons/ring.svg";

const Detail = () => {
  return (
    <section
      id="resepsi"
      className="bg-dark-500 py-14  mb:pb-6 grid grid-flow-row gap-4 row-span-4 h-screen"
    >
      <div className="flex flex-col  w-full relative lg:h-full">
        <div className="absolute h-full w-full bg-dark-450 bg-blur-2px lg:hidden"></div>
        <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10 lg:my-auto">
          <p className="font-habibi lg:hidden">Düğün</p>
          <h4 className="font-great-vibes text-5xl lg:text-7xl mb-4 mt-6 ">
            Nurila & Burak
          </h4>
          <p className="lg:hidden font-habibi ">31 Ağustos 2024</p>
        </div>
      </div>

      <div className="flex flex-col mx-auto h-40 lg:h-full items-center justify-center w-full px-8">
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
            <Image
              src="/assets/icons/entrance.svg"
              alt="entrance"
              width={100}
              height={100}
            />
            <div className="flex flex-col text-white font-habibi justify-between h-full">
              <p className="text-base md:text-lg lg:text-3xl">Giriş </p>
              <p className="text-xs md:text-base lg:text-lg">18:30</p>
            </div>
          </div>

          <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
            <Image
              src="/assets/icons/coctail.svg"
              alt="ring"
              width={100}
              height={100}
            />
            {/* <Ring className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto" /> */}
            <div className="flex flex-col text-white font-habibi justify-between h-full">
              <p className="text-base md:text-lg lg:text-3xl">Kokteyl </p>
              <p className="text-xs md:text-base lg:text-lg">19:00</p>
            </div>
          </div>

          <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
            <Image
              src="/assets/icons/ring.svg"
              alt="ring"
              width={100}
              height={100}
            />
            {/* <Ring className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto" /> */}
            <div className="flex flex-col text-white font-habibi justify-between h-full">
              <p className="text-base md:text-lg lg:text-3xl">Nikah </p>
              <p className="text-xs md:text-base lg:text-lg">19:30</p>
            </div>
          </div>

          <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
            <Image
              src="/assets/icons/dish.svg"
              alt="ring"
              width={100}
              height={100}
            />
            {/* <Ring className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto" /> */}
            <div className="flex flex-col text-white font-habibi justify-between h-full">
              <p className="text-base md:text-lg lg:text-3xl">Ana Yemek </p>
              <p className="text-xs md:text-base lg:text-lg">20:00</p>
            </div>
          </div>

          <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
            <Image
              src="/assets/icons/dance.svg"
              alt="ring"
              width={100}
              height={100}
            />
            <div className="flex flex-col text-white font-habibi justify-between h-full">
              <p className="text-base md:text-lg lg:text-3xl">Eğlence </p>
              <p className="text-xs md:text-base lg:text-lg">21:00</p>
            </div>
          </div>
        </div>

        <p className="hidden md:block mt-12 lg:mt-auto mx-auto text-lg text-white font-habibi"></p>
      </div>
      <div className="flex mx-auto h-32 lg:h-full items-start lg:items-end justify-start w-full px-8">
        <button className="mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white font-habibi text-sm md:text-base">
          {/* <Location className="h-8 md:h-10 w-8 md:w-10 mr-4" /> */}
          <Image
            src="/assets/icons/location.svg"
            alt="ring"
            width={100}
            height={100}
            className="h-6 md:h-8 w-6 md:w-8 mr-4 justify-between"
          />
          Konum
        </button>
      </div>
    </section>
  );
};

export default Detail;
