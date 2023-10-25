import { useState } from "react";
import Navigation from "./Navigation.jsx";
import Brand from "./Brand.jsx";
import UserMenu from "./UserMenu.jsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAuth } from "../redux/authSlice.js";
import ConfirmationModal from "./ConfirmationModal.jsx";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleLogoutConfirm = () => {
    setIsModalOpen(false);
    dispatch(removeAuth());
    navigate("/login");
  };

  return (
    <>
      <header className="fixed top-0 z-40 w-full bg-white py-5 shadow-md">
        <div className="mx-auto flex max-w-[1340px] items-center justify-between px-5 md:px-16">
          <Brand onOpenMenu={handleOpenMenu} />
          <Navigation isMenuOpen={isMenuOpen} onCloseMenu={handleCloseMenu} />
          <UserMenu onOpenModal={handleOpenModal} />
        </div>
      </header>

      {isModalOpen && (
        <ConfirmationModal
          onClose={handleCloseModal}
          onConfirm={handleLogoutConfirm}
          confirmOption={"LOGOUT"}
        >
          Are you sure you want to log out?
        </ConfirmationModal>
      )}
    </>
  );
}

export default Header;
