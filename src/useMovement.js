import { useEffect } from "react";
import { useState } from "react";

export default function useMovement() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    function handleKeyDown(e) {
      if (e.key == "ArrowUp") move("up");
      if (e.key == "ArrowLeft") move("left");
      if (e.key == "ArrowDown") move("down");
      if (e.key == "ArrowRight") move("right");
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const move = (dir) => {
    setDirection(dir);
    if (dir == "up") setY((y) => y - 20);
    if (dir == "left") setX((x) => x - 20);
    if (dir == "down") setY((y) => y + 20);
    if (dir == "right") setX((x) => x + 20);
  };
  return { x, y, direction, setX, setY, move };
}
