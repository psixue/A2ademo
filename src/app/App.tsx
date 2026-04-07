import { useState, useRef, useEffect, useCallback } from 'react';
import { AgentChatPanel } from './components/AgentChatPanel';
import imgVerticalContainer from 'figma:asset/de7ee7382a92333e3e94ab22460b6f8ec5723a84.png';
import imgFlow from 'figma:asset/540a8d44e219ebf1016269b72e2d87d0a1e8d118.png';
import imgWangYi from 'figma:asset/b5c611a6acf5d0300f5ea2cd4d0cc83c09723f19.png';

// ─────────────────────────────────────────────────────────────────────────────
// Static data
// ─────────────────────────────────────────────────────────────────────────────

const TASKS = [
  { id: 1, name: '索赔详情分析', assignees: ['连小山'] },
  { id: 2, name: '将分析结论发送给博世Agent', assignees: ['连小山', '博世Agent'] },
  { id: 3, name: '从博世Agent获取分析数据', assignees: ['连小山', '博世Agent'] },
  { id: 4, name: '生成完整报告', assignees: ['连小山'] },
  { id: 5, name: '闭环验证', assignees: ['王一'] },
];

// 7 presentation steps → which task (0-indexed) is the active one
// step 0: T1 running
// step 1: T2 running (sending phase)
// step 2: T2 done / T3 running
// step 3: T3 running
// step 4: T4 running
// step 5: T4 done / T5 (闭环验证) running
// step 6: T5 done (all complete)
const TASK_ACTIVE_MAP = [0, 1, 2, 2, 3, 4, 5];

const PROGRESS_LABEL_MAP = ['01', '02', '03', '03', '04', '05', '05'];

const WO_TASK_MAP = [
  '索赔详情分析',
  '[A2A]将分析...',
  '[A2A]从博世Agent...',
  '[A2A]从博世Agent...',
  '生成完整报告',
  '闭环验证',
  '闭环验证',
];

const STEP_LABELS = [
  '索赔详情分析',
  '[A2A]发送结论给博世Agent',
  '[A2A]发送结论(博世已响应)',
  '[A2A]获取博世Agent数据',
  '生成完整报告',
  '闭环验证',
  '闭环验证完成',
];

// ────────────────────────────────────────────────────────────────────────────
// Tiny shared components
// ─────────────────────────────────────────────────────────────────────────────

