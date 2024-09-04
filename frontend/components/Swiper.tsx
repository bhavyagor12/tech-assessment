"use client";
import React, { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { COMMUNITY_BADGES } from "@/constants";
import Badge from "./Badge";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { StaticImageData } from "next/image";
import { useHomePageData } from "./DataProvider";
const styles = {
  container: "flex w-full h-full items-center justify-between px-4",
  buttonContainer: {
    base: "flex items-center h-[309px] md:h-[244px] w-[47px] bg-dark-ele2 rounded-[32px]",
    button:
      "p-2 bg-gray-700 text-white rounded-full w-[35px] h-[35px] flex items-center justify-center md:w-[47.25px] md:h-[47.25px]",
  },
  swiperContainer:
    "flex flex-grow items-center justify-center h-full overflow-hidden",
  swiperSlide: (index: number, currentIndex: number) => ({
    transform:
      window.innerWidth >= 768
        ? currentIndex === index
          ? "scale(1.0)" // Current slide
          : Math.abs(currentIndex - index) === 1
            ? "scale(0.8)" // Immediately adjacent slides
            : Math.abs(currentIndex - index) === 2
              ? "scale(0.7)" // Two positions away
              : "scale(0.6)" // Three or more positions away
        : "none",
    padding: window.innerWidth >= 768 ? "0 0.5rem" : "0",
    transition: window.innerWidth >= 768 ? "transform 0.3s ease" : "none",
    opacity: currentIndex === index ? 1 : 0.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  }),
};

const SwiperComponent = () => {
  const sliderRef = useRef<SwiperRef | null>(null);
  const { activeBadge } = useHomePageData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(7);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(7);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  useEffect(() => {
    if (sliderRef.current && sliderRef.current?.swiper) {
      sliderRef.current?.swiper.slideTo(activeBadge);
    }
    setCurrentIndex(activeBadge);
  }, [activeBadge]);
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
          ref={sliderRef}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          loop={false}
          effect="coverflow"
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          initialSlide={activeBadge}
          coverflowEffect={{
            rotate: 30,
            depth: 500,
            modifier: 2,
            slideShadows: false,
          }}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex);
            swiper.slideTo(swiper.realIndex, 500, false);
          }}
          slideToClickedSlide={true}
          className="w-full h-full"
        >
          {COMMUNITY_BADGES.map((badge, index) => (
            <SwiperSlide
              key={index}
              style={styles.swiperSlide(index, currentIndex)}
              onClick={() => setCurrentIndex(index)}
            >
              <Badge
                key={index}
                title={badge.title}
                icon={badge.icon as StaticImageData}
                actions={badge.actions as string}
                value={badge.value}
                isActive={badge.isActive as boolean}
                details={badge.details as string}
                hideContent={index !== currentIndex}
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
