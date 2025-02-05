import { useEffect } from "react";
import "./App.css";
import { Div, Featured, Footer, Header, Hero, News, Rallies, Upcoming } from "./components/Index";

function App() {
  return (
    <Div className="min-h-screen flex flex-col gap-4 bg-light-bg text-[#212121] px-2 p-2 dark:bg-gray-900 dark:text-[#E0E0d2] transition-colors duration-300">
      <Header />
        <Hero/>

        <Upcoming/>
      <News />
      <Featured/>
      <Rallies/>
     
      <Footer/>
    </Div>
  );
}

export default App;
