import CountdownTimer from "@/components/Shared/CountdownTimer";
import ConfettiEffect from "@/components/Shared/ConfettiEffect";
import Image from "next/image";

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
