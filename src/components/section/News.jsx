import { getNews } from "../../services/GetApi";
import { SwiperSection } from "../spesific/Index";

const News = () => <SwiperSection title="WRC Latest News ... " fetchData={getNews} slidesPerView={4} />;

export default News