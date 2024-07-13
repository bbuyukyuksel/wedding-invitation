"use client";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";
// import Resepsi from '../public/assets/icons/resepsi.svg';
import HeaderMobile from "@/components/Section/HeaderMobile";
import Header from "@/components/Section/Header";
import Detail from "@/components/Section/Detail";
import MusicPlayer from "@/components/Shared/MusicPlayer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <MusicPlayer />
      <HeaderMobile />
      <Header />
      <Detail />
    </div>
  );
}
