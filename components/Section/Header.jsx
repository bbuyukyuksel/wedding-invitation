import Image from "next/image";

const Header = () => {
  return (
    <section
      id="beranda-dekstop"
      className="hidden lg:grid bg-dark-500 py-14 lg:py-0 mb:pb-6 grid-flow-col grid-cols-2 gap-4 row-span-4 h-screen"
    >
      <div className="flex flex-col text-white px-8 pb-20 pt-28 justify-end">
        <div className="flex flex-col text-center my-auto">
          <p>
            “Bu mutlu günümüzde, mutluluğumuzu paylaşmak adına düğün törenimize
            sizleri de bekliyoruz.”
          </p>
        </div>
        <div className="flex flex-col ">
          <h4 className="font-great-vibes text-5xl mb-4 mt-6">
            Nurila & Burak
          </h4>
          <p className="font-habibi ml-auto">31 Ağustos 2024</p>
        </div>
      </div>
      <div className="flex w-full relative">
        <Image
          src="/assets/prewedding-home.jpeg"
          style={{ filter: "blur(4px)" }}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          quality={100}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Header;
