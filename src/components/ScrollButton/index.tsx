import { useState } from "react";
import IconScroll from "../../assets/ScrollButton/icon_scroll.png";
import { motion } from "framer-motion";

import "./scrollbutton.scss";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={visible ? "inline scroll-button" : "none scroll-button"}
      onClick={scrollToTop}
    >
      <motion.img
        src={IconScroll}
        alt='icon-scroll'
        whileHover={{ scale: 1.2 }}
      />
    </div>
  );
};

export default ScrollButton;
