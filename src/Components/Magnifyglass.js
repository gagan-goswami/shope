import React, { useState } from "react";

const MagnifyingGlass = ({ imageSrc, width, height }) => {
  const [magnifierStyle, setMagnifierStyle] = useState({
    left: "0px",
    top: "0px",
    display: "none",
  });

  // Handle mouse movement over the image
  const handleMouseMove = (e) => {
    const magnifier = document.querySelector(".magnifier");
    const image = document.querySelector(".main-image img");

    // Get the bounding box of the image
    const imageRect = image.getBoundingClientRect();

    // Calculate mouse position relative to the image
    const mouseX = e.clientX - imageRect.left;
    const mouseY = e.clientY - imageRect.top;

    // Ensure magnifier stays within the image bounds
    const magnifierHalfWidth = width / 2;
    const magnifierHalfHeight = height / 2;

    const left = Math.max(
      magnifierHalfWidth,
      Math.min(mouseX, imageRect.width - magnifierHalfWidth)
    );
    const top = Math.max(
      magnifierHalfHeight,
      Math.min(mouseY, imageRect.height - magnifierHalfHeight)
    );

    // Set the position of the magnifier
    setMagnifierStyle({
      left: `${left - magnifierHalfWidth}px`, // Center the magnifier
      top: `${top - magnifierHalfHeight}px`, // Center the magnifier
      display: "block", // Show magnifier
    });
  };

  // Hide the magnifier
  const handleMouseLeave = () => {
    setMagnifierStyle({ ...magnifierStyle, display: "none" });
  };

  return (
    <div
      className="magnifier"
      style={{
        ...magnifierStyle,
        position: "absolute",
        border: "2px solid #000",
        borderRadius: "50%",
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
        pointerEvents: "none", // Disable pointer events
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageSrc}
        alt="Magnified"
        style={{
          position: "relative",
          transform: "scale(2)", // Scale the image for magnification
          transformOrigin: "top left",
          width: "100%", // Fill the magnifier area
          height: "auto",
          pointerEvents: "none", // Disable pointer events on the image
        }}
      />
    </div>
  );
};

export default MagnifyingGlass;
