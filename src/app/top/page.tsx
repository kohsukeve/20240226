"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "../lib/images";
import UpInner from "../components/layouts/UpInner";
import Center from "../components/layouts/Center";

export default function Page() {
  return (
    <section className="py-12 ">
      <div className="z-50">
        <UpInner />
      </div>
      <div className=" bg-stone-100 z-10">
        <Center />
      </div>
    </section>
  );
}
