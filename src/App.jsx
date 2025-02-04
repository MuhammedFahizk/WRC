import { useEffect } from "react";
import "./App.css";
import { Div, Featured, Header, News } from "./components/Index";

function App() {
  return (
    <Div className="min-h-screen flex flex-col gap-4 bg-light-bg text-[#212121] px-2 p- dark:bg-gray-900 dark:text-[#E0E0d2] transition-colors duration-300">
      <Header />
      <News />
      <Featured/>
    </Div>
  );
}

export default App;
