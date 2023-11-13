import iconSprite from "../../assets/images/icon-sprite.svg";

type IconPropsType = {
  iconId: IconId;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
};
const Icon = ({ iconId, height = "30", viewBox = "0 0 16 16", width = "30", fill = "currentColor" }: IconPropsType) => {
  if (iconId === "abstract") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox={viewBox}>
        <g id="abstract">
          <g stroke-opacity=".5" opacity=".25">
            <path stroke="url(#a)" d="M585.236 470.58h443v443h-443z" transform="rotate(165 585.236 470.58)" />
            <path stroke="url(#b)" d="M616.53 395.03h443v443h-443z" transform="rotate(150 616.53 395.03)" />
            <path stroke="url(#c)" d="M627.204 313.956h443v443h-443z" transform="rotate(135 627.204 313.956)" />
            <path stroke="url(#d)" d="M616.53 232.881h443v443h-443z" transform="rotate(120 616.53 232.881)" />
            <path stroke="url(#e)" d="M585.236 157.331h443v443h-443z" transform="rotate(105 585.236 157.331)" />
          </g>
          <defs>
            <linearGradient id="a" x1="807.849" x2="807.849" y1="470.933" y2="905.433" gradientUnits="userSpaceOnUse">
              <stop stop-color="#fff" />
              <stop offset="1" stop-color="#fff" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="b" x1="839.213" x2="839.213" y1="395.213" y2="829.713" gradientUnits="userSpaceOnUse">
              <stop stop-color="#fff" />
              <stop offset="1" stop-color="#fff" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="c" x1="849.911" x2="849.911" y1="313.956" y2="748.456" gradientUnits="userSpaceOnUse">
              <stop stop-color="#fff" />
              <stop offset="1" stop-color="#fff" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="d" x1="839.213" x2="839.213" y1="232.698" y2="667.198" gradientUnits="userSpaceOnUse">
              <stop stop-color="#fff" />
              <stop offset="1" stop-color="#fff" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="e" x1="807.849" x2="807.849" y1="156.978" y2="591.478" gradientUnits="userSpaceOnUse">
              <stop stop-color="#fff" />
              <stop offset="1" stop-color="#fff" stop-opacity="0" />
            </linearGradient>
          </defs>
        </g>
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox={viewBox}>
      <use xlinkHref={`${iconSprite}#${iconId}`} />
    </svg>
  );
};

export default Icon;

export type IconId =
  | "whatsapp"
  | "logo"
  | "abstract"
  | "storybook"
  | "mui"
  | "radix"
  | "webstorm"
  | "email"
  | "jest"
  | "figma"
  | "styledComponent"
  | "ts"
  | "git"
  | "sass"
  | "redux"
  | "react"
  | "js"
  | "css"
  | "html"
  | "anchor"
  | "vk"
  | "github"
  | "telegram";
