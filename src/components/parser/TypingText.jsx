import { useState, useEffect } from "react";

export default function TypingText({ text, speed = 100, className = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    let current = "";

    const interval = setInterval(() => {
      current += text.charAt(index);
      setDisplayed(current);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <h1 className={className}>{displayed}</h1>;
}