function LxsAvatar({ size = 16 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center overflow-hidden rounded-full shrink-0"
      style={{ width: size, height: size }}
    >
      <img
        alt="连小山"
        src={imgFlow}
        style={{
          width: size * 1.37,
          height: size * 1.27,
          objectFit: 'cover',
          marginLeft: -size * 0.18,
          marginTop: -size * 0.17,
          pointerEvents: 'none',
        }}
      />
    </span>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 10 8" fill="none">
      <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Left dark sidebar
// ─────────────────────────────────────────────────────────────────────────────

function LeftNav() {
  const icons = [
    // dashboard icon
    <svg key="dash" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="6" height="6" rx="1" fill="white" fillOpacity="0.63" />
      <rect x="10" y="2" width="6" height="6" rx="1" fill="white" fillOpacity="0.63" />
      <rect x="2" y="10" width="6" height="6" rx="1" fill="white" fillOpacity="0.63" />
      <rect x="10" y="10" width="6" height="6" rx="1" fill="white" fillOpacity="0.63" />
    </svg>,
    // active: connect-mountain icon (golden)
    <div key="lxs" className="size-[18px] flex items-center justify-center rounded bg-[rgba(206,164,114,0.16)]">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 2L12 11H2L7 2Z" fill="#CEA472" />
        <path d="M7 6L10 11H4L7 6Z" fill="#CEA472" fillOpacity="0.5" />
      </svg>
    </div>,
    // sensing icon
    <svg key="sense" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="3" fill="white" fillOpacity="0.63" />
      <circle cx="9" cy="9" r="6" stroke="white" strokeOpacity="0.63" strokeWidth="1" />
    </svg>,
  ];

  return (
    <aside className="bg-[#22252c] shrink-0 w-[49px] h-full flex flex-col shadow-[0px_0px_1px_0px_rgba(2,24,21,0.16),0px_4px_12px_0px_rgba(2,24,21,0.03)]">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center shrink-0">
        <div className="size-8 rounded-[6px] bg-[#22252c] flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="5" fill="#2d3138" />
            <path d="M14 4L24 22H4L14 4Z" fill="#CEA472" />
            <path d="M14 10L20 22H8L14 10Z" fill="#CEA472" fillOpacity="0.55" />
          </svg>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex flex-col flex-1 min-h-0 overflow-clip w-full">
        <div className="flex flex-col flex-1 min-h-0 gap-3 w-full">

          {/* Helper — top divider */}
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 1">
                <path d="M8 0.5H41" stroke="white" strokeOpacity="0.1" />
              </svg>
            </div>
          </div>

          {/* Group 1: 大盘 · 连小山(active) · 感知计算 */}
          <div className="flex flex-col gap-px shrink-0 w-full">

            {/* 大盘 */}
            <div className="relative rounded-[8px] shrink-0 w-[48px]">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
                  <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[5px] relative size-full">
                        <div className="overflow-clip relative shrink-0 size-[18px]">
                          <div className="absolute inset-[4.58%_4.52%_4.61%_5.48%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2 16.3461">
                              <path d="M16.2 7.66226V7.66217C16.2 3.43051 12.7696 0 8.53784 0V7.66226H16.2Z" fill="white" fillOpacity="0.81" />
                              <path d="M7.66239 8.68384V1.02169C3.43065 1.02169 3.66211e-05 4.4521 3.66211e-05 8.68376V8.68384C3.66211e-05 12.9155 3.43065 16.346 7.66239 16.346C11.8939 16.346 15.3244 12.9155 15.3244 8.68384H7.66239Z" fill="white" fillOpacity="0.81" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 连小山 — ACTIVE */}
            <div className="relative rounded-[8px] shrink-0 w-[48px]">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
                  <div className="flex-[1_0_0] bg-[rgba(206,164,114,0.16)] h-[28px] rounded-[4px] min-h-px min-w-px relative">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[5px] relative size-full">
                        <div className="relative shrink-0 size-[18px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <path d="M9.00293 1.66211C9.75517 1.66218 10.3652 2.27216 10.3652 3.02441C10.3652 3.57581 10.0367 4.04941 9.56543 4.26367V5.22363H13.4961C14.6352 5.22363 15.5586 6.14705 15.5586 7.28613V14.6621C15.5586 15.8012 14.6352 16.7246 13.4961 16.7246H4.37598C3.23689 16.7246 2.31348 15.8012 2.31348 14.6621V7.28613C2.31348 6.14705 3.23689 5.22363 4.37598 5.22363H8.44043V4.26367C7.96907 4.04946 7.64068 3.57589 7.64062 3.02441C7.64062 2.27211 8.25063 1.66211 9.00293 1.66211ZM0.732422 9.1416C1.04308 9.1416 1.29492 9.39344 1.29492 9.7041V13.5254C1.29479 13.8359 1.043 14.0879 0.732422 14.0879C0.421843 14.0879 0.170054 13.8359 0.169922 13.5254V9.7041C0.169922 9.39344 0.421762 9.1416 0.732422 9.1416ZM17.3086 9.1416C17.6193 9.1416 17.8711 9.39344 17.8711 9.7041V13.5254C17.871 13.8359 17.6192 14.0879 17.3086 14.0879C16.998 14.0879 16.7462 13.8359 16.7461 13.5254V9.7041C16.7461 9.39344 16.9979 9.1416 17.3086 9.1416ZM6.40039 9.70605C5.77907 9.70605 5.27539 10.2097 5.27539 10.8311C5.27539 11.4524 5.77907 11.9561 6.40039 11.9561C7.02171 11.9561 7.52539 11.4524 7.52539 10.8311C7.52539 10.2097 7.02171 9.70605 6.40039 9.70605ZM11.6123 9.70605C10.991 9.70605 10.4873 10.2097 10.4873 10.8311C10.4873 11.4524 10.991 11.9561 11.6123 11.9561C12.2336 11.9561 12.7373 11.4524 12.7373 10.8311C12.7373 10.2097 12.2336 9.70605 11.6123 9.70605Z" fill="#CEA472" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 感知计算 */}
            <div className="relative rounded-[8px] shrink-0 w-[48px]">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
                  <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[5px] relative size-full">
                        <div className="relative shrink-0 size-[18px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g clipPath="url(#clip_nav_sense)">
                              <g />
                              <path d="M10.204 2.91026C11.1868 3.4777 11.6212 4.63307 11.3164 5.67703L12.8623 6.12841C13.3703 4.38858 12.6497 2.46278 11.0092 1.51563C9.08358 0.403897 6.62138 1.06365 5.50965 2.98924C4.53578 4.67601 4.92126 6.77458 6.3262 8.01642L4.81079 10.6412H4.80818C3.9188 10.6412 3.1978 11.3622 3.1978 12.2516C3.1978 13.141 3.9188 13.8619 4.80818 13.8619C5.69757 13.8619 6.41856 13.141 6.41856 12.2516C6.41856 12.1232 6.40355 11.9983 6.37516 11.8786C6.30882 11.5989 6.29281 11.2951 6.43656 11.046L8.48573 7.49675L7.78843 7.09416C6.63309 6.42712 6.23723 4.94978 6.90428 3.79443C7.57135 2.63907 9.04864 2.24323 10.204 2.91026ZM11.4361 13.9264C12.1878 14.7123 13.4055 14.9138 14.3883 14.3463C15.5437 13.6793 15.9395 12.202 15.2725 11.0467C14.6055 9.89131 13.1281 9.49548 11.9728 10.1625L11.2755 10.5651L9.22594 7.01515C9.08221 6.76618 8.81103 6.62813 8.53565 6.54571C8.41777 6.51043 8.30215 6.46102 8.19103 6.39684C7.42078 5.95214 7.15687 4.96724 7.60155 4.19701C8.04626 3.42678 9.03117 3.16288 9.80141 3.60757C10.5717 4.05227 10.8355 5.03716 10.3908 5.8074L10.3894 5.80972L11.9052 8.43504C13.6832 7.8392 15.6933 8.55469 16.6672 10.2415C17.7789 12.167 17.1191 14.6293 15.1935 15.741C13.553 16.6882 11.525 16.3493 10.2723 15.0394L11.4361 13.9264ZM2.39261 12.2518C2.39261 11.117 3.17599 10.1631 4.2325 9.90508L3.8505 8.34067C2.08974 8.77056 0.782227 10.3575 0.782227 12.2518C0.782227 14.4753 2.58471 16.2778 4.80818 16.2778C6.75591 16.2778 8.38057 14.8946 8.75362 13.057H11.7846L11.786 13.0595C12.2307 13.8297 13.2156 14.0936 13.9858 13.6489C14.7561 13.2042 15.0199 12.2194 14.5752 11.4491C14.1305 10.6789 13.1457 10.4149 12.3754 10.8596C12.2642 10.9238 12.1637 10.9993 12.0742 11.0836C11.8652 11.2809 11.6101 11.4466 11.3227 11.4466H7.22375V12.2518C7.22375 13.5859 6.14227 14.6674 4.80818 14.6674C3.4741 14.6674 2.39261 13.5859 2.39261 12.2518Z" fill="white" fillOpacity="0.81" />
                            </g>
                            <defs>
                              <clipPath id="clip_nav_sense"><rect fill="white" height="18" width="18" /></clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Helper — middle divider */}
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 1">
                <path d="M8 0.5H41" stroke="white" strokeOpacity="0.1" />
              </svg>
            </div>
          </div>

          {/* 数据科学项目 */}
          <div className="relative rounded-[8px] shrink-0 w-[48px]">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
                <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[5px] relative size-full">
                      <div className="relative shrink-0 size-[18px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <path d="M8.05213 9.26028L1.88829 6.32901C1.67898 6.24759 1.49916 6.10485 1.37236 5.91949C1.24557 5.73413 1.17773 5.51479 1.17773 5.29021C1.17773 5.06563 1.24557 4.84629 1.37236 4.66093C1.49916 4.47557 1.67898 4.33283 1.88829 4.25142L8.05311 1.31916C8.34725 1.18258 8.66766 1.11182 8.99197 1.11182C9.31627 1.11182 9.63668 1.18258 9.93082 1.31916L16.0927 4.24945C16.3023 4.33069 16.4825 4.47342 16.6095 4.65889C16.7365 4.84437 16.8045 5.06393 16.8045 5.28873C16.8045 5.51354 16.7365 5.7331 16.6095 5.91858C16.4825 6.10405 16.3023 6.24678 16.0927 6.32802L9.93082 9.26028C9.33511 9.53598 8.64783 9.53598 8.05311 9.26028H8.05213Z" fill="white" fillOpacity="0.81" />
                          <path d="M8.99705 13.1815C8.54903 13.1815 8.10693 13.0781 7.70421 12.8802L1.65853 9.87701C1.55019 9.83497 1.45181 9.7708 1.36966 9.68861C1.28752 9.60641 1.22341 9.50798 1.18143 9.39962C1.13946 9.29126 1.12054 9.17533 1.12588 9.05924C1.13123 8.94316 1.16071 8.82946 1.21247 8.72541C1.26422 8.62136 1.33709 8.52924 1.42644 8.45493C1.51579 8.38063 1.61965 8.32577 1.73139 8.29386C1.84314 8.26194 1.9603 8.25368 2.07542 8.26959C2.19054 8.2855 2.30107 8.32524 2.39996 8.38627L8.43974 11.3894C8.79224 11.5607 9.20284 11.5607 9.55435 11.3894L15.6 8.38627C15.6989 8.32524 15.8095 8.2855 15.9246 8.26959C16.0397 8.25368 16.1569 8.26194 16.2686 8.29386C16.3803 8.32577 16.4842 8.38063 16.5736 8.45493C16.6629 8.52924 16.7358 8.62136 16.7875 8.72541C16.8393 8.82946 16.8688 8.94316 16.8741 9.05924C16.8795 9.17533 16.8605 9.29126 16.8186 9.39962C16.7766 9.50798 16.7125 9.60641 16.6303 9.68861C16.5482 9.7708 16.4498 9.83497 16.3415 9.87701L10.2899 12.8802C9.88785 13.0787 9.44543 13.1818 8.99705 13.1815ZM8.99705 16.7143C8.54866 16.7147 8.10624 16.6116 7.70421 16.413L1.65853 13.4099C1.55019 13.3679 1.45181 13.3037 1.36966 13.2215C1.28752 13.1393 1.22341 13.0409 1.18143 12.9325C1.13946 12.8241 1.12054 12.7082 1.12588 12.5921C1.13123 12.476 1.16071 12.3623 1.21247 12.2583C1.26422 12.1542 1.33709 12.0621 1.42644 11.9878C1.51579 11.9135 1.61965 11.8587 1.73139 11.8267C1.84314 11.7948 1.9603 11.7866 2.07542 11.8025C2.19054 11.8184 2.30107 11.8581 2.39996 11.9192L8.43974 14.9223C8.79126 15.0966 9.20284 15.0966 9.55435 14.9223L15.6 11.9192C15.6989 11.8581 15.8095 11.8184 15.9246 11.8025C16.0397 11.7866 16.1569 11.7948 16.2686 11.8267C16.3803 11.8587 16.4842 11.9135 16.5736 11.9878C16.6629 12.0621 16.7358 12.1542 16.7875 12.2583C16.8393 12.3623 16.8688 12.476 16.8741 12.5921C16.8795 12.7082 16.8605 12.8241 16.8186 12.9325C16.7766 13.0409 16.7125 13.1393 16.6303 13.2215C16.5482 13.3037 16.4498 13.3679 16.3415 13.4099L10.2899 16.413C9.88785 16.6116 9.44543 16.7147 8.99705 16.7143Z" fill="white" fillOpacity="0.81" opacity="0.6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom group: AI教练 + AI市场 — pushed to end */}
          <div className="flex flex-col gap-px flex-[1_0_0] justify-end min-h-px min-w-px w-full">

            {/* AI教练 */}
            <div className="relative rounded-[8px] shrink-0 w-[48px]">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
                  <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[5px] relative size-full">
                        <div className="relative shrink-0 size-[18px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g clipPath="url(#clip_nav_coach)">
                              <g />
                              <path d="M15.278 6.19732L15.1014 6.60229C14.9723 6.89877 14.5622 6.89877 14.433 6.60229L14.2565 6.19732C13.9419 5.47522 13.3751 4.90031 12.668 4.58578L12.1241 4.34391C11.8301 4.21312 11.8301 3.7852 12.1241 3.65442L12.6375 3.42605C13.3629 3.10344 13.9398 2.50725 14.249 1.76063L14.4302 1.32299C14.5566 1.01799 14.9778 1.01799 15.1041 1.32299L15.2854 1.76063C15.5947 2.50725 16.1715 3.10344 16.8969 3.42605L17.4103 3.65442C17.7044 3.7852 17.7044 4.21312 17.4103 4.34391L16.8665 4.58578C16.1593 4.90031 15.5926 5.47522 15.278 6.19732ZM16.199 14.6965V8.00892C15.7512 8.16721 15.2693 8.25333 14.7672 8.25333C13.9848 8.25333 13.2513 8.04414 12.6195 7.67867V12.5488H11.1877V7.53742H12.392C11.2346 6.76788 10.4718 5.45196 10.4718 3.95788C10.4718 3.45583 10.5579 2.9739 10.7162 2.52606H2.59677C2.20139 2.52606 1.88086 2.84658 1.88086 3.24197V14.6965C1.88086 15.0919 2.20139 15.4124 2.59677 15.4124H15.4831C15.8785 15.4124 16.199 15.0919 16.199 14.6965ZM5.4604 9.68515H6.89222V12.5488H5.4604V9.68515ZM8.32404 5.38969H9.75586V12.5488H8.32404V5.38969Z" fill="white" fillOpacity="0.81" />
                            </g>
                            <defs>
                              <clipPath id="clip_nav_coach"><rect fill="white" height="18" width="18" /></clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI市场 */}
            <div className="relative rounded-[8px] shrink-0 w-[48px]">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
                  <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[5px] relative size-full">
                        <div className="relative shrink-0 size-[18px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g clipPath="url(#clip_nav_market)">
                              <g />
                              <path d="M1.87207 5.25147C1.87207 7.11543 3.38311 8.62647 5.24707 8.62647C7.11103 8.62647 8.62207 7.11543 8.62207 5.25147C8.62207 3.38751 7.11103 1.87647 5.24707 1.87647C3.38311 1.87647 1.87207 3.38751 1.87207 5.25147ZM13.141 8.36772L13.349 7.89042C13.7198 7.03945 14.3878 6.36191 15.2212 5.99125L15.8621 5.7062C16.2087 5.55207 16.2087 5.04777 15.8621 4.89363L15.2571 4.62451C14.4022 4.24431 13.7222 3.5417 13.3578 2.66181L13.1442 2.14605C12.9952 1.7866 12.4988 1.7866 12.3499 2.14605L12.1363 2.66181C11.7718 3.5417 11.092 4.24431 10.2371 4.62451L9.63202 4.89363C9.28545 5.04777 9.28545 5.55207 9.63202 5.7062L10.2729 5.99125C11.1064 6.36191 11.7742 7.03945 12.1451 7.89042L12.3532 8.36772C12.5054 8.71714 12.9887 8.71714 13.141 8.36772Z" fill="white" fillOpacity="0.81" />
                              <g>
                                <path d="M2.25 10.5015C2.25 10.0872 2.58579 9.75146 3 9.75146H7.5C7.91423 9.75146 8.25 10.0872 8.25 10.5015V15.0015C8.25 15.4157 7.91423 15.7515 7.5 15.7515H3C2.58579 15.7515 2.25 15.4157 2.25 15.0015V10.5015Z" fill="white" fillOpacity="0.81" />
                                <path d="M9.75 10.5015C9.75 10.0872 10.0858 9.75146 10.5 9.75146H15C15.4142 9.75146 15.75 10.0872 15.75 10.5015V15.0015C15.75 15.4157 15.4142 15.7515 15 15.7515H10.5C10.0858 15.7515 9.75 15.4157 9.75 15.0015V10.5015Z" fill="white" fillOpacity="0.81" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_nav_market"><rect fill="white" height="18" width="18" /></clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Helper — bottom divider */}
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 1">
                <path d="M8 0.5H41" stroke="white" strokeOpacity="0.1" />
              </svg>
            </div>
          </div>

        </div>
      </nav>

      {/* Bottom icon */}
      <div className="p-2 pb-3">
        <div className="flex items-center justify-center size-8 rounded-[4px] mx-auto">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="6" r="3" fill="white" fillOpacity="0.63" />
            <path d="M3 15c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" strokeOpacity="0.63" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </aside>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 连小山OKR section
// ─────────────────────────────────────────────────────────────────────────────

function InfoIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0">
      <path
        d="M7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0ZM7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1ZM7.5 10.5C7.91421 10.5 8.25 10.8358 8.25 11.25C8.25 11.6642 7.91421 12 7.5 12C7.08579 12 6.75 11.6642 6.75 11.25C6.75 10.8358 7.08579 10.5 7.5 10.5ZM7.5 3C8.88071 3 10 4.11929 10 5.5C10 6.44703 9.47336 7.27054 8.69922 7.69434C8.49113 7.80825 8.30571 7.94649 8.17773 8.0957C8.05199 8.24236 8.00006 8.37601 8 8.5V9.09961C8 9.37575 7.77614 9.59961 7.5 9.59961C7.25849 9.59961 7.05651 9.42886 7.00977 9.20117L7 9.09961V8.5C7.00006 8.07186 7.18545 7.71552 7.41797 7.44434C7.64827 7.17578 7.94258 6.9686 8.21875 6.81738C8.6853 6.56198 9 6.06715 9 5.5C9 4.67157 8.32843 4 7.5 4C6.67157 4 6 4.67157 6 5.5C6 5.77614 5.77614 6 5.5 6C5.22386 6 5 5.77614 5 5.5C5 4.11929 6.11929 3 7.5 3Z"
        fill="#141515"
        fillOpacity="0.56"
      />
    </svg>
  );
}

interface OKRMetric {
  label: string;
  value: string;
  sub?: string;
  target?: string;
}

function OKRCard({ label, value, sub, target }: OKRMetric) {
  return (
    <div className="bg-white flex-1 min-w-0 relative rounded-[4px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="flex flex-col gap-4 items-start px-4 py-[14px] w-full">
        {/* label row */}
        <div className="flex gap-[2px] items-center w-full">
          <span className="text-[#171717] text-[14px] leading-[1.15] tracking-[0.07px] whitespace-nowrap" style={{ fontWeight: 500 }}>
            {label}
          </span>
          <InfoIcon />
        </div>
        {/* value + sub */}
        <div className="flex flex-col gap-2 items-start w-full">
          <span className="text-[#0f0f0f] text-[20px] leading-[1.15] tracking-[0.1px] whitespace-nowrap" style={{ fontWeight: 500 }}>
            {value}
          </span>
          {(sub || target) && (
            <div className="flex gap-8 items-start w-full">
              {sub && (
                <span className="text-[11px] text-[rgba(20,21,21,0.56)] leading-[1.15] whitespace-nowrap py-[2px]">
                  {sub}
                </span>
              )}
              {target && (
                <div className="flex gap-1 items-center py-[2px]">
                  <span className="text-[11px] text-[rgba(20,21,21,0.56)] leading-[1.15] whitespace-nowrap">目标：</span>
                  <span className="text-[#0f0f0f] text-[11px] tracking-[0.88px] uppercase leading-[1.15] whitespace-nowrap">
                    {target}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function OKRSection() {
  const metrics: OKRMetric[] = [
    { label: '累计解决问题数', value: '123件' },
    { label: '覆盖率', value: '96.3%', sub: '35/100', target: '95.0%' },
    { label: '准确率', value: '96.3%', sub: '35/100', target: '95.0%' },
    { label: '平均处理时间', value: '0.99天', sub: '3/100', target: '1' },
  ];

  return (
    <div className="shrink-0 bg-[#f8f8f8] border-b border-[#ededed] px-3 pt-3 pb-3 flex flex-col gap-2">
      {/* Title row */}
      <div className="flex items-center justify-between">
        <span className="text-[#0f0f0f] text-[16px] leading-[1.15] tracking-[0.08px]" style={{ fontWeight: 500 }}>
          连小山OKR
        </span>
        <span className="text-[11px] text-[rgba(20,21,21,0.56)] leading-[1.15]">
          统计范围：2023-01-20-2025-01-31
        </span>
      </div>
      {/* Cards row */}
      <div className="flex gap-2">
        {metrics.map((m) => (
          <OKRCard key={m.label} {...m} />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Header bar
// ─────────────────────────────────────────────────────────────────────────────

function HeaderBar() {
  return (
    <header className="shrink-0 h-[48px] flex items-center px-5 gap-5 border-b border-[#ededed] bg-white">
      {/* breadcrumb */}
      <div className="flex-1 flex items-center gap-1">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 12V6l6-4 6 4v6a1 1 0 01-1 1H3a1 1 0 01-1-1z" stroke="#525252" strokeWidth="1.2" />
        </svg>
        <span className="text-[#525252] text-[14px] tracking-[0.07px]" style={{ fontWeight: 500 }}>
          理想汽车 / 连小山
        </span>
      </div>

      {/* right: question + user */}
      <div className="flex items-center gap-4">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="#525252" strokeWidth="1.2" />
          <path d="M6 6.5C6 5.4 6.9 4.5 8 4.5s2 .9 2 2c0 1.1-1 1.5-1.5 2V10" stroke="#525252" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="8" cy="12" r="0.7" fill="#525252" />
        </svg>
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-full overflow-hidden shrink-0">
            <img alt="苏玥" src={imgVerticalContainer} className="size-full object-cover" />
          </div>
          <span className="text-[#171717] text-[13px] tracking-[0.065px]">苏玥</span>
        </div>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Left agent sidebar
// ─────────────────────────────────────────────────────────────────────────────

function AgentSidebar() {
  const agents = ['售后索赔专家', '质量预警专家', '过程分析专家', '参数推荐专家'];
  return (
    <div className="shrink-0 w-[172px] h-full border-r border-[#ededed] px-2 py-4 overflow-y-auto">
      {agents.map((a, i) => (
        <div key={a}>
          <div
            className={`flex items-center gap-4 px-2 py-[6px] rounded-lg ${i === 0 ? 'bg-[#f3f3f3]' : ''}`}
          >
            <span className="flex-1 text-[14px] text-[#0f0f0f] leading-[20px] truncate">
              {a}
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: 'rotate(90deg)', opacity: 0.5 }}>
              <path d="M6 4l4 4-4 4" stroke="#141515" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {i === 0 && (
            <div className="ml-2 pl-4 py-[3px]">
              <div className="bg-[#e2e2e2] rounded px-2 py-1">
                <span className="text-[13px] text-[#383838]" style={{ fontWeight: 500 }}>• 代号001</span>
                <p className="text-[11px] text-[#999] tracking-[0.88px] uppercase mt-0.5">@售后数据科学项目</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Work-order list panel (left column inside work area)
// ─────────────────────────────────────────────────────────────────────────────

type WOStatus = '进行中' | '待运行' | '已完成';
const STATUS_STYLE: Record<WOStatus, { bg: string; text: string; border: string }> = {
  '进行中': { bg: '#e6f4ff', text: '#007be0', border: 'transparent' },
  '待运行': { bg: '#fff7d3', text: '#db7706', border: 'transparent' },
  '已完成': { bg: '#f2fdf4', text: '#16794c', border: 'transparent' },
};

function WOCard({
  id, desc, reason, vin, date, status, currentTask, active,
}: {
  id: string; desc: string; reason: string; vin: string; date: string;
  status: WOStatus; currentTask: string; active?: boolean;
}) {
  const s = STATUS_STYLE[status];
  return (
    <div
      className={`relative rounded p-3 flex flex-col gap-2 ${active ? 'bg-[#e7f0ff]' : 'bg-[#fbfbfb]'}`}
    >
      {active && (
        <div className="absolute left-0 top-0 h-full w-1 rounded-l bg-[#48669c]" />
      )}
      <div className="flex items-center gap-2">
        <span className="flex-1 text-[13px] text-[#171717]" style={{ fontWeight: 700 }}>{id}</span>
        <span
          className="rounded-full px-[6px] py-px text-[12px] leading-[1.15]"
          style={{ background: s.bg, color: s.text }}
        >
          {status}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[11px] text-[#383838]">失效现象：{desc}</p>
        <p className="text-[11px] text-[#383838]">失效车辆：{vin}</p>
        <div className="flex text-[11px] text-[#383838]">
          <span className="flex-1">失效原因：{reason}</span>
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1 text-[11px]">
          <span className="text-[#383838]">当前任务：</span>
          <span className="text-[#48669c] truncate">{currentTask}</span>
          <span className="ml-auto text-[#383838] shrink-0">负责人:</span>
          <LxsAvatar size={14} />
          <span className="text-[#7c7c7c]">连小山</span>
        </div>
      </div>
    </div>
  );
}

function WOListPanel({ step }: { step: number }) {
  const taskName = WO_TASK_MAP[step];
  const [collapsed, setCollapsed] = useState(false);

  // ── 25 条模拟数据 ──
  const ALL_WO_DATA = [
    { id: 'WO-2026-001', desc: '电驱绝缘异常',  vin: 'LSJA24U39EA00101',  reason: '绝缘异常',  date: '2026-01-07', status: '进行中', currentTask: taskName,        active: true  },

  ];

  const PAGE_SIZE = 20;
  const [page, setPage] = useState(1);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const visibleData = ALL_WO_DATA.slice(0, page * PAGE_SIZE);
  const hasMore = visibleData.length < ALL_WO_DATA.length;

  const loadMore = useCallback(() => {
    if (hasMore) setPage(p => p + 1);
  }, [hasMore]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) loadMore(); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore]);

  /* ── Collapsed state: narrow vertical strip ── */
  if (collapsed) {
    return (
      <div
        className="shrink-0 w-[32px] h-full bg-white border-r border-[#ededed] flex flex-col items-center overflow-hidden cursor-pointer select-none"
        onClick={() => setCollapsed(false)}
      >
        <div className="flex items-center justify-center w-full h-[32px] shrink-0 mt-2">
          <svg width="11" height="10" viewBox="0 0 10.9043 10" fill="none" style={{ transform: 'scaleX(-1)' }}>
            <path d="M10.4043 0C10.6804 1.01236e-08 10.9043 0.223858 10.9043 0.5V9.5C10.9043 9.77614 10.6804 10 10.4043 10C10.1282 9.9999 9.9043 9.77608 9.9043 9.5V0.5C9.9043 0.22392 10.1282 0.000101507 10.4043 0ZM3.47559 1.31738C3.67083 1.12214 3.98735 1.12218 4.18262 1.31738C4.37785 1.51265 4.37787 1.82916 4.18262 2.02441L1.70703 4.5H7.5C7.77614 4.5 8 4.72386 8 5C7.99986 5.27603 7.77606 5.5 7.5 5.5H1.70703L4.18262 7.97559C4.37783 8.17083 4.37781 8.48736 4.18262 8.68262C3.98735 8.87765 3.67078 8.87778 3.47559 8.68262L0.146484 5.35352C0.056046 5.26307 3.69283e-05 5.138 0 5C1.18759e-06 4.91139 0.0249994 4.82901 0.0654297 4.75684C0.0873495 4.71765 0.113192 4.67982 0.146484 4.64648L3.47559 1.31738Z" fill="#525252" />
          </svg>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <span
            className="text-[#0f0f0f] text-[13px] whitespace-nowrap"
            style={{ fontWeight: 500, writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.08em' }}
          >
            事件播报
          </span>
        </div>
      </div>
    );
  }

  /* ── Expanded state ── */
  return (
    <div className="shrink-0 w-[300px] h-full bg-white border-r border-[#ededed] flex flex-col overflow-hidden">
      {/* filter row */}
      <div className="px-3 pt-3 pb-2 shrink-0 flex flex-col gap-2">
        {/* 事件播报 titlebar */}
        <div className="flex items-center h-[32px] w-full">
          <span className="flex-1 text-[#0f0f0f] text-[14px] leading-[20px] whitespace-nowrap" style={{ fontWeight: 500 }}>
            事件播报
          </span>
          <div
            className="flex items-center justify-center px-2 py-1 shrink-0 cursor-pointer hover:opacity-60"
            onClick={() => setCollapsed(true)}
          >
            <svg width="11" height="10" viewBox="0 0 10.9043 10" fill="none">
              <path d="M10.4043 0C10.6804 1.01236e-08 10.9043 0.223858 10.9043 0.5V9.5C10.9043 9.77614 10.6804 10 10.4043 10C10.1282 9.9999 9.9043 9.77608 9.9043 9.5V0.5C9.9043 0.22392 10.1282 0.000101507 10.4043 0ZM3.47559 1.31738C3.67083 1.12214 3.98735 1.12218 4.18262 1.31738C4.37785 1.51265 4.37787 1.82916 4.18262 2.02441L1.70703 4.5H7.5C7.77614 4.5 8 4.72386 8 5C7.99986 5.27603 7.77606 5.5 7.5 5.5H1.70703L4.18262 7.97559C4.37783 8.17083 4.37781 8.48736 4.18262 8.68262C3.98735 8.87765 3.67078 8.87778 3.47559 8.68262L0.146484 5.35352C0.056046 5.26307 3.69283e-05 5.138 0 5C1.18759e-06 4.91139 0.0249994 4.82901 0.0654297 4.75684C0.0873495 4.71765 0.113192 4.67982 0.146484 4.64648L3.47559 1.31738Z" fill="#525252" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-[6px]">
          {['全部', '进行中 (1)', '@我的(1)', '已完成 (1)'].map((t, i) => (
            <span
              key={t}
              className={`rounded-[5px] px-[6px] py-[3px] text-[12px] leading-[1.15] ${i === 0 ? 'bg-[#e2e2e2] text-[#383838]' : 'bg-[#f8f8f8] text-[#525252]'}`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="border border-[#ededed] rounded-lg flex items-center gap-2 px-2 py-[6px]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="6" cy="6" r="4" stroke="#999" strokeWidth="1.2" />
            <path d="M9.5 9.5l2 2" stroke="#999" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span className="text-[#999] text-[14px] tracking-[0.07px]">搜索</span>
        </div>
      </div>

      {/* WO cards */}
      <div className="flex-1 overflow-y-auto px-3 pb-3 flex flex-col gap-2">
        {visibleData.map((wo) => (
          <WOCard
            key={wo.id}
            id={wo.id}
            desc={wo.desc}
            count={wo.count}
            date={wo.date}
            status={wo.status}
            currentTask={wo.currentTask}
            active={wo.active}
          />
        ))}
        {/* 懒加载骨架屏 */}
        {hasMore && (
          <>
            {[0, 1, 2].map((i) => (
              <div key={`skeleton-${i}`} className="rounded p-3 flex flex-col gap-2 bg-[#fbfbfb] overflow-hidden">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-[13px] rounded bg-[#ebebeb] animate-pulse" style={{ animationDelay: `${i * 80}ms` }} />
                  <div className="h-[18px] w-[44px] rounded-full bg-[#ebebeb] animate-pulse" style={{ animationDelay: `${i * 80 + 40}ms` }} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="h-[11px] w-[80%] rounded bg-[#ebebeb] animate-pulse" style={{ animationDelay: `${i * 80 + 60}ms` }} />
                  <div className="flex gap-2">
                    <div className="h-[11px] flex-1 rounded bg-[#ebebeb] animate-pulse" style={{ animationDelay: `${i * 80 + 80}ms` }} />
                    <div className="h-[11px] w-[70px] rounded bg-[#ebebeb] animate-pulse" style={{ animationDelay: `${i * 80 + 80}ms` }} />
                  </div>
                  <div className="h-[11px] w-[60%] rounded bg-[#ebebeb] animate-pulse" style={{ animationDelay: `${i * 80 + 100}ms` }} />
                </div>
              </div>
            ))}
          </>
        )}
        {/* 哨兵节点：滚动到此触发加载 */}
        <div ref={sentinelRef} className="shrink-0 h-1" />
      </div>

      {/* bottom ghost row */}
      <div className="border-t border-[#ededed] px-4 py-2 shrink-0 flex items-center gap-2">
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
          <path d="M1 2h12M1 6h8M1 10h10" stroke="#48669C" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        <span className="text-[#48669c] text-[12px] leading-[1.15]">历史工单分析</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Progress header
// ─────────────────────────────────────────────────────────────────────────────

function ProgressHeader({ step }: { step: number }) {
  const taskStep = TASK_ACTIVE_MAP[step];
  const progressLabel = PROGRESS_LABEL_MAP[step];
  const barMax = 248;
  const barFill = Math.round(barMax * (taskStep + 1) / 5);

  return (
    <div className="shrink-0 h-[104px] border-b border-[#ededed] bg-white flex items-center gap-4 px-6">
      {/* avatar */}
      <div className="relative shrink-0 w-[56px] h-[52px]">
        <img
          alt="连小山"
          src={imgFlow}
          className="absolute object-cover pointer-events-none"
          style={{ width: 56, height: 56, left: -5.88, top: -5.43, maxWidth: 'none' }}
        />
      </div>
      {/* text */}
      <div className="flex flex-col gap-[6px] flex-1 min-w-0">
        <p className="text-[#0f0f0f] text-[16px] leading-[1.5] tracking-[-0.08px]" style={{ fontWeight: 500 }}>
          WO-2026-001
        </p>
        <p className="text-[#383838] text-[12px] leading-[1.6] tracking-[-0.06px]">
          连小山正在实时跟进，当前已规划{' '}
          <span className="text-[#48669c]" style={{ fontWeight: 500 }}>5</span>
          {' '}个任务
        </p>
        <div className="flex items-center gap-[10px]">
          <span className="text-[#48669c] text-[11px]">
            当前进度 {progressLabel}/05
          </span>
          {/* progress bar */}
          <div className="relative h-[6px] rounded-full overflow-hidden" style={{ width: barMax }}>
            <div className="absolute inset-0 bg-[rgba(72,102,156,0.1)] rounded-full" />
            <div
              className="absolute left-0 top-0 h-full bg-[#48669c] rounded-full transition-all duration-500"
              style={{ width: barFill }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Task list panel
// ─────────────────────────────────────────────────────────────────────────────

function TaskList({ step }: { step: number }) {
  const taskActiveIndex = TASK_ACTIVE_MAP[step];
  return (
    <div className="shrink-0 w-[532px] h-full bg-white border-r border-[#ededed] overflow-y-auto">
      <div className="px-4 py-3">
        <p className="text-[#171717] text-[14px] leading-[20px]" style={{ fontWeight: 500 }}>任务列表</p>
      </div>
      <div className="px-4 pb-4 flex flex-col gap-2 relative">
        {/* vertical timeline base line */}
        <div className="absolute top-0 bottom-0 w-px bg-[rgba(72,102,156,0.15)]" style={{ left: 22 }} />

        {TASKS.map((task, i) => {
          const isA2A = i === 1 || i === 2;
          const isDone = i < taskActiveIndex;
          const isRunning = i === taskActiveIndex;
          const isWaiting = i > taskActiveIndex;

          return (
            <div key={task.id}>
              {/* ── A2A zone start label (before task index 1) ── */}
              {i === 1 && (
                null
              )}

              {/* ── Task row ── */}
              <div
                className={`relative rounded flex items-center gap-3 px-3 py-3 transition-colors ${
                  isRunning
                    ? isA2A ? 'bg-[#e7f0ff]' : 'bg-[#e7f0ff]'
                    : isA2A && !isWaiting
                    ? 'bg-[#f4f7ff]'
                    : 'bg-[#fbfbfb]'
                } ${isWaiting ? 'opacity-30' : ''}`}
              >
                {/* left accent bar */}
                {isRunning && (
                  <div
                    className="absolute left-0 top-0 h-full w-1 rounded-l"
                    style={{ background: isA2A ? 'linear-gradient(180deg,#3b5fa0,#5b87c8)' : '#48669c' }}
                  />
                )}
                {/* A2A left stripe when done */}
                {isA2A && isDone && (
                  <div
                    className="absolute left-0 top-0 h-full w-[3px] rounded-l"
                    style={{
                      background:
                        'repeating-linear-gradient(180deg,rgba(72,102,156,0.5) 0px,rgba(72,102,156,0.5) 5px,rgba(72,102,156,0.15) 5px,rgba(72,102,156,0.15) 9px)',
                    }}
                  />
                )}

                {/* checkbox */}
                {isDone ? (
                  <div className="shrink-0 size-4 rounded bg-[#48669c] flex items-center justify-center">
                    <CheckIcon />
                  </div>
                ) : (
                  <div className="shrink-0 size-4 rounded border border-[#999] bg-white" />
                )}

                {/* task number */}
                <span className="shrink-0 text-[15px] text-[rgba(0,0,0,0.3)] w-4 text-center leading-[1.75] tracking-[0.3px]">
                  {task.id}.
                </span>

                {/* task info */}
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {/* A2A badge — before task name */}
                    {isA2A && (
                      <span
                        className="shrink-0 rounded px-[5px] py-[2px] text-[9.5px] leading-none"
                        style={{
                          background: 'rgba(72,102,156,0.1)',
                          color: '#48669c',
                          border: '1px solid rgba(72,102,156,0.22)',
                          fontWeight: 600,
                          letterSpacing: '0.04em',
                        }}
                      >
                        A2A
                      </span>
                    )}
                    <span className="flex-1 text-[#171717] text-[13px] tracking-[0.065px] truncate">
                      {task.name}
                    </span>
                    {isRunning && (
                      <>
                        <div className="w-px h-2 bg-[#e2e2e2] shrink-0" />
                        <span className="text-[#48669c] text-[11px] shrink-0">运行中...</span>
                      </>
                    )}
                    {isWaiting && (
                      <span className="text-[rgba(81,82,82,0.42)] text-[11px] shrink-0">等待中...</span>
                    )}
                    {isDone && task.id === 5 && (
                      null
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#7c7c7c] text-[11px] tracking-[0.88px] uppercase">负责人:</span>
                    {task.assignees.map((a) => (
                      <span key={a} className="flex items-center gap-1">
                        {a === '王一' ? (
                          <span className="shrink-0 size-[14px] rounded-full overflow-hidden inline-flex">
                            <img alt="王一" src={imgWangYi} className="size-full object-cover" />
                          </span>
                        ) : (
                          <LxsAvatar size={14} />
                        )}
                        <span className="text-[#7c7c7c] text-[11px]">{a}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── A2A zone end label (after task index 2) ── */}
              {i === 2 && (
                null
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────��─────────────────────────
// Step button overlay
// ───────────────────────────────────���─────────────────────────────────────────

function StepButton({ step, total, onNext }: { step: number; total: number; onNext: () => void }) {
  const isLast = step === total - 1;
  return (
    <div className="absolute top-[10px] right-[10px] z-50 flex items-center gap-[6px]">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="h-[6px] rounded-full transition-all duration-300"
          style={{
            width: i === step ? 18 : 6,
            background: i === step ? '#48669c' : i < step ? '#16794c' : '#d4d4d4',
          }}
        />
      ))}
      <button
        onClick={onNext}
        className="flex items-center gap-[5px] rounded-[20px] px-[10px] py-[5px] text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-all duration-200 active:scale-95 select-none cursor-pointer"
        style={{
          background: isLast
            ? 'linear-gradient(135deg,#16794c,#22a06b)'
            : 'linear-gradient(135deg,#2d5fa4,#48669c)',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.02em',
          whiteSpace: 'nowrap',
        }}
      >
        {isLast ? (
          <>
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M2 8a6 6 0 1 0 6-6V0L4 3l4 3V4a4 4 0 1 1-4 4H2z" fill="white" />
            </svg>
            重新开始
          </>
        ) : (
          <>
            模拟下一步
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>
      {/* step label */}
      <div
        className="absolute top-full mt-1 right-0 rounded-[6px] px-2 py-1 pointer-events-none"
        style={{ background: 'rgba(34,37,44,0.82)', backdropFilter: 'blur(4px)' }}
      >
        <span className="text-white text-[10px]" style={{ opacity: 0.6 }}>
          步骤 {step + 1}/7 ·{' '}
        </span>
        <span className="text-white text-[10px]">
          {STEP_LABELS[step]}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Root App
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  const [step, setStep] = useState(0);
  const total = 7;

  const handleNext = () => setStep((s) => (s < total - 1 ? s + 1 : 0));

  return (
    <div
      className="relative size-full flex overflow-hidden"
      style={{ background: 'linear-gradient(90deg, #f8f8f8 0%, #f8f8f8 100%)' }}
    >
      {/* Left dark nav */}
      <LeftNav />

      {/* Main area */}
      <div className="flex flex-col flex-1 min-w-0 h-full overflow-hidden">
        <HeaderBar />

        {/* Body */}
        <div className="flex flex-1 min-h-0 overflow-hidden">
          <AgentSidebar />

          {/* Right work area — scroll-snap container */}
          <div
            className="flex flex-col flex-1 min-w-0 h-full overflow-y-auto"
            style={{ scrollSnapType: 'y mandatory', scrollbarWidth: 'none' }}
          >
            {/* ── Snap point 0: OKR ── */}
            <div className="shrink-0 w-full" style={{ scrollSnapAlign: 'start' }}>
              <OKRSection />
            </div>

            {/* ── Snap point 1: notification bar + main work area ── */}
            <div
              className="flex flex-col shrink-0 w-full overflow-hidden"
              style={{ scrollSnapAlign: 'start', height: '100%' }}
            >
              {/* Agent notification bar — top of work area, does not scroll with OKR */}
              <div className="bg-[rgba(206,164,114,0.16)] border-b border-[#ededed] px-5 py-2 shrink-0">
                <p className="text-[12px] text-[#9c7240]">
                  连小山持续从{' '}
                  <strong className="font-bold text-[#9c7240]">连山工单库</strong>
                  {' '}感知事件中…
                </p>
              </div>

              {/* Content row */}
              <div className="flex flex-1 min-h-0 overflow-hidden">
                <WOListPanel step={step} />

                {/* Task + Chat column */}
                <div className="flex flex-col flex-1 min-w-0 h-full overflow-hidden">
                  <ProgressHeader step={step} />

                  {/* Task list + Chat side by side */}
                  <div className="flex flex-1 min-h-0 overflow-hidden">
                    <TaskList step={step} />
                    <div className="flex-1 min-w-0 h-full overflow-hidden">
                      <AgentChatPanel step={step} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating step button */}
      <StepButton step={step} total={total} onNext={handleNext} />
    </div>
  );
}