'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Navigation, Pagination } from 'swiper/modules'



import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { images } from '../lib/images'


        /*  https://zenn.dev/chot/articles/1a18308801930c
        spaceBetween={50} Default: スライド間の余白を設定できます
        slidesPerView={3} Default: auto スライドの表示枚数の設定
        speed Default: 300 Slideのトランジションのスピード
        centeredSlides Default: false スライドをセンター寄せにする

        下記のような機能には別途モジュールの読み込みが必要
        import { Autoplay, Pagination } from 'swiper';
        autoplay Default: {delay: 5000} 自動スライド 
        pagination Default: false スライドの表示枚数の設定
        #https://swiperjs.com/swiper-api

        hookを利用する
        https://zenn.dev/chot/articles/1a18308801930c


        
        */

export default function Page() {
  return (
    <section className='py-12 h-1/2'>
      <div className='container bg-black'>
        <Swiper
          navigation          
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
          
          onSwiper={swiper => console.log(swiper)}
          className='h-96 w-full rounded-lg
          [&_.swiper-pagination]:relative
          [&_.swiper-pagination]:top-1.5
          '            
           
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-fulls w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <Swiper
        // 画像三つに対しslidesPerView={3}にすると３つとも表示されてSwiperのループ機能がなくなり、矢印などの表示もなくなる

          slidesPerView={2}
          
          loop={true}
          // navigationの記載を消せば矢印がなくなる。
          navigation
          pagination={{
            clickable: true,
          }}

        //   pagination={{ type: 'fraction' }} これを使うとなぜか子要素が反応せず[&_.swiper]の表記が使えなくなる
          modules={[Navigation,Pagination]}



          /*[&_.swiper-button-prev]:text-red-500が矢印の左側カラー
           [&_.swiper-button-next]:text-red-500右側
           [&_.swiper-button-prev:after]:bg-[#0e3411]矢印のバックグラウンドカラー
          ※上記 [&_.swiper-button-next]:bg-[#0e3411]とかでもバックグラウンドカラーは変更可能だが混乱しないようafterでいれる
          */
          className="
            [&_.swiper-pagination]:relative
            [&_.swiper-pagination]:top-1.5
           
            
             [&_.swiper-pagination-bullet-active]:!bg-red-400
            [&_.swiper-pagination-bullet]:h-[30px]
            [&_.swiper-pagination-bullet]:w-[30px]
             [&_.swiper-pagination-bullet]:bg-[#0e3411]
            
            [&_.swiper-button-prev]:text-black
            [&_.swiper-button-next]:text-black
             "

          
        //   ここはSwipeの稼働領域

            >
            <SwiperSlide>
                <Image src="/first.jpg" alt="image1" width={300} height={105} />
            </SwiperSlide>
            <SwiperSlide>
            <Image src="/first.jpg" alt="image1" width={200} height={105} />
            </SwiperSlide>
            <SwiperSlide>
            <Image src="/first.jpg" alt="image1" width={200} height={105} />
            </SwiperSlide>
        </Swiper>        
      </div>
    </section>
  )
}