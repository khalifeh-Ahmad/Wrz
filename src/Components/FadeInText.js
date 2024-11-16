import React, { useState, useEffect } from "react";

const FadeInText = ({ text }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return <p className={visible ? "fade-in" : "hidden"}>{text}</p>;
};

export default FadeInText;
