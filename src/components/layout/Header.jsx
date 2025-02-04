import { Div, Toggle } from "../../components/Index";

const Header = () => {
  return (
    <Div className="dark:bg-gray-800 bg-[#F5F5d4] rounded-xl">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center gap-6 sm:gap-10">
        {/* Logo */}
        <div className="text-2xl font-bold">WRC</div>

        {/* Navbar */}
        <nav className="hidden sm:flex space-x-6">
          <a href="#home" className="hover:text-yellow-300">Home</a>
          <a href="#races" className="hover:text-yellow-300">Races</a>
          <a href="#teams" className="hover:text-yellow-300">Teams</a>
          <a href="#standing" className="hover:text-yellow-300">Standing</a>
          <a href="#news" className="hover:text-yellow-300">News</a>
          <a href="#contacts" className="hover:text-yellow-300">Contacts</a>
        </nav>

        {/* Toggle Switch */}
        <Toggle />

        {/* Mobile Navbar - Hamburger Menu */}
        <div className="sm:hidden">
          {/* Add your mobile hamburger menu here if you need it */}
          <button className="text-2xl text-gray-700 dark:text-white">
            {/* Here you can add a hamburger icon or any icon you want */}
            ☰
          </button>
        </div>
      </div>
    </Div>
  );
};

export default Header;
