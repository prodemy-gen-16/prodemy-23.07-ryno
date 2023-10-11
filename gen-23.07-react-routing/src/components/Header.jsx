import Navigation from "./Navigation.jsx";
import Brand from "./Brand.jsx";
import UserMenu from "./UserMenu.jsx";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 z-40 w-full bg-white py-5 shadow-md">
      <div className="mx-auto flex max-w-[1340px] items-center justify-between px-5 md:px-16">
        <Brand onOpenMenu={handleOpenMenu} />
        <Navigation isMenuOpen={isMenuOpen} onCloseMenu={handleCloseMenu} />
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
