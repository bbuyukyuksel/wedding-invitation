import React from "react";

const HeaderMobile = () => {
  return (
    <section
      id="beranda"
      className="flex lg:hidden bg-cover bg-center  w-full h-screen  items-start py-14"
      style={{ backgroundImage: "url(/assets/prewedding-home.png)" }}
    >
      <div className="flex flex-col  w-full relative">
        <div className="absolute h-full w-full bg-dark-450 bg-blur-2px"></div>
        <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10">
          <p className="font-habibi ">Düğünümüz Var!</p>
          <h4 className="font-great-vibes text-5xl mb-4 mt-6">
            Nurila & Burak
          </h4>
          <p className="font-habibi ">01 Januari 2021</p>
        </div>
      </div>
    </section>
  );
};

export default HeaderMobile;
