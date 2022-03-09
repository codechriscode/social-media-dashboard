import "./Icon.css";

import down from "../../images/icon-down.svg";
import up from "../../images/icon-up.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import instagram from "../../images/icon-instagram.svg";
import youtube from "../../images/icon-youtube.svg";

const iconLib: { [key: string]: { src: any; alt: string } } = {
  down: {
    src: down,
    alt: "Red down arrow",
  },
  up: {
    src: up,
    alt: "Green up arrow",
  },
  Facebook: {
    src: facebook,
    alt: "Facebook",
  },
  Twitter: {
    src: twitter,
    alt: "Twitter",
  },
  Instagram: {
    src: instagram,
    alt: "Instagram",
  },
  YouTube: {
    src: youtube,
    alt: "YouTube",
  },
};

type IconProps = {
  iconName: string;
  inline?: boolean;
};

export default function Icon(props: IconProps) {
  const { iconName, inline = true } = props;
  return (
    <img
      src={iconLib[iconName].src}
      alt={iconLib[iconName].alt}
      className={inline ? "icon-inline" : ""}
    />
  );
}
