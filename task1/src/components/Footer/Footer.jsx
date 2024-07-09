import "./Footer.css";
import { useEffect, useState } from "react";

export function Footer() {
  // const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    // window.onresize = () => handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      // window.onresize = false;

      window.addEventListener("resize", handleResize);
    };
  }, []);
  return <footer>{`width: ${width}, height: ${height}`}</footer>;
}
