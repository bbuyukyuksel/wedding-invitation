import Link from "next/link";
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
          <p className="font-habibi lg:hidden">Program</p>
          <h4 className="font-great-vibes text-5xl lg:text-7xl mb-4 mt-6 ">
            Nurila & Burak
          </h4>
          <p className="lg:hidden font-habibi ">31 Ağustos 2024</p>
        </div>
      </div>

      <div className="flex flex-col mx-auto h-40 lg:h-full items-center justify-center w-full px-8 mt-20">
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
              src="/assets/icons/ring.svg"
              alt="ring"
              width={100}
              height={100}
            />
            {/* <Ring className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto" /> */}
            <div className="flex flex-col text-white font-habibi justify-between h-full">
              <p className="text-base md:text-lg lg:text-3xl">Nikah </p>
              <p className="text-xs md:text-base lg:text-lg">19:00</p>
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
      <div className="flex mx-auto h-32 lg:h-full items-start lg:items-end justify-start w-full px-8 mt-20">
        <Link
          className="mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white font-habibi text-sm md:text-base"
          href="https://maps.app.goo.gl/ptJF5UbNHwDYGoJm7"
        >
          <div className="flex items-center space-x-4 h-auto">
            <Image
              src="/assets/icons/location.svg"
              alt="ring"
              width={100}
              height={100}
              className="h-12 w-8 md:h-10 md:w-6"
            />
            <p className="text-xl">Konum</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Detail;
