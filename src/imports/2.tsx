import clsx from "clsx";
import svgPaths from "./svg-cbnz77dub1";
import imgVerticalContainer from "figma:asset/de7ee7382a92333e3e94ab22460b6f8ec5723a84.png";
import imgFlow1512P25Fps2 from "figma:asset/540a8d44e219ebf1016269b72e2d87d0a1e8d118.png";
import imgAvatarImage from "figma:asset/31f433b6f3f2169d0ae793fe5c0bffb1e8f7e405.png";

function BackgroundImage15({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[12px] relative w-full">{children}</div>
    </div>
  );
}

function BackgroundImage14({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#fbfbfb] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[12px] relative w-full">{children}</div>
    </div>
  );
}

function FrameBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function FrameBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage13Props = {
  additionalClassNames?: string;
};

function BackgroundImage13({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage13Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">{children}</div>
    </div>
  );
}
type BackgroundImage12Props = {
  additionalClassNames?: string;
};

function BackgroundImage12({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage12Props>) {
  return (
    <div className={clsx("relative rounded-[8px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">{children}</div>
    </div>
  );
}

function BackgroundImage11({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center max-h-[inherit] max-w-[inherit] size-full">
      <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] p-[2px] relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#fbf5d9] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(203,128,43,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['LiciumFont_2022:Regular',sans-serif] gap-[4px] items-center leading-[1.6] not-italic px-[8px] py-[6px] relative text-[12px] tracking-[-0.06px] w-full whitespace-nowrap">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImage9Props = {
  additionalClassNames?: string;
};

function BackgroundImage9({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage9Props>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-[41.401222229003906px] min-w-[106.46028137207031px] relative rounded-br-[4px] rounded-tr-[4px]", additionalClassNames)}>
      <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[12px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function CheckboxBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white max-h-[16px] max-w-[16px] relative rounded-[4px] shrink-0 size-[16px]">
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <BackgroundImage11>{children}</BackgroundImage11>
    </div>
  );
}

function ComListLevelBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage12 additionalClassNames="w-full">
      <div className="content-stretch flex gap-[16px] items-center px-[8px] py-[6px] relative w-full">{children}</div>
    </BackgroundImage12>
  );
}

function NavBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage12 additionalClassNames="w-[48px]">
      <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">{children}</div>
    </BackgroundImage12>
  );
}

function ContentBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[5px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[4.58%_4.52%_4.61%_5.48%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2 16.346">
        <g id="Group 1321320002">{children}</g>
      </svg>
    </div>
  );
}
type BackgroundImage7Props = {
  additionalClassNames?: string;
};

function BackgroundImage7({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage7Props>) {
  return (
    <BackgroundImage13 additionalClassNames={clsx("relative rounded-[5px] shrink-0", additionalClassNames)}>
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[3px] relative">{children}</div>
    </BackgroundImage13>
  );
}
type BadgeBackgroundImageProps = {
  additionalClassNames?: string;
};

function BadgeBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BadgeBackgroundImageProps>) {
  return (
    <BackgroundImage13 additionalClassNames={clsx("relative rounded-[100px] shrink-0", additionalClassNames)}>
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[6px] py-px relative">{children}</div>
    </BackgroundImage13>
  );
}

function BackgroundImage6() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 283 1">
          <path d="M0 0.5H283" id="Vector 4724" stroke="var(--stroke-0, #EDEDED)" />
        </svg>
      </div>
    </div>
  );
}

function BackgroundImage5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]">
        <div className="absolute inset-0 overflow-clip" data-name="icon/line/duration">
          <div className="absolute inset-[6.27%_6.32%_6.25%_6.31%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9792 13.998">
              <path d={svgPaths.p2f228000} fill="var(--fill-0, #525252)" id="Union" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[21.87%_21.88%_25.6%_21.88%]">
          <div className="absolute inset-[-3.74%_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 8.71791">
              <g id="Group 1321320040">
                <path d={svgPaths.p3bb03e00} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinejoin="round" />
                <line id="Line 2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="6.5" x2="8.5" y1="4.81438" y2="4.81438" />
                <line id="Line 3" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="5.5" x2="8.5" y1="7.31389" y2="7.31389" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type BackgroundImageAndText6Props = {
  text: string;
};

function BackgroundImageAndText6({ text }: BackgroundImageAndText6Props) {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon/line/overdue">
        <div className="absolute inset-[3.12%_10.94%_6.25%_10.94%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 14.5">
            <path d={svgPaths.p2f033500} fill="var(--fill-0, #7C7C7C)" id="Union" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['LiciumFont_2022:Regular',sans-serif] leading-[1.6] min-h-px min-w-px not-italic relative text-[#7c7c7c] text-[12px] tracking-[-0.06px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndText5Props = {
  text: string;
};

function BackgroundImageAndText5({ text }: BackgroundImageAndText5Props) {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[4px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
        <p className="font-['LiciumFont_2022:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#383838] text-[12px] tracking-[-0.06px] w-full">{text}</p>
      </div>
    </div>
  );
}
type BackgroundImageAndText4Props = {
  text: string;
};

function BackgroundImageAndText4({ text }: BackgroundImageAndText4Props) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['LiciumFont_2022:Regular',sans-serif] leading-[1.15] min-h-px min-w-px not-italic relative text-[#171717] text-[13px] tracking-[0.065px]">{text}</p>
    </div>
  );
}
type BackgroundImage4Props = {
  text: string;
  text1: string;
};

