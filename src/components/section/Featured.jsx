import { getFeatures } from "../../services/GetApi";
import { SwiperSection } from "../spesific/Index";

const Featured = () => <SwiperSection title="WRC Features ... " fetchData={getFeatures} slidesPerView={3} />;

export default Featured