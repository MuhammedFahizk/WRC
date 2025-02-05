import { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Div } from "../common/Index";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NewsCard } from "../spesific/Index";

const SwiperSection = ({ title, fetchData, slidesPerView = 4 }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetchData();
        setItems(data.content || []);
      } catch (error) {
        console.error(`Error loading ${title}:`, error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [fetchData, title]);

  const slides = useMemo(() => {
    return items.map((item, index) => (
      <SwiperSlide key={index}>
        <NewsCard item={item} />
      </SwiperSlide>
    ));
  }, [items]);

  const skeletonSlides = useMemo(() => {
    return Array.from({ length: slidesPerView }).map((_, index) => (
      <SwiperSlide key={index}>
        <div className="p-4 border border-gray-200 rounded-lg shadow-md animate-pulse dark:border-gray-700">
          <div className="h-40 bg-gray-300 rounded-md dark:bg-gray-700 mb-3"></div>
          <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-700 w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-700 w-1/2"></div>
        </div>
      </SwiperSlide>
    ));
  }, [slidesPerView]);

  return (
    <Div className="w-full md:px-10 px-2 space-y-5">
      <Div className={'flex justify-between h-full items-center'}>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-md font-semibold hover:underline">View All </p>
      </Div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true, dynamicBullets: false, el: null }}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          200: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView },
        }}
      >
        {loading ? skeletonSlides : slides}
      </Swiper>
    </Div>
  );
};

export default SwiperSection;
