"use client"
import {useState, useEffect} from 'react'

const Totop = () => {

    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const handleScroll = () => {
      const offset = window.scrollY;
      offset > 700 ? setShowButton(true) : setShowButton(false);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div>
      {showButton ? (
        <div className="fixed bottom-6 right-4">
          <button
            className="w-20 h-20 rounded-full border-2 border-[#9e4329] text-[#9e4329] text-xl"
            onClick={scrollToTop}
          >
            to top
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Totop
