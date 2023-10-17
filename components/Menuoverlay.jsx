import React from 'react'

const Menuoverlay = ({setShowMenuOverlay, showMenuOverlay}) => {

    const closeMenu = () => {
        setShowMenuOverlay(false)
    }

  return (
    <div
      className={`${
        showMenuOverlay ? "max-w-[500px] right-0" : "-right-[500px] max-w-0"
      }
    fixed flex justify-center items-center w-1/2 h-screen top-0 bg-[#a7b0a9] z-50 shadow-lg 
    transition-all duration-1000 ease-in-out hamburger:hidden bg-gradient-to-r from-[#a7b0a9] to-[#8a948c]`}
    >
      Menu overlay
      <div
        className="absolute text-2xl text-green-950 right-10 top-10"
        onClick={closeMenu}
      >
        X
      </div>
    </div>
  );
}

export default Menuoverlay
