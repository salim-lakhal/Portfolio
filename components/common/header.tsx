
import { useState } from "react";
import Menu from "@/components/common/menu";

const Header = () => {
  const [menuVisible, setmenuVisible] = useState(false);

  return (
    <header className="w-full fixed top-0 py-8 select-none z-50 bg-gradient-to-b from-gray-900 to-transparent">
      <div className="flex justify-between items-center px-4 md:px-8 mx-auto">
        <a href="#home" className="link text-white font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity" style={{ fontStyle: 'italic', letterSpacing: '-0.08em' }}>
          SL<span className="text-gradient">.</span>
        </a>
        <nav className={`outer-menu ${menuVisible ? "menu-visible" : ""}`}>
          <button
            className="hamburger w-6 h-6 flex items-center justify-center link relative"
            onClick={setmenuVisible.bind(null, !menuVisible)}
          >
            <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center"></div>
          </button>
          <Menu setmenuVisible={setmenuVisible} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
