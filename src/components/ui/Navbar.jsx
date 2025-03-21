import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-black border-b border-gray-300 dark:border-gray-700 transition-all duration-300 z-50">
      {/* Audio Element */}
      <audio ref={audioRef} src="/audio/world1.mp3" loop preload="auto" />

      {/* Logo */}
      <h1 className="text-lg font-semibold text-black dark:text-white">
      Bridge Group Solutions
      </h1>

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center bg-gray-300 dark:bg-gray-800 p-1 rounded-full transition-all duration-300"
      >
        <Sun className={`h-4 w-4 text-yellow-500 ${darkMode ? "opacity-30" : "opacity-100"}`} />
        <Moon className={`h-4 w-4 ml-1 text-white ${darkMode ? "opacity-100" : "opacity-30"}`} />
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8 text-black dark:text-white text-sm font-medium">
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">What we do</a>
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">Who we are</a>
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">How we give back</a>
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">Talk to us</a>

        {/* Music Button */}
        <button
          onClick={toggleMusic}
          className="p-2 transition-all duration-300 text-black dark:text-white cursor-pointer"
        >
          {isPlaying ? (
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6h8M6 10h12M8 14h8M6 18h12"/>
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6H6m12 4H6m12 4H6m12 4H6"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-black dark:text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="#" className="text-black dark:text-white text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">
            What we do
          </a>
          <a href="#" className="text-black dark:text-white text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">
            Who we are
          </a>
          <a href="#" className="text-black dark:text-white text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">
            How we give back
          </a>
          <a href="#" className="text-black dark:text-white text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">
            Talk to us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
