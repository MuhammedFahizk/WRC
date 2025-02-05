import React, { useEffect, useState } from "react";
import { Div } from "../Index";
import { getUpcoming } from "../../services/GetApi";
import timeLeft from "../../utils/TimeLeft";

const Upcoming = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getUpcoming();
        setItems(data.content || []);
        console.log(data.content);
      } catch (error) {
        console.error(`Error loading  upcoming events `, error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  return (
    <Div className={" px-2 md:px-10 dark:text-white "}>
      <Div
        className={
          " w-full dark:bg-gray-800 bg-[#f5f5d4a5] grid  md:grid-cols-3 sm:grid-cols-1  gap-2 justify-center  rounded-xl p-3"
        }
      >
        {!loading &&
          items.map((item, index) => (
            <Div
              key={index}
              className={"rounded-xl  gap-1 bg-[#00000030] flex  p-1   h-fit"}
            >
              <img
                src={item.championshipLogo[0].url}
                alt=""
                className="w-20 h-20"
              />
              <Div className={'dark:bg-gray-800 bg-[#F5F5d4] dark:text-white rounded-lg'}>
                <Div className={"flex  justify-between w-full px-1 "}>
                  <h3 className="  w-40  h-fit  font-semibold line-clamp-1 ">
                    {item.title}
                  </h3>
                  <Div
                    className={
                      "flex  w-fit h-fit justify-center  items-center  gap-1"
                    }
                  >
                    <img
                      src={item.country.flag[0].url}
                      alt=""
                      className="w-6 h-4"
                    />
                    <p>{item.location}</p>
                  </Div>
                </Div>
                <Div className={"px-2"}>
                  <h2 className="font-semibold   line-clamp-1 w-full ">
                    {item.description}
                  </h2>
                </Div>
                <Div className={"px-2"}>

                <h3 className="font-mono ">{timeLeft(item.endDateLocal)}</h3>
                </Div>
              </Div>
            </Div>
          ))}
      </Div>
    </Div>
  );
};

export default Upcoming;