function BackgroundImage4({ text, text1 }: BackgroundImage4Props) {
  return (
    <div className="content-stretch flex font-['LiciumFont_2022:Regular',sans-serif] gap-[12px] items-start justify-center leading-[1.15] not-italic relative shrink-0 text-[11px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#525252]">{text}</p>
      <p className="relative shrink-0 text-[#999] tracking-[0.88px] uppercase">{text1}</p>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
};

function BackgroundImageAndText3({ text }: BackgroundImageAndText3Props) {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="font-['LiciumFont_2022:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#7c7c7c] text-[11px] tracking-[0.88px] uppercase whitespace-nowrap">{text}</p>
      <CellPrimitiveBackgroundImageAndText text="连小山" />
      <CellPrimitiveBackgroundImageAndText text="博世Agent" />
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="font-['LiciumFont_2022:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#7c7c7c] text-[11px] tracking-[0.88px] uppercase whitespace-nowrap">{text}</p>
      <CellPrimitiveBackgroundImageAndText text="连小山" />
    </div>
  );
}
type TitleBackgroundImageProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function TitleBackgroundImage({ text, text1, additionalClassNames = "" }: TitleBackgroundImageProps) {
  return (
    <div className={clsx("content-stretch flex font-['LiciumFont_2022:Regular',sans-serif] items-center not-italic relative shrink-0 w-full", additionalClassNames)}>
      <p className="flex-[1_0_0] leading-[1.15] min-h-px min-w-px relative text-[#171717] text-[13px] tracking-[0.065px]">{text}</p>
      <p className="leading-[normal] relative shrink-0 text-[11px] text-[rgba(81,82,82,0.42)] whitespace-nowrap">{text1}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return (
    <div className={clsx("content-stretch flex gap-[2px] items-center justify-end relative", additionalClassNames)}>
      <div className="flex flex-col font-['LiciumFont_2022:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7c7c7c] text-[11px] whitespace-nowrap">
        <p className="leading-[1.15]">{text}</p>
      </div>
      <CellPrimitiveBackgroundImageAndText text="连小山" />
    </div>
  );
}
type BackgroundImage3Props = {
  text: string;
  text1: string;
};

function BackgroundImage3({ text, text1 }: BackgroundImage3Props) {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['LiciumFont_2022:Regular',sans-serif] items-start leading-[0] min-h-px min-w-px not-italic relative text-[11px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#7c7c7c]">
        <p className="leading-[1.15]">{text}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#48669c]">
        <p className="leading-[1.15]">{text1}</p>
      </div>
    </div>
  );
}
type BackgroundImage2Props = {
  text: string;
  text1: string;
};

function BackgroundImage2({ text, text1 }: BackgroundImage2Props) {
  return (
    <div className="content-stretch flex font-['LiciumFont_2022:Regular',sans-serif] gap-[4px] h-[16px] items-center leading-[0] not-italic relative shrink-0 text-[11px] w-full">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#7c7c7c]">
        <p className="leading-[1.15]">{text}</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#383838] text-right">
        <p className="leading-[1.15]">{text1}</p>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['LiciumFont_2022:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#7c7c7c] text-[11px]">
        <p className="leading-[1.15]">{text}</p>
      </div>
    </div>
  );
}
type BackgroundImage1Props = {
  text: string;
  text1: string;
};

function BackgroundImage1({ text, text1 }: BackgroundImage1Props) {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['LiciumFont_2022:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#171717] text-[13px]">
        <p className="leading-[1.15]">{text}</p>
      </div>
      <BadgeBackgroundImage additionalClassNames="bg-[#fff7d3]">
        <div className="flex flex-col font-['LiciumFont_2022:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#db7706] text-[12px] whitespace-nowrap">
          <p className="leading-[1.15]">{text1}</p>
        </div>
      </BadgeBackgroundImage>
    </div>
  );
}
type CellPrimitiveBackgroundImageAndTextProps = {
  text: string;
};

function CellPrimitiveBackgroundImageAndText({ text }: CellPrimitiveBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0">
      <div className="h-[14.787px] overflow-clip relative shrink-0 w-[16px]">
        <div className="absolute h-[20.22px] left-[-2.94px] top-[-2.71px] w-[21.879px]" data-name="Flow 1@512p-25fps 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlow1512P25Fps2} />
        </div>
      </div>
      <div className="flex flex-col font-['LiciumFont_2022:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7c7c7c] text-[11px] whitespace-nowrap">
        <p className="leading-[1.15]">{text}</p>
      </div>
    </div>
  );
}

function Flow1512P25FpsBackgroundImage() {
  return (
    <div className="absolute h-[40.44px] left-[-5.88px] top-[-5.43px] w-[43.758px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlow1512P25Fps2} />
    </div>
  );
}
type Frame1321320085TagBackgroundImageAndTextProps = {
  text: string;
};

function Frame1321320085TagBackgroundImageAndText({ text }: Frame1321320085TagBackgroundImageAndTextProps) {
  return (
    <BackgroundImage7 additionalClassNames="bg-[#f8f8f8]">
      <div className="flex flex-col font-['LiciumFont_2022:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px] whitespace-nowrap">
        <p className="leading-[1.15]">{text}</p>
      </div>
    </BackgroundImage7>
  );
}
type ContentBackgroundImageAndTextProps = {
  text: string;
};

function ContentBackgroundImageAndText({ text }: ContentBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative">
      <p className="font-['LiciumFont_2022:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function LeadingBackgroundImage() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="relative size-[16px]" data-name="arrow_input_arrowright_o">
            <div className="absolute inset-[12.51%_28.13%_12.5%_31.25%]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.49894 11.998">
                <path d={svgPaths.p2c31af00} fill="var(--fill-0, #141515)" fillOpacity="0.56" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 1">
          <g id="Frame 1321318969">
            <path d="M8 0.5H41" id="Vector 4557" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type NavProps = {
  className?: string;
  isActive?: boolean;
  style?: "AI市场" | "AI教练" | "二级导航" | "大盘" | "感知计算" | "数据科学项目" | "连小山";
  type?: "展开" | "收起";
};

function Nav({ className, isActive = false, style = "大盘", type = "展开" }: NavProps) {
  const is = style === "感知计算";
  const is1 = style === "连小山";
  const is2 = style === "数据科学项目";
  const isAi = style === "AI教练";
  const isAi1 = style === "AI市场";
  const isAiAndIsActive = style === "AI教练" && isActive;
  const isAiAndIsActive1 = style === "AI市场" && isActive;
  const isAiAndNotIsActive = style === "AI教练" && !isActive;
  const isAiAndNotIsActive1 = style === "AI市场" && !isActive;
  const isAnd = type === "收起" && style === "大盘";
  const isAnd1 = type === "展开" && style === "大盘";
  const isAnd2 = type === "展开" && style === "二级导航";
  const isAndAndIsActive = type === "展开" && style === "大盘" && isActive;
  const isAndAndNotIsActive = type === "展开" && style === "大盘" && !isActive;
  const isAndIsActive = style === "感知计算" && isActive;
  const isAndIsOrOrOrOrAiOrAi = type === "收起" && ["大盘", "连小山", "感知计算", "数据科学项目", "AI教练", "AI市场"].includes(style);
  const isIsActive = isActive;
  const isNotIsActive = !isActive;
  return (
    <div className={className || `relative rounded-[8px] ${isAndIsOrOrOrOrAiOrAi ? "w-[48px]" : "w-[220px]"}`}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative w-full">
          <div className={`flex-[1_0_0] min-h-px min-w-px relative ${type === "展开" && !isActive && ["连小山", "AI教练"].includes(style) ? "rounded-[4px]" : type === "展开" && !isActive && ["感知计算", "大盘", "AI市场"].includes(style) ? "" : type === "展开" && isActive && ["数据科学项目", "感知计算", "大盘", "连小山", "AI教练", "AI市场"].includes(style) ? "bg-[rgba(206,164,114,0.16)] rounded-[4px]" : isActive && ((type === "展开" && style === "二级导航") || (type === "收起" && style === "大盘") || (type === "收起" && style === "连小山") || (type === "收起" && style === "感知计算") || (type === "收起" && style === "数据科学项目") || (type === "收起" && style === "AI教练") || (type === "收起" && style === "AI市场")) ? "bg-[rgba(206,164,114,0.16)] h-[28px] rounded-[4px]" : "h-[28px]"}`} data-name="content">
            <div className={`flex flex-row items-center size-full ${isAndIsOrOrOrOrAiOrAi ? "justify-center" : ""}`}>
              <div className={`content-stretch flex gap-[8px] items-center relative ${isAndIsOrOrOrOrAiOrAi ? "justify-center px-[8px] py-[5px] size-full" : type === "展开" && ((style === "数据科学项目" && isActive) || style === "感知计算" || style === "大盘" || style === "连小山" || style === "AI教练" || style === "AI市场") ? "px-[8px] py-[4px] w-full" : type === "展开" && style === "数据科学项目" && !isActive ? "px-[8px] py-[4px] size-full" : "pl-[32px] pr-[8px] py-[4px] size-full"}`}>
                {["数据科学项目", "感知计算", "大盘", "连小山", "AI教练", "AI市场"].includes(style) && (
                  <div className={`relative shrink-0 size-[18px] ${isAnd ? "overflow-clip" : ""}`} data-name="Frame">
                    {(["数据科学项目", "感知计算"].includes(style) || isAnd1 || is1 || isAi || isAi1) && (
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g clipPath={isAiAndIsActive1 ? "url(#clip0_1_21328)" : isAiAndIsActive ? "url(#clip0_1_21341)" : isAiAndNotIsActive1 ? "url(#clip0_1_20733)" : isAiAndNotIsActive ? "url(#clip0_1_20435)" : isAndAndIsActive ? "url(#clip0_1_21357)" : isAndAndNotIsActive ? "url(#clip0_1_21345)" : isAndIsActive ? "url(#clip0_1_21353)" : style === "感知计算" && !isActive ? "url(#clip0_1_20439)" : undefined} id="Frame">
                          {(is || isAnd1 || isAi || isAi1) && <g id="Vector" />}
                          <path d={isAi1 ? svgPaths.p18f53638 : isAi ? svgPaths.p10853400 : is1 ? svgPaths.pd311680 : isAnd1 ? svgPaths.p1e254400 : is ? svgPaths.p87c5000 : svgPaths.p2b4ab400} fill={isActive && (["数据科学项目", "感知计算"].includes(style) || (type === "展开" && style === "大盘") || style === "连小山" || style === "AI教练" || style === "AI市场") ? "var(--fill-0, #CEA472)" : "var(--fill-0, white)"} fillOpacity={!isActive && (["数据科学项目", "感知计算"].includes(style) || (type === "展开" && style === "大盘") || style === "连小山" || style === "AI教练" || style === "AI市场") ? "0.63" : undefined} id={is1 ? "Union" : is || isAnd1 || isAi || isAi1 ? "Vector_2" : "Vector"} />
                          {is2 && <path d={svgPaths.p15af9670} fill={isIsActive ? "var(--fill-0, #CEA472)" : "var(--fill-0, white)"} fillOpacity={isNotIsActive ? "0.63" : undefined} id="Vector_2" opacity="0.6" />}
                          {isAi1 && (
                            <g id="Vector_3">
                              <path d={svgPaths.p3f5d8740} fill={isIsActive ? "var(--fill-0, #CEA472)" : "var(--fill-0, white)"} fillOpacity={isNotIsActive ? "0.63" : undefined} />
                              <path d={svgPaths.p2b2bde00} fill={isIsActive ? "var(--fill-0, #CEA472)" : "var(--fill-0, white)"} fillOpacity={isNotIsActive ? "0.63" : undefined} />
                            </g>
                          )}
                        </g>
                        {(is || isAnd1 || isAi || isAi1) && (
                          <defs>
                            <clipPath id={isAiAndIsActive1 ? "clip0_1_21328" : isAiAndIsActive ? "clip0_1_21341" : isAiAndNotIsActive1 ? "clip0_1_20733" : isAiAndNotIsActive ? "clip0_1_20435" : isAndAndIsActive ? "clip0_1_21357" : isAndAndNotIsActive ? "clip0_1_21345" : isAndIsActive ? "clip0_1_21353" : "clip0_1_20439"}>
                              <rect fill="white" height="18" width="18" />
                            </clipPath>
                          </defs>
                        )}
                      </svg>
                    )}
                    {isAnd && (
                      <BackgroundImage8>
                        <path d={svgPaths.p2286c740} fill={isIsActive ? "var(--fill-0, #CEA472)" : "var(--fill-0, white)"} fillOpacity={isNotIsActive ? "0.81" : undefined} id="Vector" />
                        <path d={svgPaths.p1b646a00} fill={isIsActive ? "var(--fill-0, #CEA472)" : "var(--fill-0, white)"} fillOpacity={isNotIsActive ? "0.81" : undefined} id="Vector_2" />
                      </BackgroundImage8>
                    )}
                  </div>
                )}
                {type === "展开" && ["数据科学项目", "感知计算", "大盘", "连小山", "AI教练", "AI市场"].includes(style) && <p className={`flex-[1_0_0] h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[13px] text-ellipsis whitespace-nowrap ${isActive && ["AI教练", "AI市场"].includes(style) ? 'font-["LiciumFont_2022:Regular",sans-serif] text-[#cea472]' : isActive && ["数据科学项目", "感知计算", "大盘", "连小山"].includes(style) ? 'font-["LiciumFont_2022:Medium",sans-serif] text-[#cea472]' : 'font-["LiciumFont_2022:Regular",sans-serif] text-[rgba(255,255,255,0.81)]'}`}>{isAi1 ? "Ai市场" : isAi ? "Ai教练" : is1 ? "连小山" : style === "大盘" && isActive ? "大盘" : is ? "感知计算" : is2 ? "数据科学项目" : "大盘"}</p>}
                {isAnd2 && (
                  <>
                    <div className="content-stretch flex items-start relative shrink-0" data-name="Text input">
                      <div className="min-h-[12px] min-w-[12px] relative shrink-0 size-[16px]" data-name="icon-sizer-12">
                        <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] relative size-full">
                            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="icon/line/sparkle">
                              <div className="absolute inset-[3.64%_3.65%_3.65%_3.64%]" data-name="Union">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8339 14.8339">
                                  <path d={svgPaths.pdfc180} fill="var(--fill-0, #171717)" id="Union" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className={`flex-[1_0_0] font-["LiciumFont_2022:Regular",sans-serif] h-[20px] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[13px] text-ellipsis whitespace-nowrap ${isIsActive ? "text-[#cea472]" : "text-[rgba(255,255,255,0.81)]"}`}>花津工厂项目</p>
                  </>
                )}
                {type === "展开" && style === "数据科学项目" && (
                  <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="arrow_input_arrowdown_o">
                    <div className="absolute inset-[31.25%_12.51%_28.13%_12.5%]" data-name="Union">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.998 6.49894">
                        <path d={svgPaths.p1362a700} fill="var(--fill-0, #141515)" fillOpacity="0.56" id="Union" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="2" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 248, 248) 0%, rgb(248, 248, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="bg-[#22252c] content-stretch flex flex-col h-full items-start relative shadow-[0px_0px_1px_0px_rgba(2,24,21,0.16),0px_4px_12px_0px_rgba(2,24,21,0.03)] shrink-0 w-[49px]" data-name="aside">
        <div className="h-[64px] relative shrink-0 w-full" data-name="logobar">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative size-full">
              <div className="relative shrink-0 size-[32px]" data-name="智能与系统-连山 3">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="æºè½ä¸ç³»ç»-è¿å±± 3">
                    <g clipPath="url(#clip0_1_20265)">
                      <g id="Vector" />
                      <path d={svgPaths.p3ae57f00} fill="var(--fill-0, #CEA472)" id="Vector_2" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_20265">
                      <rect fill="white" height="32" rx="6" width="32" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="contents">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="nav">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative w-full">
              <BackgroundImage />
              <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full">
                <NavBackgroundImage>
                  <ContentBackgroundImage>
                    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Frame">
                      <BackgroundImage8>
                        <path d={svgPaths.p2286c740} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector" />
                        <path d={svgPaths.p1b646a00} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector_2" />
                      </BackgroundImage8>
                    </div>
                  </ContentBackgroundImage>
                </NavBackgroundImage>
                <Nav className="relative rounded-[8px] shrink-0 w-[48px]" isActive style="连小山" type="收起" />
                <NavBackgroundImage>
                  <ContentBackgroundImage>
                    <FrameBackgroundImage>
                      <g clipPath="url(#clip0_1_20033)" id="Frame">
                        <g id="Vector" />
                        <path d={svgPaths.p87c5000} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector_2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_20033">
                          <rect fill="white" height="18" width="18" />
                        </clipPath>
                      </defs>
                    </FrameBackgroundImage>
                  </ContentBackgroundImage>
                </NavBackgroundImage>
              </div>
              <BackgroundImage />
              <NavBackgroundImage>
                <ContentBackgroundImage>
                  <FrameBackgroundImage>
                    <g id="Frame">
                      <path d={svgPaths.p2b4ab400} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector" />
                      <path d={svgPaths.p15af9670} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector_2" opacity="0.6" />
                    </g>
                  </FrameBackgroundImage>
                </ContentBackgroundImage>
              </NavBackgroundImage>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-start justify-end min-h-px min-w-px relative w-[220px]">
                <NavBackgroundImage>
                  <ContentBackgroundImage>
                    <FrameBackgroundImage>
                      <g clipPath="url(#clip0_1_19912)" id="Frame">
                        <g id="Vector" />
                        <path d={svgPaths.p10853400} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector_2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_19912">
                          <rect fill="white" height="18" width="18" />
                        </clipPath>
                      </defs>
                    </FrameBackgroundImage>
                  </ContentBackgroundImage>
                </NavBackgroundImage>
                <NavBackgroundImage>
                  <ContentBackgroundImage>
                    <FrameBackgroundImage>
                      <g clipPath="url(#clip0_1_20297)" id="Frame">
                        <g id="Vector" />
                        <path d={svgPaths.p18f53638} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector_2" />
                        <g id="Vector_3">
                          <path d={svgPaths.p3f5d8740} fill="var(--fill-0, white)" fillOpacity="0.81" />
                          <path d={svgPaths.p2b2bde00} fill="var(--fill-0, white)" fillOpacity="0.81" />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_20297">
                          <rect fill="white" height="18" width="18" />
                        </clipPath>
                      </defs>
                    </FrameBackgroundImage>
                  </ContentBackgroundImage>
                </NavBackgroundImage>
              </div>
              <BackgroundImage />
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-px items-start p-[8px] relative w-full">
            <div className="content-stretch flex h-[32px] items-center overflow-clip py-[2px] relative rounded-[8px] shrink-0 w-full" data-name="nav">
              <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="content">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[8px] py-[4px] relative w-full">
                    <FrameBackgroundImage>
                      <g clipPath="url(#clip0_1_20304)" id="Frame">
                        <g id="Vector" />
                        <path d={svgPaths.p8f73600} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector_2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_20304">
                          <rect fill="white" height="18" width="18" />
                        </clipPath>
                      </defs>
                    </FrameBackgroundImage>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="main">
        <div className="content-stretch flex items-center py-[4px] relative shrink-0 w-full" data-name="head">
          <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="contents">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[20px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px overflow-clip relative" data-name="title">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
                    <FrameBackgroundImage1>
                      <g id="Frame">
                        <path d={svgPaths.p1e400700} fill="var(--fill-0, #525252)" id="Union" />
                      </g>
                    </FrameBackgroundImage1>
                    <p className="flex-[1_0_0] font-['LiciumFont_2022:Medium',sans-serif] leading-[1.15] min-h-px min-w-px not-italic relative text-[#525252] text-[14px] tracking-[0.07px]">理想汽车 / 连小山</p>
                  </div>
                  <div className="content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="content">
                    <div className="relative shrink-0 size-[16px]" data-name="icon/line/question">
                      <div className="absolute inset-[4.69%]" data-name="Union">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5 14.5">
                          <path d={svgPaths.p20425300} fill="var(--fill-0, #525252)" id="Union" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[28px]" data-name="com/avatar/simple">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center relative size-full">
                          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Vertical container">
                            <img alt="" className="absolute block max-w-none size-full" height="28" src={imgVerticalContainer} width="28" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="font-['LiciumFont_2022:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[1.15] overflow-hidden relative shrink-0 text-[#171717] text-[13px] text-ellipsis tracking-[0.065px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                      苏玥
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1391 1">
              <path d="M0 0.5H1391" id="Vector 4568" stroke="var(--stroke-0, #EDEDED)" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="body">
          <div className="h-full relative shrink-0 w-[172px]" data-name="aside">
            <div className="content-stretch flex flex-col items-start px-[8px] py-[16px] relative size-full">
              <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="list">
                <ComListLevelBackgroundImage>
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px py-[4px] relative" data-name="Text input container">
                    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="content">
                      <p className="font-['LiciumFont_2022:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] whitespace-nowrap">售后索赔专家</p>
                    </div>
                    <LeadingBackgroundImage />
                  </div>
                </ComListLevelBackgroundImage>
                <BackgroundImage12 additionalClassNames="w-full">
                  <div className="content-stretch flex gap-[16px] items-center px-[8px] relative w-full">
                    <div className="bg-[#e2e2e2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Text input container">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative w-full">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-px min-w-px relative" data-name="content">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                              <ul className="block font-['LiciumFont_2022:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#383838] text-[13px] tracking-[-0.065px] whitespace-nowrap">
                                <li className="list-disc ms-[19.5px]">
                                  <span className="leading-[1.5]">代号001</span>
                                </li>
                              </ul>
                              <FrameBackgroundImage1>
                                <g clipPath="url(#clip0_1_19502)" id="Frame">
                                  <path d={svgPaths.p19bb3b00} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
                                  <path d={svgPaths.p2f9e0500} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector_2" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_19502">
                                    <rect fill="white" height="16" width="16" />
                                  </clipPath>
                                </defs>
                              </FrameBackgroundImage1>
                            </div>
                            <div className="relative shrink-0 w-full">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center pl-[20px] relative w-full">
                                  <p className="flex-[1_0_0] font-['LiciumFont_2022:Regular',sans-serif] leading-[1.15] min-h-px min-w-px not-italic overflow-hidden relative text-[#999] text-[11px] text-ellipsis tracking-[0.88px] uppercase whitespace-nowrap">@售后数据科学项目</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </BackgroundImage12>
                <ComListLevelBackgroundImage>
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px py-[4px] relative" data-name="Text input container">
                    <ContentBackgroundImageAndText text="设备维护专家" />
                    <LeadingBackgroundImage />
                  </div>
                </ComListLevelBackgroundImage>
                <ComListLevelBackgroundImage>
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px py-[4px] relative" data-name="Text input container">
                    <ContentBackgroundImageAndText text="过程分析专家" />
                    <LeadingBackgroundImage />
                  </div>
                </ComListLevelBackgroundImage>
                <ComListLevelBackgroundImage>
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px py-[4px] relative" data-name="Text input container">
                    <ContentBackgroundImageAndText text="参数推荐专家" />
                    <LeadingBackgroundImage />
                  </div>
                </ComListLevelBackgroundImage>
              </div>
            </div>
          </div>
          <div className="h-full relative shrink-0 w-0">
            <div className="absolute inset-[0_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 942">
                <path d="M0.5 0V942" id="Vector 4556" stroke="var(--stroke-0, #EDEDED)" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start min-h-px min-w-px overflow-clip relative">
            <div className="relative shrink-0 w-full" data-name="badge" style={{ backgroundImage: "linear-gradient(90deg, rgba(206, 164, 114, 0.16) 0%, rgba(206, 164, 114, 0.16) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                  <div className="flex flex-[1_0_0] flex-col font-['LiciumFont_2022:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#9c7240] text-[0px]">
                    <p className="text-[12px]">
                      <span className="leading-[1.15]">{`连小山持续从 `}</span>
                      <span className="font-['LiciumFont_2022:Bold',sans-serif] leading-[1.15] not-italic">连山工单库</span>
                      <span className="leading-[1.15]">{` 感知事件中…`}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none" />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Table">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="Horizontal container">
                <div className="content-stretch flex h-full items-center relative shrink-0">
                  <div className="bg-white h-full relative shrink-0 w-[300px]" data-name="com/cell/base">
                    <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
                      <div className="flex items-center justify-center relative shrink-0 w-full">
                        <div className="-scale-y-100 flex-none w-full">
                          <div className="content-stretch flex flex-col h-[32px] items-center relative rounded-[8px] w-full" data-name="com/ex_titlebar">
                            <div className="flex items-center justify-center relative shrink-0 w-full">
                              <div className="-scale-y-100 flex-none w-full">
                                <div className="content-stretch flex gap-[24px] h-[32px] items-center relative w-full" data-name="title">
                                  <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="content">
                                    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="title">
                                      <p className="font-['LiciumFont_2022:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] whitespace-nowrap">事件播报</p>
                                    </div>
                                    <div className="content-stretch flex items-center px-[8px] py-[4px] relative shrink-0" data-name="content">
                                      <div className="flex items-center justify-center relative shrink-0">
                                        <div className="-scale-y-100 flex-none rotate-180">
                                          <div className="overflow-clip relative size-[16px]" data-name="icon/line/menu-expand">
                                            <div className="absolute flex inset-[18.75%_12.19%_18.75%_19.66%] items-center justify-center">
                                              <div className="-scale-y-100 flex-none h-[10px] rotate-180 w-[10.904px]">
                                                <div className="relative size-full" data-name="Union">
                                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9043 10">
                                                    <path d={svgPaths.p3324b180} fill="var(--fill-0, #525252)" id="Union" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                        <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full">
                          <BackgroundImage7 additionalClassNames="bg-[#e2e2e2]">
                            <div className="flex flex-col font-['LiciumFont_2022:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#383838] text-[12px] whitespace-nowrap">
                              <p className="leading-[1.15]">全部</p>
                            </div>
                          </BackgroundImage7>
                          <Frame1321320085TagBackgroundImageAndText text="进行中 (1)" />
                          <Frame1321320085TagBackgroundImageAndText text="@我的(1)" />
                          <Frame1321320085TagBackgroundImageAndText text="已完成 (1)" />
                        </div>
                        <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="input-text">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[14px] items-center px-[8px] py-[6px] relative w-full">
                              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="input-text">
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon/line/email">
                                  <div className="absolute inset-[9.53%_9.86%]" data-name="Union">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8436 12.9499">
                                      <path d={svgPaths.p2f8e9500} fill="var(--fill-0, #999999)" id="Union" />
                                    </svg>
                                  </div>
                                </div>
                                <p className="flex-[1_0_0] font-['LiciumFont_2022:Regular',sans-serif] leading-[1.15] min-h-px min-w-px not-italic relative text-[#999] text-[14px] tracking-[0.07px]">搜索</p>
                              </div>
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="bg-[#e7f0ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
                              <div className="content-stretch flex flex-col gap-[10px] items-start px-[12px] py-[16px] relative w-full">
                                <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                                  <div className="flex flex-[1_0_0] flex-col font-['LiciumFont_2022:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#171717] text-[13px]">
                                    <p className="leading-[1.15]">WO-2026-001</p>
                                  </div>
                                  <BadgeBackgroundImage additionalClassNames="bg-[#e6f4ff]">
                                    <div className="flex flex-col font-['LiciumFont_2022:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#007be0] text-[12px] whitespace-nowrap">
                                      <p className="leading-[1.15]">进行中</p>
                                    </div>
                                  </BadgeBackgroundImage>
                                </div>
                                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                                  <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0 w-full">
                                    <div className="flex flex-[1_0_0] flex-col font-['LiciumFont_2022:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#383838] text-[11px]">
                                      <p className="leading-[1.15]">描述：2026- Week1 索赔分析</p>
                                    </div>
                                  </div>
                                  <div className="content-stretch flex font-['LiciumFont_2022:Regular',sans-serif] gap-[4px] h-[16px] items-center leading-[0] not-italic relative shrink-0 text-[#383838] text-[11px] w-full">
                                    <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative">
                                      <p className="leading-[1.15]">索赔单数：10</p>
                                    </div>
                                    <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-right">
                                      <p className="leading-[1.15]">2026-01-07</p>
                                    </div>
                                  </div>
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                                    <div className="content-stretch flex flex-[1_0_0] font-['LiciumFont_2022:Regular',sans-serif] items-start leading-[0] min-h-px min-w-px not-italic relative text-[11px] whitespace-nowrap">
                                      <div className="flex flex-col justify-center relative shrink-0 text-[#383838]">
                                        <p className="leading-[1.15]">当前任务：</p>
                                      </div>
                                      <div className="flex flex-col justify-center relative shrink-0 text-[#48669c]">
                                        <p className="leading-[1.15]">[A2A]将分析...</p>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0">
                                      <div className="flex flex-col font-['LiciumFont_2022:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#383838] text-[11px] whitespace-nowrap">
                                        <p className="leading-[1.15]">负责人:</p>
                                      </div>
                                      <CellPrimitiveBackgroundImageAndText text="连小山" />
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bg-[#48669c] h-[114px] left-0 rounded-bl-[10px] rounded-tl-[10px] top-0 w-[4px]" />
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#fbfbfb] content-stretch flex flex-col gap-[10px] h-[106px] items-start p-[12px] relative rounded-[4px] shrink-0 w-[268px]">
                            <BackgroundImage1 text="WO-2026-002" text1="待运行" />
                            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                              <BackgroundImageAndText text="描述：2026- Week2 索赔分析" />
                              <BackgroundImage2 text="索赔单数：4" text1="2026-01-14" />
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                                <BackgroundImage3 text="当前任务：" text1="生成完整报告" />
                                <BackgroundImageAndText1 text="负责人:" additionalClassNames="shrink-0" />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <BackgroundImage14>
                              <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                                <div className="flex flex-[1_0_0] flex-col font-['LiciumFont_2022:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#171717] text-[13px]">
                                  <p className="leading-[1.15]">WO-2026-003</p>
                                </div>
                                <BadgeBackgroundImage additionalClassNames="bg-[#f2fdf4]">
                                  <div className="flex flex-col font-['LiciumFont_2022:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16794c] text-[12px] whitespace-nowrap">
                                    <p className="leading-[1.15]">已完成</p>
                                  </div>
                                </BadgeBackgroundImage>
                              </div>
                              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                                <BackgroundImageAndText text="描述：2026- Week3 索赔分析" />
                                <BackgroundImage2 text="索赔单数：0" text1="2026-01-21" />
                                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                                  <BackgroundImage3 text="当前任务：" text1="生成完整报告" />
                                  <BackgroundImageAndText1 text="负责人:" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
                                </div>
                              </div>
                            </BackgroundImage14>
                          </div>
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <BackgroundImage14>
                              <BackgroundImage1 text="WO-2026-004" text1="待运行" />
                              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                                <BackgroundImageAndText text="描述：2026- Week4 索赔分析" />
                                <BackgroundImage2 text="索赔单数：10" text1="2026-01-28" />
                                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                                  <BackgroundImage3 text="当前任务：" text1="索赔详情分析" />
                                  <BackgroundImageAndText1 text="负责人:" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
                                </div>
                              </div>
                            </BackgroundImage14>
                          </div>
                        </div>
                      </div>
                      <div className="-translate-x-1/2 absolute bg-white h-[35.027px] left-[calc(50%-0.11px)] top-[869px] w-[299.773px]">
                        <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none" />
                      </div>
                      <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[15.77px] top-[879.03px]">
                        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon/line/reports">
                          <div className="absolute inset-[12.5%_6.25%]" data-name="Union">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
                              <path d={svgPaths.p1f87b200} fill="var(--fill-0, #48669C)" id="Union" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex flex-col font-['LiciumFont_2022:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#48669c] text-[12px] whitespace-nowrap">
                          <p className="leading-[1.15]">历史工单分析</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-full relative shrink-0 w-0">
                    <div className="absolute inset-[0_-0.5px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 904">
                        <path d="M0.5 0V904" id="Vector 4556" stroke="var(--stroke-0, #EDEDED)" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.45)] border-solid inset-0 pointer-events-none" />
                  <div className="h-[104px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute contents left-[8px] top-0" data-name="Content Container">
                      <div className="absolute contents left-[8px] top-0" data-name="Content Container">
                        <div className="absolute h-[104px] left-[8px] top-0 w-[937.402px]">
                          <div className="absolute inset-[-0.48%_0]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 938.402 105">
                              <path d={svgPaths.p3111eb00} fill="var(--fill-0, white)" id="Rectangle 34628210" stroke="var(--stroke-0, #EDEDED)" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute contents left-[24px] top-[8px]" data-name="Progress Container">
                          <p className="absolute font-['LiciumFont_2022:Medium',sans-serif] leading-[1.5] left-[76px] not-italic text-[#0f0f0f] text-[16px] top-[8px] tracking-[-0.08px] whitespace-nowrap">WO-2026-001</p>
                          <div className="absolute content-stretch flex flex-col gap-[6px] items-start left-[24px] top-[48px] w-[638px]">
                            <p className="font-['LiciumFont_2022:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#383838] text-[0px] text-[12px] tracking-[-0.06px] w-[min-content]">
                              <span className="leading-[1.6]">{`连小山正在实时跟进，当前已规划 `}</span>
                              <span className="font-['LiciumFont_2022:Medium',sans-serif] leading-[20px] text-[#48669c]">4</span>
                              <span className="leading-[1.6]">{` 个任务，正在调用故障树工具…`}</span>
                            </p>
                            <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                              <p className="font-['LiciumFont_2022:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#48669c] text-[11px] whitespace-nowrap">当前进度01/04</p>
                              <div className="content-stretch flex items-center relative shrink-0">
                                <div className="content-stretch flex items-center relative shrink-0">
                                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Progress Bar Container">
                                    <div className="bg-[rgba(72,102,156,0.1)] col-1 h-[6px] ml-0 mt-0 rounded-[11px] row-1 w-[248px]" data-name="Progress Bar Background" />
                                    <div className="col-1 h-[6px] ml-0 mt-0 relative row-1 w-[216px]">
                                      <div className="-translate-y-1/2 absolute h-[4px] left-[201px] top-1/2 w-[14px]" data-name="Dots Container">
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 4">
                                          <g id="Dots Container">
                                            <circle cx="12" cy="2" fill="var(--fill-0, white)" fillOpacity="0.8" id="Ellipse 1269" r="2" />
                                            <circle cx="6" cy="2" fill="var(--fill-0, white)" fillOpacity="0.6" id="Ellipse 1270" r="1" />
                                            <circle cx="1" cy="2" fill="var(--fill-0, white)" fillOpacity="0.4" id="Ellipse 1271" r="1" />
                                          </g>
                                        </svg>
                                      </div>
                                      <div className="absolute flex h-[6px] items-center justify-center left-0 top-0 w-[216px]">
                                        <div className="flex-none rotate-180">
                                          <div className="bg-[#48669c] h-[6px] relative rounded-[11px] w-[216px]" data-name="Progress Bar">
                                            <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[12px]" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents left-[8.25px] top-[-5.7px]" data-name="Image Container">
                      <div className="absolute left-[12.11px] size-[40.168px] top-[-0.29px]" data-name="动效4">
                        <div className="absolute h-[6.608px] left-[5.41px] top-[32.82px] w-[30.231px]">
                          <div className="absolute inset-[-122.61%_-26.8%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.4346 22.8108">
                              <g filter="url(#filter0_f_1_20074)" id="Ellipse 1208">
                                <ellipse cx="23.2173" cy="11.4054" fill="var(--fill-0, #48669C)" fillOpacity="0.3" rx="15.1157" ry="3.30377" />
                              </g>
                              <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22.8108" id="filter0_f_1_20074" width="46.4346" x="0" y="0">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                  <feGaussianBlur result="effect1_foregroundBlur_1_20074" stdDeviation="4.05081" />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute h-[2.607px] left-[13.01px] top-[34.41px] w-[15.026px]">
                          <div className="absolute inset-[-97.12%_-16.85%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0893 7.67043">
                              <g filter="url(#filter0_f_1_20218)" id="Ellipse 1209">
                                <ellipse cx="10.0446" cy="3.83521" fill="var(--fill-0, #48669C)" fillOpacity="0.3" rx="7.51287" ry="1.30346" />
                              </g>
                              <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.67043" id="filter0_f_1_20218" width="20.0893" x="0" y="0">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                  <feGaussianBlur result="effect1_foregroundBlur_1_20218" stdDeviation="1.26588" />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="absolute h-[51.755px] left-[8.25px] top-[-5.7px] w-[56px]" data-name="Flow 1@512p-25fps 2">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlow1512P25Fps2} />
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center pl-[8px] relative size-full">
                        <div className="bg-white h-full relative shrink-0 w-[532px]">
                          <div className="overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative size-full">
                              <div className="content-stretch flex h-[32px] items-center overflow-clip relative rounded-[4px] shrink-0 w-[491px]" data-name="Horizontal container">
                                <div className="content-stretch flex items-center relative shrink-0">
                                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                                    <p className="font-['LiciumFont_2022:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap">任务列表</p>
                                  </div>
                                </div>
                              </div>
                              <div className="relative shrink-0 w-full">
                                <div className="content-stretch flex gap-[10px] items-start pl-[8px] relative w-full">
                                  <div className="h-[704px] relative shrink-0 w-[8.039px]">
                                    <div className="absolute inset-[0_0_-0.11%_-7.58%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.64796 704.75">
                                        <g id="Group 1321319985">
                                          <path d={svgPaths.p32d8c00} id="Vector 4720" stroke="var(--stroke-0, #48669C)" strokeOpacity="0.3" strokeWidth="1.5" />
                                          <path d="M0.609405 101.684H7.62894" id="Vector 4723" stroke="var(--stroke-0, #48669C)" strokeOpacity="0.3" strokeWidth="1.5" />
                                          <path d="M0.609405 32.3603H7.62894" id="Vector 4724" stroke="var(--stroke-0, #48669C)" strokeOpacity="0.3" strokeWidth="1.5" />
                                          <path d="M0.609405 172.203H7.62894" id="Vector 4722" stroke="var(--stroke-0, #48669C)" strokeOpacity="0.3" strokeWidth="1.5" />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                                    <div className="content-stretch flex items-center overflow-clip relative rounded-[4px] shrink-0 w-full">
                                      <BackgroundImage9 additionalClassNames="bg-[#fbfbfb]">
                                        <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px opacity-30 relative" data-name="content">
                                          <CheckboxBackgroundImage>
                                            <div className="shrink-0 size-[12px]" data-name="empty" />
                                          </CheckboxBackgroundImage>
                                          <p className="font-['LiciumFont_2022:Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.3)] text-center tracking-[0.3px] w-[16px]">1.</p>
                                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                                            <TitleBackgroundImage text="索赔详情分析" text1="等待中..." additionalClassNames="gap-[11.91px]" />
                                            <BackgroundImageAndText2 text="负责人:" />
                                          </div>
                                        </div>
                                      </BackgroundImage9>
                                    </div>
                                    <div className="content-stretch flex items-center overflow-clip relative rounded-[4px] shrink-0 w-full">
                                      <BackgroundImage9 additionalClassNames="bg-[#e7f0ff]">
                                        <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="content">
                                          <div className="bg-[#48669c] max-h-[16px] max-w-[16px] relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
                                            <BackgroundImage11>
                                              <div className="relative shrink-0 size-[12px]" data-name="icon/line/check">
                                                <div className="absolute inset-[19.02%_11.7%_19.02%_11.71%]" data-name="Union">
                                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.19087 7.43534">
                                                    <path d={svgPaths.p32217500} fill="var(--fill-0, white)" id="Union" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </BackgroundImage11>
                                          </div>
                                          <p className="font-['LiciumFont_2022:Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.3)] text-center tracking-[0.3px] w-[16px]">2.</p>
                                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                                            <div className="content-stretch flex gap-[5.914px] items-center relative shrink-0 w-full" data-name="title">
                                              <p className="flex-[1_0_0] font-['LiciumFont_2022:Regular',sans-serif] leading-[1.15] min-h-px min-w-px not-italic relative text-[#171717] text-[13px] tracking-[0.065px]">[A2A]将分析结论发送给博世Agent</p>
                                              <div className="h-[8px] relative shrink-0 w-0">
                                                <div className="absolute inset-[0_-0.5px]">
                                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 8">
                                                    <path d="M0.5 0V8" id="Vector 4714" stroke="var(--stroke-0, #E2E2E2)" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <p className="font-['LiciumFont_2022:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#48669c] text-[11px] whitespace-nowrap">运行中...</p>
                                            </div>
                                            <BackgroundImageAndText3 text="负责人:" />
                                          </div>
                                        </div>
                                        <div className="absolute bg-[#48669c] h-[54px] left-0 rounded-bl-[10px] rounded-tl-[10px] top-0 w-[4px]" />
                                      </BackgroundImage9>
                                    </div>
                                    <div className="content-stretch flex items-center overflow-clip relative rounded-[4px] shrink-0 w-full">
                                      <BackgroundImage9 additionalClassNames="bg-[#fbfbfb]">
                                        <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px opacity-30 relative" data-name="content">
                                          <CheckboxBackgroundImage>
                                            <div className="shrink-0 size-[12px]" data-name="empty" />
                                          </CheckboxBackgroundImage>
                                          <p className="font-['LiciumFont_2022:Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.3)] text-center tracking-[0.3px] w-[16px]">3.</p>
                                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                                            <TitleBackgroundImage text="[A2A]从博世Agent获取分析数据" text1="等待中..." additionalClassNames="gap-[5.914px]" />
                                            <BackgroundImageAndText3 text="负责人:" />
                                          </div>
                                        </div>
                                      </BackgroundImage9>
                                    </div>
                                    <div className="content-stretch flex items-center overflow-clip relative rounded-[4px] shrink-0 w-full">
                                      <BackgroundImage9 additionalClassNames="bg-[#fbfbfb]">
                                        <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px opacity-30 relative" data-name="content">
                                          <CheckboxBackgroundImage>
                                            <div className="shrink-0 size-[12px]" data-name="empty" />
                                          </CheckboxBackgroundImage>
                                          <p className="font-['LiciumFont_2022:Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.3)] text-center tracking-[0.3px] w-[16px]">4.</p>
                                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                                            <TitleBackgroundImage text="生成完整报告" text1="等待中..." additionalClassNames="gap-[5.914px]" />
                                            <BackgroundImageAndText2 text="负责人:" />
                                          </div>
                                        </div>
                                      </BackgroundImage9>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none" />
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px relative">
                          <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none" />
                          <div className="h-full relative shrink-0 w-0">
                            <div className="absolute inset-[0_-0.5px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 801">
                                <path d="M0.5 0V801" id="Vector 4556" stroke="var(--stroke-0, #EDEDED)" />
                              </svg>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px relative">
                            <div className="bg-[#f8f8f8] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="container">
                              <div className="overflow-clip rounded-[inherit] size-full">
                                <div className="content-stretch flex flex-col gap-[12px] items-start pt-[16px] relative size-full">
                                  <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Horizontal container">
                                    <div className="flex flex-row items-center size-full">
                                      <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
                                        <div className="absolute bg-white h-[57.107px] left-0 top-[-14px] w-[384.629px]" />
                                        <div className="content-stretch flex items-center relative shrink-0">
                                          <div className="content-stretch flex items-center justify-center relative shrink-0">
                                            <p className="font-['LiciumFont_2022:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] whitespace-nowrap">连小山在工作</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="h-0 relative shrink-0 w-full">
                                    <div className="absolute inset-[-0.5px_0]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 379 1">
                                        <path d="M0 0.5H379" id="Vector 4719" stroke="var(--stroke-0, #EDEDED)" />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative shrink-0 w-full">
                                    <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
                                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                        <div className="content-stretch flex gap-[8px] items-start pt-[4px] relative shrink-0 w-full" data-name="block">
                                          <div aria-hidden="true" className="absolute border-0 border-[#36b5ac] border-solid inset-0 pointer-events-none" />
                                          <div className="h-[29.574px] overflow-clip relative shrink-0 w-[32px]">
                                            <Flow1512P25FpsBackgroundImage />
                                          </div>
                                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px overflow-clip relative">
                                            <BackgroundImage4 text="连小山" text1="10:28" />
                                            <BackgroundImage15>
                                              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                                                <div className="content-stretch flex items-center relative shrink-0 w-full">
                                                  <BackgroundImageAndText4 text="[A2A]将分析结论发送给博世Agent" />
                                                </div>
                                                <BackgroundImage10>
                                                  <p className="relative shrink-0 text-[#48669c]">@博世Agent</p>
                                                  <p className="relative shrink-0 text-[#cb802b]">已完成任务</p>
                                                </BackgroundImage10>
                                                <BackgroundImageAndText5 text="已将分析数据发送至博世Agent，博世Agent成功接收" />
                                                <BackgroundImageAndText6 text="0.674s" />
                                              </div>
                                              <BackgroundImage6 />
                                              <div className="content-stretch flex gap-[16px] items-center opacity-30 relative shrink-0 w-full">
                                                <BackgroundImage5 />
                                              </div>
                                            </BackgroundImage15>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="content-stretch flex gap-[8px] items-start pt-[4px] relative shrink-0 w-full" data-name="block">
                                        <div aria-hidden="true" className="absolute border-0 border-[#36b5ac] border-solid inset-0 pointer-events-none" />
                                        <div className="relative rounded-[100px] shrink-0" data-name="avatar">
                                          <div className="flex flex-col items-center justify-center size-full">
                                            <div className="content-stretch flex flex-col items-center justify-center relative">
                                              <div className="relative rounded-[100px] shrink-0 size-[32px]" data-name="avatar-image">
                                                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgAvatarImage} />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative">
                                          <div className="content-stretch flex gap-[12px] items-center leading-[1.15] not-italic relative shrink-0 text-[11px] w-full whitespace-nowrap">
                                            <p className="font-['LiciumFont_2022:Bold',sans-serif] relative shrink-0 text-[#525252]">博世Agent</p>
                                            <p className="font-['LiciumFont_2022:Regular',sans-serif] relative shrink-0 text-[#999] tracking-[0.88px] uppercase">10:28</p>
                                          </div>
                                          <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="block">
                                            <div aria-hidden="true" className="absolute border-0 border-[#36b5ac] border-solid inset-0 pointer-events-none" />
                                            <div className="bg-[#e7f0ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
                                              <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[4px]" />
                                              <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
                                                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                                                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                                                    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-center min-h-px min-w-px relative">
                                                      <p className="flex-[1_0_0] font-['LiciumFont_2022:Medium',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] tracking-[-0.07px]">[A2A]将分析结论发送给博世Agent</p>
                                                    </div>
                                                  </div>
                                                  <div className="relative rounded-[4px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%), linear-gradient(90deg, rgb(243, 243, 243) 0%, rgb(243, 243, 243) 100%)" }}>
                                                    <div className="overflow-clip rounded-[inherit] size-full">
                                                      <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
                                                        <p className="font-['LiciumFont_2022:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#7c7c7c] text-[12px] tracking-[-0.06px] w-full">已收到连小山的索赔详情，正在分析索赔原因</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="content-stretch flex gap-[8px] items-start pt-[4px] relative shrink-0 w-full" data-name="block">
                                        <div aria-hidden="true" className="absolute border-0 border-[#36b5ac] border-solid inset-0 pointer-events-none" />
                                        <div className="h-[29.574px] overflow-clip relative shrink-0 w-[32px]">
                                          <Flow1512P25FpsBackgroundImage />
                                        </div>
                                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px overflow-clip relative">
                                          <BackgroundImage4 text="连小山" text1="10:28" />
                                          <BackgroundImage15>
                                            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                                              <div className="content-stretch flex items-center relative shrink-0 w-full">
                                                <BackgroundImageAndText4 text="[A2A]从博世Agent获取分析数据" />
                                              </div>
                                              <BackgroundImage10>
                                                <p className="relative shrink-0 text-[#48669c]">@连小山</p>
                                                <p className="relative shrink-0 text-[#cb802b]">{`请求 `}</p>
                                                <p className="relative shrink-0 text-[#48669c]">@博世Agent</p>
                                                <p className="relative shrink-0 text-[#cb802b]">协助排查</p>
                                              </BackgroundImage10>
                                              <BackgroundImageAndText5 text="连小山正在等待博世Agent分析根因" />
                                              <BackgroundImageAndText6 text="0.674s" />
                                            </div>
                                            <BackgroundImage6 />
                                            <div className="content-stretch flex gap-[16px] items-center opacity-30 relative shrink-0 w-full">
                                              <BackgroundImage5 />
                                            </div>
                                          </BackgroundImage15>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}