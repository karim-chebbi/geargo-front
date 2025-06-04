import React from 'react'


const Logo = ({size}) => {
    const gStyle = {
      color: "oklch(57.7% 0.245 27.325)",
    };
    // define the default size if not provided
    size = size || "2.2rem"; // Default size if not provided
  return (
    <p
      style={{
        fontSize: size,
        fontFamily: "WDXL Lubrifont TC",
        color: "oklch(27.9% 0.041 260.031)",
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
        cursor: "pointer",
      }}
    >
      <span style={gStyle}>G</span>ear-<span style={gStyle}>G</span>o
    </p>
  );
}

export default Logo