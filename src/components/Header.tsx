import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TG</span>
            </div>
            <span className="text-xl text-gray-900 font-bold">
              Telangana IT Wing
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-gray-700 hover:text-cyan-600 font-medium transition">
              About
            </a>
            <a href="#team" className="text-gray-700 hover:text-cyan-600 font-medium transition">
              Team
            </a>
            <a href="#events" className="text-gray-700 hover:text-cyan-600 font-medium transition">
              Events
            </a>
            <a href="#join" className="bg-cyan-500 text-white px-6 py-2.5 rounded-lg hover:bg-cyan-600 font-medium transition">
              Join Us
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-200 pt-4">
            <a href="#about" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
              About
            </a>
            <a href="#team" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
              Team
            </a>
            <a href="#events" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
              Events
            </a>
            <a href="#join" className="block px-4 py-3 bg-cyan-500 text-white rounded-lg font-medium text-center">
              Join Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;