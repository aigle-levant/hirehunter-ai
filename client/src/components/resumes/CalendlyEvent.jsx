import { useEffect, useRef } from "react";

export default function CalendlyWidget() {
  const calendlyRef = useRef(null);

  useEffect(() => {
    // Avoid loading multiple times
    if (!window.Calendly) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={calendlyRef}
      className="calendly-inline-widget"
      data-url="https://calendly.com/aiglelevant/30min"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
}
