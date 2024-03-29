import { useState } from 'react';
import {
    BiLogoTypescript,
    BiLogoJavascript,
    BiLogoCss3,
    BiLogoHtml5,
    BiLogoRedux,
    BiLogoReact,
    BiLogoNodejs,
    BiLogoPostgresql,
  } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import './IconWithText.css';


const iconMap = {
    React: BiLogoReact,
    JavaScript: BiLogoJavascript,
    TypeScript: BiLogoTypescript,
    Redux: BiLogoRedux,
    Css: BiLogoCss3,
    Html: BiLogoHtml5,
    NodeJs: BiLogoNodejs,
    PostgreSQL: BiLogoPostgresql,
    NextJs:  SiNextdotjs,
};

const colorMap = {
  React: "#089aff",
  JavaScript: "#dfc607",
  TypeScript: "#2088d9",
  Redux: "#370881",
  Css: "#00a8f8",
  Html: "#fe7c2c",
  NodeJs: "#2fff00",
  PostgreSQL: "#3087f9",
  NextJs: "#b3b3b3" ,
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

  
