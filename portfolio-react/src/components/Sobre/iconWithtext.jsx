import React, { useState } from 'react';
import {
    BiLogoTypescript,
    BiLogoJavascript,
    BiLogoCss3,
    BiLogoHtml5,
    BiLogoRedux,
    BiLogoReact,
  } from "react-icons/bi";
import './IconWithText.css';


const iconMap = {
    React: BiLogoReact,
    JavaScript: BiLogoJavascript,
    Typescript: BiLogoTypescript,
    Redux: BiLogoRedux,
    Css: BiLogoCss3,
    Html: BiLogoHtml5,
};

const colorMap = {
  React: "#089aff",
  JavaScript: "#dfc607",
  Typescript: "#2088d9",
  Redux: "#370881",
  Css: "#00a8f8",
  Html: "#fe7c2c",
}

  
const IconWithText = ({ iconName, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    return null;
  }

  return (
    <div
      className={"icon-container"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="icon" style={{ color: colorMap[iconName] || "#000" }}>
        <IconComponent />
      </div>
      {isHovered && <div className="text-over-icon">{hoverText}</div>}
    </div>
  );
};

export default IconWithText;

  
