import svgPaths from "./svg-5ugo97wkvp";

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="title">
      <p className="font-['LiciumFont_2022:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] whitespace-nowrap">事件播报</p>
    </div>
  );
}

function Content1() {
  return (
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
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="content">
      <Title1 />
      <Content1 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[24px] h-[32px] items-center relative w-full" data-name="title">
      <Content />
    </div>
  );
}

export default function ComExTitlebar() {
  return (
    <div className="content-stretch flex flex-col items-center relative rounded-[8px] size-full" data-name="com/ex_titlebar">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <Title />
        </div>
      </div>
    </div>
  );
}