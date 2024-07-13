import CountdownTimer from "@/components/Shared/CountdownTimer";
import ConfettiEffect from "@/components/Shared/ConfettiEffect";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";

const HeaderMobile = () => {
  return (
    <section
      id="beranda"
      className="flex lg:hidden w-full h-screen items-center justify-center py-14 relative"
    >
      <ConfettiEffect run={true} />
      {/* ConfettiEffect bileşenini düzgün bir şekilde çağırın */}
      <div className="absolute inset-0">
        <div className="flex flex-col w-full text-white text-center h-auto px-8 py-3.5 z-10 justify-center items-center relative">
          <p className="font-habibi text-xl py-5">Davetlisiniz...</p>
          <h4 className="font-great-vibes text-5xl mb-4 mt-6 py-10">
            Nurila & Burak
          </h4>
          <p className="font-habibi text-xl">
            31 Ağustos 2024 <br />
          </p>
          <p>
            <CountdownTimer />
          </p>

          <div className="flex mx-auto h-32 lg:h-full items-start lg:items-end justify-start w-full px-8 mt-20">
            <Link
              className="mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white font-habibi text-sm md:text-base"
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240831T153000Z%2F20240831T203000Z&details=A%C4%9Fustos%27ta%20g%C3%BCzel%20bir%20g%C3%BCne%20davetlisiniz...&location=Ali%20Ku%C5%9F%C3%A7u%2C%20Ali%20Naki%20Sk.%20No%3A4%2C%2034093%20Fatih%2F%C4%B0stanbul&text=Nurila%20%26%20Burak%20D%C3%BC%C4%9F%C3%BCn"
            >
              <div className="flex items-center space-x-4 h-auto">
                <FaCalendar />
                <p className="text-xl">Takvime Ekle</p>
              </div>
            </Link>
          </div>
          <p></p>
        </div>

        <Image
          src="/assets/prewedding-home.jpeg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{ filter: "blur(4px)" }}
        />
      </div>
    </section>
  );
};

export default HeaderMobile;
