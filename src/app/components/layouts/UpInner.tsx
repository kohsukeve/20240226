// "use client";
import DehazeIcon from "@mui/icons-material/Dehaze";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Modal from "../tools/Modal/Modal";

const UpInner = () => {
  return (
    // <section>
    //   <div className="flex justify-between grid grid-cols-3">
    //     <div className="flex items-center">
    //       <Image src="/name.png" alt="image1" width={100} height={60} />
    //     </div>

    //     <div className="flex justify-center">
    //       <Swiper
    //         effect={"fade"}
    //         autoplay={{
    //           disableOnInteraction: false,
    //         }}
    //         loop={true}
    //         modules={[Navigation, Pagination, Autoplay, EffectFade]}
    //         className="w-36"
    //       >
    //         <SwiperSlide>
    //           <Image src="/1.png" alt="image1" width={100} height={105} />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Image src="/2.png" alt="image1" width={100} height={105} />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Image src="/3.png" alt="image1" width={100} height={105} />
    //         </SwiperSlide>
    //       </Swiper>
    //     </div>

    <div className="flex mx-40 justify-between">
      <div className="flex align-middle items-center">Contact</div>
      <div className="flex align-middle items-center">SignIn</div>
    </div>

    //     <div>
    //       {/* <ul className="flex flex-auto mx-8">
    //         <li>理系女子応援企業・団体</li>
    //         <li>LP・HP作成依頼</li>
    //         <li>イベント</li>
    //         <li>記事</li>
    //         <li>制作実績</li>
    //         <li>会社情報</li>
    //       </ul> */}
    //     </div>
    //   </div>
    //    </section>
  );
};

export default UpInner;
