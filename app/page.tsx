"use client";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";
// import Resepsi from '../public/assets/icons/resepsi.svg';
import Ring from "../public/assets/icons/ring.svg";
import HeaderMobile from "@/components/Section/HeaderMobile";
import Header from "@/components/Section/Header";
import Detail from "@/components/Section/Detail";
import Location from "../public/assets/icons/location.svg";

export default function Home() {
  return (
    <div>
      {/* Header Mobile */}
      <section
        id="beranda"
        className="flex lg:hidden bg-cover bg-center  w-full h-screen  items-start py-14"
        style={{ backgroundImage: "url(/assets/prewedding-home.jpeg)" }}
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
      {/* End Header Mobile */}
      <HeaderMobile />
      <Header />
      <Detail />
    </div>
  );
}
