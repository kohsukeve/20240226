import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "@/app/lib/images";

const Center = () => {
  return (
    <div>
      <Swiper
        navigation
        pagination={{ type: "fraction" }}
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-full w- rounded-lg"
        //   [&_.swiper-pagination]:relative
        //   [&_.swiper-pagination]:top-1.5
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={250}
                height={250}
                objectFit="contain"
                //   className='block h-full w-full object-cover'
                className="h-2/5 m-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Center;
