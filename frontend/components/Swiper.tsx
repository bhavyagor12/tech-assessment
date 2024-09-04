"use client";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { COMMUNITY_BADGES } from "@/constants";
import Badge from "./Badge";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
const styles = {
  container: "flex w-full h-full items-center justify-between px-4",
  buttonContainer: {
    base: "flex items-center h-[309px] md:h-[244px] w-[47px] bg-dark-ele2 rounded-[32px] flex-shrink-0",
    button:
      "p-2 bg-gray-700 text-white rounded-full w-[35px] h-[35px] flex items-center justify-center md:w-[47.25px] md:h-[47.25px]",
  },
  swiperContainer: "flex flex-grow items-center h-full overflow-hidden",
  swiperSlide: (index: number, currentIndex: number) => ({
    transform:
      window.innerWidth >= 768
        ? currentIndex === index
          ? "scale(1.1)"
          : "scale(0.9)"
        : "none",
    transition: window.innerWidth >= 768 ? "transform 0.3s ease" : "none",
    opacity: currentIndex === index ? 1 : 0.5,
  }),
};

const SwiperComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(5);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Left Navigation Button */}
      <div className={styles.buttonContainer.base}>
        <button
          className={styles.buttonContainer.button + " prev-button"}
          aria-label="Prev slide"
        >
          <ChevronLeftIcon />
        </button>
      </div>

      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          loop={false}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          autoplay={{
            delay: 20000,
            disableOnInteraction: false,
          }}
          initialSlide={4}
          coverflowEffect={{
            rotate: 30,
            depth: 500,
            modifier: 2,
            slideShadows: false,
          }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {COMMUNITY_BADGES.map((badge, index) => (
            <SwiperSlide
              key={index}
              style={styles.swiperSlide(index, currentIndex)}
            >
              <Badge
                key={index}
                title={badge.title}
                actions={badge.actions}
                value={badge.value}
                isActive={badge.isActive as boolean}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Navigation Button */}
      <div className={styles.buttonContainer.base}>
        <button
          className={styles.buttonContainer.button + " next-button"}
          aria-label="Next slide"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};
export default SwiperComponent;
