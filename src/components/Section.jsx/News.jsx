import { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Div } from "../common";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getNews } from "../../services/GetApi";
import { NewsCard } from "../spesific";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();
        console.log(data.content);
        
        setNews(data.content || []);
      } catch (error) {
        console.error("Error loading news:", error);
      }
    };

    fetchNews();
  }, []); 

  const newsSlides = useMemo(() => {
    return news.map((item, index) => (
     <SwiperSlide  key={ index}>
         <NewsCard item={item} />
     </SwiperSlide>
       
     
    ));
  }, [news]);

  return (
    <Div className="w-full md:px-10 px-2 space-y-5">
        <h1 className="text-2xl  font-bold ">
         " WRC Latest News ...
        </h1>
      <Swiper
      className="  "
        modules={[Navigation, Pagination]}
        navigation

        pagination={{ clickable: true, dynamicBullets: false, el: null }}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        breakpoints={{
          200: { slidesPerView: 1 },

          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {newsSlides}
      </Swiper>
    </Div>
  );
};

export default News;
