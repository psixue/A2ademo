import svgPaths from "./svg-pfwwvbauts";

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['LiciumFont_2022:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#383838] text-[13px] tracking-[0.065px] whitespace-nowrap">场景覆盖率</p>
      <div className="relative shrink-0 size-[16px]" data-name="icon/line/question">
        <div className="absolute inset-[4.69%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5 14.5">
            <path d={svgPaths.p20425300} fill="var(--fill-0, #7C7C7C)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <p className="font-['LiciumFont_2022:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#438356] text-[12px] tracking-[0.06px] whitespace-nowrap">↑33.57%</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-end min-h-px min-w-px pb-[2px] relative">
      <p className="font-['LiciumFont_2022:Medium',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#171717] text-[20px] tracking-[0.1px] whitespace-nowrap">57.3%</p>
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center p-[16px] relative rounded-[4px] size-full" data-name=".card">
      <div aria-hidden="true" className="absolute border border-[#e2e2e2] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Frame />
    </div>
  );
}