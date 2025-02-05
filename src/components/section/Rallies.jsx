import { getRallies } from "../../services/GetApi";
import { SwiperSection } from "../spesific";

const Rallies = () => <SwiperSection title="Rallies .. . " fetchData={getRallies} slidesPerView={4} />;

export default Rallies