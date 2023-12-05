import React, { useEffect, useState } from "react";
import { IoArrowUpCircleSharp } from "react-icons/io5";
function Top() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  return (
    <div className={offset > 2000 ? "showTop" : ""}>
      <a href="#top">
        <IoArrowUpCircleSharp color="#171d1b" size={30} />
      </a>
    </div>
  );
}

export default Top;
