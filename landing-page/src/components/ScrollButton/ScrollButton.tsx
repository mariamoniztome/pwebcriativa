import { useState, useEffect } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

export const ScrollButton = (): JSX.Element => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      
      // Consider "at bottom" when within 100px of the bottom
      const atBottom = scrollTop + clientHeight >= scrollHeight - 100;
      setIsAtBottom(atBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className="fixed bg-white rounded-full right-32 bottom-32 size-28 p-0 hover:scale-110 transition-all duration-300"
      style={{
        transform: isAtBottom ? 'translateY(-8px)' : 'translateY(8px)'
      }}
    >
      {isAtBottom ? (
        <ArrowUp className="!size-[6rem] text-black" strokeWidth={1} />
      ) : (
        <ArrowDown  className="!size-[6rem] text-black" strokeWidth={1} />
      )}
    </Button>
  );
};
