import svgPaths from "./svg-cfkvbjjfej";

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start p-[8px] relative size-full">
      <div className="content-stretch flex h-[32px] items-center overflow-clip py-[2px] relative rounded-[8px] shrink-0 w-full" data-name="nav">
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="content">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[8px] py-[4px] relative w-full">
              <div className="relative shrink-0 size-[18px]" data-name="Frame">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <g clipPath="url(#clip0_1_21155)" id="Frame">
                    <g id="Vector" />
                    <path d={svgPaths.p8f73600} fill="var(--fill-0, white)" fillOpacity="0.81" id="Vector_2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_21155">
                      <rect fill="white" height="18" width="18" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}