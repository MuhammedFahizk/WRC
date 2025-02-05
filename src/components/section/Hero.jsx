import { useEffect, useState } from "react";
import { Button, Div } from "../Index";
import { getFeatures, getNews } from "../../services/GetApi";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const [heroData, setHeroData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const [news, features] = await Promise.all([getNews(), getFeatures()]);
        const combinedData = [
          ...(news.content || []),
          ...(features.content || []),
        ];
        const shuffledData = combinedData
          .sort(() => 0.5 - Math.random())
          .slice(0, 6);
        setHeroData(shuffledData);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <Div className="px-2 md:px-10">
      <Div className="bg-[#00000027] shadow-2xl h-[400px] w-full rounded-4xl">
        <Div>
          {loading ? (
            // Skeleton Loader
            <Div className="h-[400px] flex items-center justify-center">
              <Div className="w-full h-full bg-gray-300 animate-pulse rounded-2xl"></Div>
            </Div>
          ) : (
            <Swiper
              className="h-[400px]"
              modules={[Navigation, EffectFade, Pagination, Autoplay]}
              effect="fade"
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Track current slide
            >
              {heroData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    {/* Image Animation - Slide Right to Left */}
                    <motion.img
                      key={`image-${index}`} // Unique key ensures animation triggers
                      src={item.images[0].url}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-2xl"
                      initial={{ x: "100%", opacity: 0 }}
                      animate={
                        activeIndex === index ? { x: 0, opacity: 1 } : {}
                      }
                      exit={{ x: "-100%", opacity: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />

                    {/* Gradient Overlay */}
                    <Div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 rounded-2xl" />

                    <Div
                      key={`text-${index}`}
                      className="absolute cursor-pointer space-y-2 bottom-5 left-5 right-5 text-white z-50 px-6 py-4"
                      animateProps={{
                        initial: { x: "-20%", opacity: 0 },
                        animate:
                          activeIndex === index ? { x: 0, opacity: 1 } : {},
                        exit: { x: "100%", opacity: 0 },
                        transition: {
                          duration: 1.5,
                          ease: "easeInOut",
                          delay: 0.2,
                        },
                      }}
                    >
                      <h2 className="text-3xl md:w-2/3 line-clamp-1 font-bold leading-tight drop-shadow-lg">
                        {item.title}
                      </h2>
                      <p className="mt-2 md:w-3/4 line-clamp-1 text-lg opacity-85">
                        {item.description || "Explore the latest WRC updates!"}
                      </p>
                      <Button
                        className="rounded-lg font-mono px-5 bg-[#F5F5d4] dark:bg-gray-800 text-black dark:text-white p-2"
                      >
                        READ MORE
                      </Button>
                    </Div>
                  </Div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Div>
      </Div>
    </Div>
  );
};

export default Hero;
