import { Div } from "../Index";

const NewsCard = ({ item }) => {
    const formattedDate = item.createdAt ? new Date(item.createdAt).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }) : " ";

  return (
    <Div className="border rounded-2xl flex flex-col gap-2 h-[400px] p-2 cursor-pointer">
      {/* Image Wrapper with Overflow Hidden */}
      <Div className="relative w-full h-[200px] rounded-t-2xl overflow-hidden">
        {/* Flag Image - Displayed Only if Available */}
        {item.country?.flag[0]?.url && (
         <Div className={'bg-[#F5F5d4] flex h-fit  items-center   gap-2 dark:bg-gray-800 rounded-md absolute top-2 right-2  p-1  z-10'}>
           <img
            src={item.country.flag[0].url}
            alt="Flag"
            className=" w-12 h-7  rounded-md"
          />
          <h2 className="font-mono  text-sm">
            {
              item.country.name
            }
          </h2>
         </Div>
        )}
        <img
          src={item.images[0].url}
          alt={item.title}
          width={item.images[0].width}
          className="w-full z-20 h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </Div>

      {/* Text Content */}
      <Div className="p-2 px-3 gap-4 flex flex-col">
        <p className="font-mono text-lg text-gray-500 dark:text-gray-300">{formattedDate}</p>
        <h1 className="text-2xl line-clamp-1 font-bold">{item.title}</h1>
        <p className="text-xl font-semibold line-clamp-2">{item.description}</p>
      </Div>
    </Div>
  );
};

export default NewsCard;
