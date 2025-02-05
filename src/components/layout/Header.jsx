import { useState, useEffect } from "react";
import { Button, Div, Toggle } from "../../components/Index";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) { 
      setIsSticky(true);
      setIsMenuOpen(false)
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Races", href: "#races" },
    { name: "Teams", href: "#teams" },
    { name: "Standing", href: "#standing" },
    { name: "News", href: "#news" },
    { name: "Contacts", href: "#contacts" },
  ];

  return (
    <Div
      className={`dark:bg-gray-800 bg-[#F5F5d4] rounded-xl transition-all ${
        isSticky ? "sticky top-0 z-50" : "top-2"
      }`}
    >
      <Div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center h-full gap-6 sm:gap-10">
        <Div className="font-bold">
          <img
            src="https://images.ctfassets.net/agjqo78mf31x/TwSbkmfG35lSWnUdrbY7v/b9a64cfeb6c90bf63ba7a57cba5faea5/WRC_1.png"
            alt="WRC Logo"
            className="w-30"
          />
        </Div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-6">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="hover:text-yellow-300">
              {item.name}
            </a>
          ))}
        </nav>

        <Toggle />

        {/* Mobile Menu Button */}
        <Div className="sm:hidden">
          <button
            className="text-2xl text-gray-700 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </Div>
      </Div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <Div className="sm:hidden absolute top-20 left-0 w-full dark:bg-gray-800  bg-[#F5F5d4]  py-4 shadow-lg z-50">
          <Div className="flex flex-col items-center space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block w-full text-center py-2 px-3 rounded hover:bg-[#0001]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button value="Hire Me" to="/contact" />
          </Div>
        </Div>
      )}
    </Div>
  );
};

export default Header;
