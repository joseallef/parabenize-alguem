import { useEffect, useState } from "react"

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 1200,
    height: 730
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}