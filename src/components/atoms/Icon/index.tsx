import "./styles.css";

import down from "../../../images/icon-down.svg";
import up from "../../../images/icon-up.svg";
import threeDots from "../../../images/icon-three-dots.svg";
import facebook from "../../../images/icon-facebook.svg";
import twitter from "../../../images/icon-twitter.svg";
import instagram from "../../../images/icon-instagram.svg";
import youtube from "../../../images/icon-youtube.svg";

const iconLib = {
  down: {
    src: down,
    alt: "Red down arrow",
  },
  up: {
    src: up,
    alt: "Green up arrow",
  },
  threeDots: {
    src: threeDots,
    alt: "More options",
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

export type IconNames = keyof typeof iconLib;
type IconProps = {
  iconName: IconNames | "";
  inline?: boolean;
};

export default function Icon(props: IconProps) {
  const { iconName, inline = true } = props;
  const iconClass = inline ? "icon-inline" : "";
  if (iconName !== "") {
    return (
      <img
        src={iconLib[iconName].src}
        alt={iconLib[iconName].alt}
        className={iconClass}
      />
    );
  } else return <span className={`${iconClass} empty`}></span>;
}
