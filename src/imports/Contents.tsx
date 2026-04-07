import svgPaths from "./svg-n29xlgoolh";

function Frame({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}

function Nav1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[48px]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Content({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[5px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Helper() {
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
                        <g clipPath={isAiAndIsActive1 ? "url(#clip0_1_21394)" : isAiAndIsActive ? "url(#clip0_1_21407)" : isAiAndNotIsActive1 ? "url(#clip0_1_20733)" : isAiAndNotIsActive ? "url(#clip0_1_20435)" : isAndAndIsActive ? "url(#clip0_1_21423)" : isAndAndNotIsActive ? "url(#clip0_1_21411)" : isAndIsActive ? "url(#clip0_1_21419)" : style === "感知计算" && !isActive ? "url(#clip0_1_20439)" : undefined} id="Frame">
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
                            <clipPath id={isAiAndIsActive1 ? "clip0_1_21394" : isAiAndIsActive ? "clip0_1_21407" : isAiAndNotIsActive1 ? "clip0_1_20733" : isAiAndNotIsActive ? "clip0_1_20435" : isAndAndIsActive ? "clip0_1_21423" : isAndAndNotIsActive ? "clip0_1_21411" : isAndIsActive ? "clip0_1_21419" : "clip0_1_20439"}>
                              <rect fill="white" height="18" width="18" />
                            </clipPath>
                          </defs>
                        )}
                      </svg>
                    )}
                    {isAnd && (
                      <div className="absolute inset-[4.58%_4.52%_4.61%_5.48%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isIsActive ? "0 0 16.2 16.346" : "0 0 16.2 16.3461"}>
                          <g id="Group 1321320002">
                            <path d={svgPaths.p2286c740} fill={isIsActive ? "var(--fill-0, #CEA472)" : "var(--fill-0, white)"} fillOpacity={isNotIsActive ? "0.81" : undefined} id="Vector" />
                            <path d={svgPaths.p1b646a00} fill={isIsActive ? "var(--fill-0, #CEA472)" : "var(--fill-0, white)"} fillOpacity={isNotIsActive ? "0.81" : undefined} id="Vector_2" />
                          </g>
                        </svg>
                      </div>
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

export default function Contents() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="contents">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="nav">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative w-full">
          <Helper />
          <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full">
            <Nav1>
              <Content>
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Frame">
                  <div className="absolute inset-[4.58%_4.52%_4.61%_5.48%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2 16.3461">
                      <g id="Group 1321320002">
                        <path d={svgPaths.p2286c740} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector" />
                        <path d={svgPaths.p1b646a00} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector_2" />
                      </g>
                    </svg>
                  </div>
                </div>
              </Content>
            </Nav1>
            <Nav className="relative rounded-[8px] shrink-0 w-[48px]" isActive style="连小山" type="收起" />
            <Nav1>
              <Content>
                <Frame>
                  <g clipPath="url(#clip0_1_20873)" id="Frame">
                    <g id="Vector" />
                    <path d={svgPaths.p87c5000} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector_2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_20873">
                      <rect fill="white" height="18" width="18" />
                    </clipPath>
                  </defs>
                </Frame>
              </Content>
            </Nav1>
          </div>
          <Helper />
          <Nav1>
            <Content>
              <Frame>
                <g id="Frame">
                  <path d={svgPaths.p2b4ab400} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector" />
                  <path d={svgPaths.p15af9670} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector_2" opacity="0.6" />
                </g>
              </Frame>
            </Content>
          </Nav1>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-start justify-end min-h-px min-w-px relative w-[220px]">
            <Nav1>
              <Content>
                <Frame>
                  <g clipPath="url(#clip0_1_20756)" id="Frame">
                    <g id="Vector" />
                    <path d={svgPaths.p10853400} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector_2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_20756">
                      <rect fill="white" height="18" width="18" />
                    </clipPath>
                  </defs>
                </Frame>
              </Content>
            </Nav1>
            <Nav1>
              <Content>
                <Frame>
                  <g clipPath="url(#clip0_1_21148)" id="Frame">
                    <g id="Vector" />
                    <path d={svgPaths.p18f53638} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector_2" />
                    <g id="Vector_3">
                      <path d={svgPaths.p3f5d8740} fill="var(--fill-0, white)" fillOpacity="0.81" />
                      <path d={svgPaths.p2b2bde00} fill="var(--fill-0, white)" fillOpacity="0.81" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_21148">
                      <rect fill="white" height="18" width="18" />
                    </clipPath>
                  </defs>
                </Frame>
              </Content>
            </Nav1>
          </div>
          <Helper />
        </div>
      </div>
    </div>
  );
}