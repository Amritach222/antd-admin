import { useState, useEffect } from "react";

const useScreenHeight = (): number => {
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const updateHeight = (): void => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return height;
};

export default useScreenHeight;
