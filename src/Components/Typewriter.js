import React, { useEffect, useRef } from "react";

const Typewriter = ({ text, speed, onComplete }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let i = 0;

    const type = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else if (onComplete) {
        onComplete();
      }
    };

    element.innerHTML = ""; 
    type();
  }, [text, speed, onComplete]);

  return <span ref={elementRef}></span>;
};

export default Typewriter;
