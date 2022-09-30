import { useState } from "react";

export function useScreenWidth() {
  const [screen, setScreen] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setScreen(window.innerWidth);
  });
  return { screen };
}