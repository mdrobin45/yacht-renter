"use client";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../global/container/container";
import SubHeading from "../../global/subHeading/subHeading";
import YachtSlide from "./yachtSlide/yachtSlide";

// Import Swiper styles
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";

const PremiumYacht = () => {
   const swiperRef = useRef();
   return (
      <>
         <div className="bg-secondary pt-20 pb-52 text-center">
            <Container>
               <SubHeading className="justify-center">
                  PREMIUM YACHTS
               </SubHeading>
               <h2 className="text-h2 text-white font-bold">Yachts & Boats</h2>
               <div className="flex -mt-10 items-center justify-center md:mt-0 md:justify-end gap-3">
                  <span
                     onClick={() => swiperRef.current?.slidePrev()}
                     className="bg-primary text-white text-xl flex flex-col items-center justify-center h-10 w-10 cursor-pointer rounded-full">
                     <BsArrowLeft />
                  </span>
                  <span
                     onClick={() => swiperRef.current?.slideNext()}
                     className="bg-primary text-white text-xl flex flex-col items-center justify-center h-10 w-10 cursor-pointer rounded-full">
                     <BsArrowRight />
                  </span>
               </div>
            </Container>
         </div>
         <div className=" -mt-40 mb-32">
            <Swiper
               slidesPerView={2}
               centeredSlides={true}
               spaceBetween={20}
               loop={true}
               pagination={{
                  clickable: true,
               }}
               onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
               }}
               modules={[Pagination]}>
               <SwiperSlide>
                  <YachtSlide />
               </SwiperSlide>
               <SwiperSlide>
                  <YachtSlide />
               </SwiperSlide>
               <SwiperSlide>
                  <YachtSlide />
               </SwiperSlide>
               <SwiperSlide>
                  <YachtSlide />
               </SwiperSlide>
            </Swiper>
         </div>
      </>
   );
};

export default PremiumYacht;
