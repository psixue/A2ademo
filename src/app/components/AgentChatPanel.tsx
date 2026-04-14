import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgFlow from "figma:asset/540a8d44e219ebf1016269b72e2d87d0a1e8d118.png";
import imgWangYi from "figma:asset/b5c611a6acf5d0300f5ea2cd4d0cc83c09723f19.png";
import BoshiFrame from "../../imports/Frame";
import Group1321320046 from "../../imports/Group1321320046";
import { ReassignModal } from "./ReassignModal";

// ── Shared prop types ────────────────────────────────────────────────────────

type MsgProps = {
  canAnnotate?: boolean;
  onAnnotate?: () => void;
  assignee?: string;
  canReassign?: boolean;
  onOpenReassign?: () => void;
};

// ── Tiny reusable pieces ─────────────────────────────────────────────────────

function LxsAvatar() {
  return (
    <div className="relative shrink-0 w-8 h-[29px] overflow-clip">
      <img
        alt="连小山"
        src={imgFlow}
        className="absolute max-w-none object-cover pointer-events-none"
        style={{
          width: 43.758,
          height: 40.44,
          left: -5.88,
          top: -5.43,
        }}
      />
    </div>
  );
}

function BoshiAvatar() {
  return (
    <div className="relative shrink-0 size-8 rounded-full overflow-hidden bg-white">
      <BoshiFrame />
    </div>
  );
}

function HuichuanAvatar() {
  return (
    <div className="relative shrink-0 w-8 h-[29px] overflow-clip">
      <img
        alt="汇川Agent"
        src={imgFlow}
        className="absolute max-w-none object-cover pointer-events-none"
        style={{ width: 43.758, height: 40.44, left: -5.88, top: -5.43 }}
      />
    </div>
  );
}

function SenderRow({
  name,
  time,
}: {
  name: string;
  time: string;
}) {
  return (
    <div className="flex gap-3 items-center text-[11px] whitespace-nowrap leading-[1.15]">
      <span className="font-semibold text-[#525252]">
        {name}
      </span>
      <span className="text-[#999] tracking-[0.88px] uppercase">
        {time}
      </span>
    </div>
  );
}

function YellowBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#fbf5d9] border border-[rgba(203,128,43,0.3)] rounded px-2 py-[6px] flex gap-1 items-center text-[12px] leading-[1.6] whitespace-nowrap w-full">
      {children}
    </div>
  );
}

function GrayBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#f3f3f3] rounded p-2 w-full">
      <div className="text-[#383838] text-[12px] leading-[1.6] tracking-[-0.06px]">
        {children}
      </div>
    </div>
  );
}

// ── ScheduleHint — re-annotate icon ─────────────────────────────────────────

function ScheduleHint({
  canAnnotate = false,
  onAnnotate,
}: Pick<MsgProps, "canAnnotate" | "onAnnotate">) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex items-center">
      <div
        className={[
          "flex gap-[5px] items-center transition-opacity duration-150",
          canAnnotate
            ? "opacity-50 hover:opacity-100 cursor-pointer"
            : "opacity-30 hover:opacity-50 cursor-default",
        ].join(" ")}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => canAnnotate && onAnnotate?.()}
      >
        <div className="size-4 shrink-0">
          <Group1321320046 />
        </div>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-0 mb-[5px] z-20 pointer-events-none"
          >
            <div className="flex items-center px-[8px] py-px rounded-[4px] whitespace-nowrap bg-[#383838]">
              <span className="text-white text-[11px] leading-[1.6] tracking-[-0.055px]">
                {canAnnotate
                  ? "重新标注"
                  : "当前节点无法重新标注"}
              </span>
            </div>
            <div className="ml-[6px] w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-[#383838]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── ReassignBtn — icon only, opens modal ─────────────────────────────────────

function ReassignBtn({
  canReassign = false,
  onOpenModal,
}: {
  canReassign?: boolean;
  onOpenModal?: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex items-center">
      <div
        className={[
          "flex items-center transition-opacity duration-150",
          canReassign
            ? "opacity-50 hover:opacity-100 cursor-pointer"
            : "opacity-30 hover:opacity-50 cursor-default",
        ].join(" ")}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => canReassign && onOpenModal?.()}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <circle
            cx="6"
            cy="4.5"
            r="2"
            stroke="#525252"
            strokeWidth="1.1"
          />
          <path
            d="M2 13c0-2.21 1.79-4 4-4s4 1.79 4 4"
            stroke="#525252"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path
            d="M10 9.5h4M12.5 7.5l1.5 2-1.5 2"
            stroke="#525252"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-0 mb-[5px] z-20 pointer-events-none"
          >
            <div className="flex items-center px-[8px] py-px rounded-[4px] whitespace-nowrap bg-[#383838]">
              <span className="text-white text-[11px] leading-[1.6] tracking-[-0.055px]">
                {canReassign ? "重新指派" : "当前节点无法指派"}
              </span>
            </div>
            <div className="ml-[6px] w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-[#383838]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── ActionRow — both icons in a row ─────────────────────────────────────────

function ActionRow({
  canAnnotate,
  onAnnotate,
  canReassign,
  onOpenReassign,
}: MsgProps) {
  return (
    <div className="flex gap-3 items-center">
      <ScheduleHint
        canAnnotate={canAnnotate}
        onAnnotate={onAnnotate}
      />
      <ReassignBtn
        canReassign={canReassign}
        onOpenModal={onOpenReassign}
      />
    </div>
  );
}

// ── Other reusable pieces ────────────────────────────────────────────────────

function TimestampFooter({ seconds }: { seconds: string }) {
  return (
    <div className="flex gap-[5px] items-center justify-start">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        opacity={0.5}
      >
        <circle
          cx="8"
          cy="8"
          r="6"
          stroke="#7c7c7c"
          strokeWidth="1.2"
        />
        <path
          d="M8 5v3.5l2 1.5"
          stroke="#7c7c7c"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[#7c7c7c] text-[12px] leading-[1.6] tracking-[-0.06px]">
        {seconds}
      </span>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-[#ededed] w-full" />;
}

function ViewReportBtn({ href }: { href: string }) {
  return (
    <div
      className="border border-[#e2e2e2] rounded-[5px] h-[30px] flex items-center justify-center w-full cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={() => window.open(href, "_blank")}
    >
      <span className="text-[#383838] text-[14px] tracking-[0.07px]">
        查看信号分析数据
      </span>
    </div>
  );
}

// ── 重新标注确认 Modal ────────────────────────────────────────────────────────

function ReAnnotateModal({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        key="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.5)" }}
        onClick={(e) =>
          e.target === e.currentTarget && onCancel()
        }
      >
        <motion.div
          key="modal-card"
          initial={{ opacity: 0, scale: 0.95, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="bg-white rounded-[8px] flex flex-col gap-6 px-5 py-[19px] w-[394px]"
          style={{
            boxShadow:
              "0px 0px 1px 0px rgba(39,43,63,0.32), 0px 8px 16px 0px rgba(39,43,63,0.08), 0px 16px 32px 0px rgba(39,43,63,0.08)",
          }}
        >
          <div className="flex items-center min-h-[32px]">
            <div className="flex flex-1 items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2ZM9 6a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V6Zm1 9a1.25 1.25 0 1 0 0-2.5A1.25 1.25 0 0 0 10 15Z"
                  fill="#D38500"
                />
              </svg>
              <span
                className="text-[#0f0f0f] text-[16px] leading-[1.15] tracking-[0.08px]"
                style={{ fontWeight: 500 }}
              >
                重新标注确认
              </span>
            </div>
            <button
              onClick={onCancel}
              className="p-2 rounded-[7px] hover:bg-[#f3f3f3] transition-colors flex items-center justify-center"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="rgba(20,21,21,0.56)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-[10px]">
            <p
              className="text-[#525252] text-[14px] leading-[1.15] tracking-[0.07px]"
              style={{ fontWeight: 500 }}
            >
              重新标注后，连小山会自动规划后续已完成任务
            </p>
            <p className="text-[13px] leading-[1.5] tracking-[-0.065px]">
              <span className="text-[#999]">
                请确认是否重新运行
              </span>
              <span className="text-[#525252]">
                诊断根因-【故障树】/5G模组未启动/测量T2213电压，看电压是否稳定
              </span>
              <span className="text-[#999]">任务</span>
            </p>
          </div>

          <div className="flex items-center justify-end gap-[10px]">
            <button
              onClick={onCancel}
              className="relative h-[28px] w-[64px] rounded-[5px] bg-white text-[#383838] text-[14px] tracking-[0.07px] border border-[#e2e2e2] hover:bg-[#f8f8f8] transition-colors"
            >
              取消
            </button>
            <button
              onClick={onConfirm}
              className="bg-[#48669c] text-white text-[14px] tracking-[0.14px] px-[8px] py-[6px] rounded-[4px] hover:bg-[#3b5888] transition-colors"
            >
              确认标注
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── A2A separators ───────────────────────────────────────────────────────────

function A2ASeparatorStart() {
  return (
    <div className="flex flex-col gap-[6px] py-2">
      <div className="flex items-center gap-3">
        <div
          className="flex-1 h-px"
          style={{
            background:
              "repeating-linear-gradient(90deg,rgba(72,102,156,0.45) 0px,rgba(72,102,156,0.45) 5px,transparent 5px,transparent 10px)",
          }}
        />
        <div
          className="shrink-0 flex items-center gap-[6px] rounded-full px-3 py-[5px] border"
          style={{
            background: "rgba(72,102,156,0.06)",
            borderColor: "rgba(72,102,156,0.25)",
          }}
        >
          <span
            className="text-[#48669c] text-[11px]"
            style={{ fontWeight: 600, letterSpacing: "0.03em" }}
          >
            A2A 协作开始
          </span>
          <span
            className="text-[10px] rounded px-[5px] py-px"
            style={{
              color: "rgba(72,102,156,0.65)",
              background: "rgba(72,102,156,0.1)",
            }}
          >
            连小山 ⟷ 汇川Agent
          </span>
        </div>
        <div
          className="flex-1 h-px"
          style={{
            background:
              "repeating-linear-gradient(90deg,rgba(72,102,156,0.45) 0px,rgba(72,102,156,0.45) 5px,transparent 5px,transparent 10px)",
          }}
        />
      </div>
    </div>
  );
}

function A2ASeparatorEnd() {
  return (
    <div className="flex flex-col gap-[6px] py-2">
      <div className="flex items-center gap-3">
        <div
          className="flex-1 h-px"
          style={{
            background:
              "repeating-linear-gradient(90deg,rgba(22,121,76,0.45) 0px,rgba(22,121,76,0.45) 5px,transparent 5px,transparent 10px)",
          }}
        />
        <div
          className="shrink-0 flex items-center gap-[6px] rounded-full px-3 py-[5px] border"
          style={{
            background: "rgba(22,121,76,0.06)",
            borderColor: "rgba(22,121,76,0.25)",
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <circle
              cx="6.5"
              cy="6.5"
              r="5.5"
              stroke="#16794c"
              strokeWidth="1.3"
            />
            <path
              d="M3.8 6.5 l2.2 2.2 3.2-4.4"
              stroke="#16794c"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="text-[#16794c] text-[11px]"
            style={{ fontWeight: 600 }}
          >
            A2A 协作完成
          </span>
          <span className="text-[#16794c]/60 text-[10px]">
            · 耗时 1.348s
          </span>
        </div>
        <div
          className="flex-1 h-px"
          style={{
            background:
              "repeating-linear-gradient(90deg,rgba(22,121,76,0.45) 0px,rgba(22,121,76,0.45) 5px,transparent 5px,transparent 10px)",
          }}
        />
      </div>
    </div>
  );
}

function A2AChannelMsg({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div>{children}</div>
    </div>
  );
}

// ── Card wrappers ────────────────────────────────────────────────────────────

function A2ATitleIcon() {
  return (
    <span
      className="shrink-0 rounded px-[5px] py-[2px] text-[9.5px] leading-none mt-[2px]"
      style={{
        background: "rgba(72,102,156,0.1)",
        color: "#48669c",
        border: "1px solid rgba(72,102,156,0.22)",
        fontWeight: 600,
        letterSpacing: "0.04em",
      }}
    >
      A2A
    </span>
  );
}

function WhiteCard({
  title,
  isA2A,
  children,
}: {
  title: string;
  isA2A?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-[#ededed] rounded p-3 w-full flex flex-col gap-3">
      <div className="flex items-start gap-[5px]">
        {isA2A && <A2ATitleIcon />}
        <p className="text-[#171717] text-[14px] leading-[1.5] tracking-[-0.07px] font-medium">
          {title}
        </p>
      </div>
      {children}
    </div>
  );
}

function BlueCard({
  title,
  isA2A,
  children,
}: {
  title: string;
  isA2A?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-[#e7f0ff] border border-[#ededed] rounded p-3 w-full flex flex-col gap-3">
      <div className="flex items-start gap-[5px]">
        {isA2A && <A2ATitleIcon />}
        <p className="text-[#171717] text-[14px] leading-[1.5] tracking-[-0.07px] font-medium">
          {title}
        </p>
      </div>
      {children}
    </div>
  );
}

// ── Individual messages ───────────────────────────────────────────────────────

function Msg1({
  canAnnotate,
  onAnnotate,
  canReassign,
  onOpenReassign,
  agentType,
}: MsgProps & { agentType?: string }) {
  const isQuality = agentType === "quality";
  const title = isQuality ? "数据感知-【异常工况】" : "索赔单生成";

  return (
    <div className="flex gap-2 items-start pt-1">
      <LxsAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow name="连小山" time="10:28" />
        <WhiteCard title={title}>
          {isQuality ? (
            <>
              <GrayBlock>
                <div className="flex flex-col gap-[6px]">
                  <div className="grid grid-cols-[auto_1fr] gap-x-[8px] gap-y-[3px] text-[12px] leading-[1.6]">
                    <span className="text-[#999] shrink-0">预警类型：</span>
                    <span className="text-[#171717]">双电控绝缘异常</span>
                    <span className="text-[#999] shrink-0">失效原因：</span>
                    <span className="text-[#383838]">非充电工况，绝缘阻值异常</span>
                    <span className="text-[#999] shrink-0">车辆VIN：</span>
                    <span className="text-[#383838]">LSJA24U39RA000101</span>
                    <span className="text-[#999] shrink-0">失效时间：</span>
                    <span className="text-[#383838]">2026-03-28 14:32:17</span>
                  </div>
                  <div className="border-t border-dashed border-[#e2e2e2] pt-[6px]">
                    <p className="text-[#999] text-[12px] mb-[4px]">关联工况：</p>
                    <div className="bg-[#fffbf0] border border-[rgba(203,128,43,0.2)] rounded px-[8px] py-[6px] flex flex-col gap-[2px]">
                      <span className="text-[#cb802b] text-[11px]">2026-03-26 09:15:42（早于失效时间）</span>
                      <span className="text-[#383838] text-[12px]">该车辆触发绝缘阻值偏低（阻值降至480kΩ，阈值500kΩ）</span>
                    </div>
                  </div>
                  <div className="border-t border-dashed border-[#e2e2e2] pt-[6px]">
                    <p className="text-[#999] text-[12px] mb-[4px]">失效描述：</p>
                    <p className="text-[#383838] text-[12px] leading-[1.6]">
                      车辆行驶中绝缘监测系统报出绝缘阻值持续偏低现象，回溯数据显示失效前已出现绝缘阻值偏低，绝缘阻值波动频繁预警工况。
                    </p>
                  </div>
                  <div className="border-t border-dashed border-[#e2e2e2] pt-[6px]">
                    <img
                      src="https://raw.githubusercontent.com/psixue/FigmaForA2A/refs/heads/main/%E7%BB%9D%E7%BC%98%E9%98%BB%E5%80%BC.png"
                      alt="信号分析图"
                      className="w-full rounded-[4px]"
                    />
                  </div>
                </div>
              </GrayBlock>
              <ViewReportBtn href="https://www.baidu.com" />
            </>
          ) : (
            <GrayBlock>
              <div className="flex flex-col gap-[6px]">
                {/* 车辆信息 */}
                <div>
                  <p className="text-[#999] text-[11px] mb-[4px]">车辆信息</p>
                  <div className="grid grid-cols-[auto_1fr] gap-x-[8px] gap-y-[3px] text-[12px] leading-[1.6]">
                    <span className="text-[#999] shrink-0">车辆VIN：</span>
                    <span className="text-[#383838]">LSJA24U39RA000101</span>
                    <span className="text-[#999] shrink-0">绝缘预警时间：</span>
                    <span className="text-[#383838]">2026-03-28 14:32:17</span>
                    <span className="text-[#999] shrink-0">用户进店时间：</span>
                    <span className="text-[#383838]">2026-03-29 09:20:00</span>
                  </div>
                </div>
                {/* 到店检测结果 */}
                <div className="border-t border-dashed border-[#e2e2e2] pt-[6px]">
                  <p className="text-[#999] text-[11px] mb-[4px]">到店检测结果</p>
                  <div className="grid grid-cols-[auto_1fr] gap-x-[8px] gap-y-[3px] text-[12px] leading-[1.6]">
                    <span className="text-[#999] shrink-0">检测时间：</span>
                    <span className="text-[#383838]">2026-03-29 10:05:00</span>
                    <span className="text-[#999] shrink-0">双电机控制器绝缘阻值：</span>
                    <span className="text-[#e03636] font-medium">385kΩ（不合格）</span>
                    <span className="text-[#999] shrink-0">压缩机绝缘阻值：</span>
                    <span className="text-[#16794c]">1150kΩ（合格）</span>
                    <span className="text-[#999] shrink-0">检测结论：</span>
                    <span className="text-[#383838]">双电机控制器绝缘阻值低于安全阈值，需更换</span>
                  </div>
                </div>
                {/* 索赔明细 */}
                <div className="border-t border-dashed border-[#e2e2e2] pt-[6px]">
                  <p className="text-[#999] text-[11px] mb-[6px]">索赔明细</p>
                  <table className="w-full text-[12px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#e2e2e2]">
                        <th className="text-left text-[#999] font-normal pb-[4px] pr-[8px]">项目</th>
                        <th className="text-left text-[#999] font-normal pb-[4px] pr-[8px]">明细</th>
                        <th className="text-right text-[#999] font-normal pb-[4px]">金额（元）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-[#383838] py-[3px] pr-[8px]">索赔零件</td>
                        <td className="text-[#383838] py-[3px] pr-[8px]">双电机控制器</td>
                        <td className="text-[#383838] py-[3px] text-right">12,800.00</td>
                      </tr>
                      <tr>
                        <td className="text-[#383838] py-[3px] pr-[8px]">工时费</td>
                        <td className="text-[#383838] py-[3px] pr-[8px]">拆装更换工时</td>
                        <td className="text-[#383838] py-[3px] text-right">650.00</td>
                      </tr>
                      <tr className="border-t border-[#e2e2e2]">
                        <td className="text-[#171717] font-medium pt-[4px] pr-[8px]" colSpan={2}>索赔总计</td>
                        <td className="text-[#171717] font-medium pt-[4px] text-right">13,450.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </GrayBlock>
          )}
          <Divider />
          <ActionRow
            canAnnotate={canAnnotate}
            onAnnotate={onAnnotate}
            canReassign={canReassign}
            onOpenReassign={onOpenReassign}
          />
        </WhiteCard>
      </div>
    </div>
  );
}

function Msg1b() {
  return (
    <div className="flex gap-2 items-start pt-1">
      <LxsAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow name="连小山" time="10:31" />
        <WhiteCard title="故障分析-【故障树】">
          <div className="text-[12px] text-[#383838] leading-[1.6]">
            <span className="text-[#48669c] font-medium">@连小山 </span>
            识别失效原因为，非充电工况绝缘阻值异常
          </div>
          <GrayBlock>
            <div className="flex flex-col gap-[6px]">
              <div className="border-b border-dashed border-[#e2e2e2] pb-[6px]">
                <img
                  src="https://raw.githubusercontent.com/psixue/FigmaForA2A/refs/heads/main/%E6%B1%87%E5%B7%9D%E6%95%85%E9%9A%9C%E6%A0%91.png"
                  alt="故障树分析图"
                  className="w-full rounded-[4px]"
                />
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-x-[8px] gap-y-[4px] text-[12px] leading-[1.6]">
                <span className="text-[#999] shrink-0">风险等级：</span>
                <span className="text-[#383838]">非安抛</span>
                <span className="text-[#999] shrink-0">推荐措施：</span>
                <span className="text-[#383838]">邀约用户进店，检查高压回路零部件绝缘阻值，更换零件</span>
                <span className="text-[#999] shrink-0">诊断路径：</span>
                <span className="text-[#383838]">动力电池性能衰减 → 绝缘故障 → 非充电工况，绝缘阻值异常</span>
                <span className="text-[#999] shrink-0">失效原因：</span>
                <span className="text-[#383838]">非充电工况绝缘阻值异常</span>
              </div>
            </div>
          </GrayBlock>
        </WhiteCard>
      </div>
    </div>
  );
}

function MsgPtc({ canAnnotate, onAnnotate, canReassign, onOpenReassign, onStepAdvance }: MsgProps & { onStepAdvance?: () => void }) {
  const [selected, setSelected] = useState<"accurate" | "false_alarm" | null>("accurate");

  return (
    <div className="flex gap-2 items-start pt-1">
      <LxsAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow name="连小山" time="10:35" />
        <WhiteCard title="PTC审核索赔单">
          <YellowBadge>
            <span className="text-[#48669c]">@连小山</span>
            <span className="text-[#cb802b]"> 请求 </span>
            <span className="text-[#48669c]">@王一</span>
            <span className="text-[#cb802b]"> 协助排查</span>
          </YellowBadge>
          <GrayBlock>
            <div className="flex flex-col gap-[6px]">
              <div className="grid grid-cols-[auto_1fr] gap-x-[8px] gap-y-[3px] text-[12px] leading-[1.6]">
                <span className="text-[#999] shrink-0">审核类型：</span>
                <span className="text-[#171717]">索赔准确性审核</span>
                <span className="text-[#999] shrink-0">审核人：</span>
                <span className="text-[#383838]">王一</span>
                <span className="text-[#999] shrink-0">审核时间：</span>
                <span className="text-[#383838]">2026-03-29 11:10:00</span>
              </div>
            </div>
          </GrayBlock>
          <div className="flex flex-col gap-[6px] w-full">
            <p className="text-[#383838] text-[12px] leading-[1.6] tracking-[-0.06px]">
              请确认索赔单审核结论
            </p>
            <div className="flex gap-[16px]">
              <label className="flex items-center gap-[6px] cursor-pointer">
                <div
                  className="shrink-0 w-[14px] h-[14px] rounded-full border-2 border-[#d1d1d1] flex items-center justify-center bg-white"
                  onClick={() => setSelected("accurate")}
                >
                  {selected === "accurate" && (
                    <div className="w-[6px] h-[6px] rounded-full bg-[#383838]" />
                  )}
                </div>
                <span className="text-[12px] text-[#383838]" onClick={() => setSelected("accurate")}>准确 · 进入A2A流程</span>
              </label>
              <label className="flex items-center gap-[6px] cursor-pointer">
                <div
                  className="shrink-0 w-[14px] h-[14px] rounded-full border-2 border-[#d1d1d1] flex items-center justify-center bg-white"
                  onClick={() => setSelected("false_alarm")}
                >
                  {selected === "false_alarm" && (
                    <div className="w-[6px] h-[6px] rounded-full bg-[#383838]" />
                  )}
                </div>
                <span className="text-[12px] text-[#383838]" onClick={() => setSelected("false_alarm")}>误报 · 终止流程</span>
              </label>
            </div>
            {selected && (
              <p className="text-[11px] leading-[1.6] px-[2px] text-[#666]">
                {selected === "accurate"
                  ? "索赔信息与检测数据一致，双电机控制器绝缘阻值不合格已确认，非误报，批准进入汇川Agent审核环节。"
                  : "索赔信息存疑，与检测数据不符，判定为误报，终止本次索赔流程。"}
              </p>
            )}
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setSelected(null)}
                className="border border-[#e2e2e2] rounded-[5px] px-4 py-[5px] text-[12px] text-[#383838] bg-white hover:bg-gray-50"
              >
                重置
              </button>
              <button
                onClick={() => { if (selected) onStepAdvance?.(); }}
                className="rounded-[5px] px-4 py-[5px] text-[12px] text-white bg-[#48669c] hover:bg-[#3b5888]"
              >
                标注
              </button>
            </div>
          </div>
          <Divider />
          <TimestampFooter seconds="0.674s" />
          <ActionRow
            canAnnotate={canAnnotate}
            onAnnotate={onAnnotate}
            canReassign={canReassign}
            onOpenReassign={onOpenReassign}
          />
        </WhiteCard>
      </div>
    </div>
  );
}

function MsgPtcReply() {
  return (
    <div className="flex gap-2 items-start pt-1">
      <div className="relative shrink-0 w-8 h-[29px] overflow-clip">
        <img alt="王一" src={imgWangYi} className="absolute max-w-none object-cover pointer-events-none" style={{ width: 43.758, height: 40.44, left: -5.88, top: -5.43 }} />
      </div>
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow name="王一" time="10:38" />
        <BlueCard title="PTC审核索赔单">
          <div className="rounded p-2 w-full" style={{ background: "rgba(255,255,255,0.5)" }}>
            <p className="text-[#7c7c7c] text-[12px] leading-[1.6] tracking-[-0.06px]">
              已完成索赔单审核，结论：准确，索赔信息与现场检测数据一致，已批准进入A2A处理流程。
            </p>
          </div>
        </BlueCard>
      </div>
    </div>
  );
}


function MsgReport({ canAnnotate, onAnnotate, canReassign, onOpenReassign }: MsgProps) {
  return (
    <div className="flex gap-2 items-start pt-1">
      <LxsAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow name="连小山" time="10:41" />
        <WhiteCard title="生成报告">
          <div className="text-[12px] text-[#383838] leading-[1.6]">
            <span className="text-[#48669c] font-medium">@连小山 </span>
            识别失效原因为，非充电工况绝缘阻值异常
          </div>
          <GrayBlock>
            <div className="flex flex-col gap-[10px]">
              <div>
                <div className="flex items-center gap-[5px] mb-[5px]">
                  <span className="text-[12px]">🔍</span>
                  <span className="text-[#383838] text-[12px] font-medium">推荐措施</span>
                </div>
                <div className="bg-white border border-[#e8e8e8] rounded px-[10px] py-[6px] text-[12px] text-[#383838]">
                  邀约用户进店，检查高压回路零部件绝缘阻值，更换零件
                </div>
              </div>
              <div>
                <div className="flex items-center gap-[5px] mb-[5px]">
                  <span className="text-[12px]">⚡</span>
                  <span className="text-[#383838] text-[12px] font-medium">诊断原因</span>
                </div>
                <div className="bg-white border border-[#e8e8e8] rounded px-[10px] py-[6px] text-[12px] text-[#383838]">
                  非充电工况绝缘阻值异常
                </div>
              </div>
              <div>
                <div className="flex items-center gap-[5px] mb-[5px]">
                  <span className="text-[12px]">🚀</span>
                  <span className="text-[#383838] text-[12px] font-medium">诊断路径</span>
                </div>
                <div className="bg-white border border-[#e8e8e8] rounded px-[10px] py-[6px] text-[12px] text-[#383838]">
                  动力电池性能衰减 → 绝缘故障 → 非充电工况，绝缘阻值异常
                </div>
              </div>
            </div>
          </GrayBlock>
          <div className="flex gap-2">
            <button className="flex-1 rounded-[4px] py-[7px] text-[12px] text-[#48669c] border border-[#48669c] bg-white hover:bg-[#f0f4ff]">
              正确
            </button>
            <button className="flex-1 rounded-[4px] py-[7px] text-[12px] text-[#e03636] border border-[#e03636] bg-white hover:bg-[#fff0f0]">
              误报
            </button>
          </div>
          <button className="w-full rounded-[4px] py-[7px] text-[12px] text-[#999] border border-[#e2e2e2] bg-white hover:bg-gray-50">
            查看诊断报告
          </button>
          <Divider />
          <TimestampFooter seconds="0.026s" />
          <ActionRow
            canAnnotate={canAnnotate}
            onAnnotate={onAnnotate}
            canReassign={canReassign}
            onOpenReassign={onOpenReassign}
          />
        </WhiteCard>
      </div>
    </div>
  );
}


function Msg2Running({
  canAnnotate,
  onAnnotate,
  assignee,
  canReassign,
  onOpenReassign,
  agentType,
}: MsgProps & { agentType?: string }) {
  const isQuality = agentType === "quality";
  return (
    <div className="flex gap-2 items-start pt-1">
      <LxsAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow name="连小山" time="10:28" />
        <WhiteCard title={isQuality ? "风险问题预警" : "将索赔单发送给汇川Agent"} isA2A>
          <YellowBadge>
            <span className="text-[#48669c]">@连小山</span>
            <span className="text-[#cb802b]">请求 </span>
            <span className="text-[#48669c]">@{assignee}</span>
            <span className="text-[#cb802b]">协助排查</span>
          </YellowBadge>
          <GrayBlock>
            {isQuality
              ? <>连小山已完成故障工况分析，将预警结论及相关数据发送给{assignee}，等待{assignee}提供零件分析数据</>
              : <>连小山已生成索赔单，将索赔单及相关数据发送给{assignee}，等待{assignee}审核反馈</>
            }
          </GrayBlock>
          <Divider />
          <TimestampFooter seconds="0.674s" />
          <ActionRow
            canAnnotate={canAnnotate}
            onAnnotate={onAnnotate}
            canReassign={canReassign}
            onOpenReassign={onOpenReassign}
          />
        </WhiteCard>
      </div>
    </div>
  );
}

function Msg2({
  canAnnotate,
  onAnnotate,
  assignee,
  canReassign,
  onOpenReassign,
  agentType,
}: MsgProps & { agentType?: string }) {
  const isQuality = agentType === "quality";
  return (
    <div className="flex gap-2 items-start pt-1">
      <LxsAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow name="连小山" time="10:28" />
        <WhiteCard title={isQuality ? "风险问题预警" : "将索赔单发送给汇川Agent"} isA2A>
          <YellowBadge>
            <span className="text-[#48669c]">@{assignee}</span>
            <span className="text-[#cb802b]">已完成任务</span>
          </YellowBadge>
          <GrayBlock>
            {isQuality
              ? <>已将预警结论及分析数据发送至{assignee}，{assignee}成功接收</>
              : <>已将索赔单发送至{assignee}，{assignee}成功接收</>
            }
          </GrayBlock>
          <Divider />
          <TimestampFooter seconds="0.674s" />
          <ActionRow
            canAnnotate={canAnnotate}
            onAnnotate={onAnnotate}
            canReassign={canReassign}
            onOpenReassign={onOpenReassign}
          />
        </WhiteCard>
      </div>
    </div>
  );
}

function Msg3({ assignee, agentType }: MsgProps & { agentType?: string }) {
  const isQuality = agentType === "quality";
  return (
    <div className="flex gap-2 items-start pt-1">
      <HuichuanAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow
          name={assignee ?? "汇川Agent"}
          time="10:28"
        />
        <BlueCard title={isQuality ? "风险问题预警" : "将索赔单发送给汇川Agent"} isA2A>
          <div
            className="rounded p-2 w-full"
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <p className="text-[#7c7c7c] text-[12px] leading-[1.6] tracking-[-0.06px]">
              {isQuality
                ? "已收到连小山的预警结论，正在分析零件根因数据"
                : "已收到连小山的索赔单，正在审核索赔信息"}
            </p>
          </div>
        </BlueCard>
      </div>
    </div>
  );
}

function Msg4Waiting({
  canAnnotate,
  onAnnotate,
  assignee,
  canReassign,
  onOpenReassign,
  agentType,
}: MsgProps & { agentType?: string }) {
  const isQuality = agentType === "quality";
  return (
    <div className="flex gap-2 items-start pt-1">
      <LxsAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow name="连小山" time="10:28" />
        <WhiteCard title={isQuality ? "预警结果确认" : "从汇川Agent获取反馈数据"} isA2A>
          <YellowBadge>
            <span className="text-[#48669c]">@连小山</span>
            <span className="text-[#cb802b]">请求</span>
            <span className="text-[#48669c]">@{assignee}</span>
            <span className="text-[#cb802b]">协助排查</span>
          </YellowBadge>
          <GrayBlock>
            {isQuality
              ? <>连小山正在等待{assignee}提供零件分析数据</>
              : <>连小山正在等待{assignee}审核索赔单</>
            }
          </GrayBlock>
          <TimestampFooter seconds="0.674s" />
          <ActionRow
            canAnnotate={canAnnotate}
            onAnnotate={onAnnotate}
            canReassign={canReassign}
            onOpenReassign={onOpenReassign}
          />
        </WhiteCard>
      </div>
    </div>
  );
}

function Msg4Done({
  canAnnotate,
  onAnnotate,
  assignee,
  canReassign,
  onOpenReassign,
  agentType,
}: MsgProps & { agentType?: string }) {
  const isQuality = agentType === "quality";
  return (
    <div className="flex gap-2 items-start pt-1">
      <LxsAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow name="连小山" time="10:28" />
        <WhiteCard title={isQuality ? "预警结果确认" : "从汇川Agent获取反馈数据"} isA2A>
          <YellowBadge>
            <span className="text-[#48669c]">@{assignee}</span>
            <span className="text-[#cb802b]">已完成任务</span>
          </YellowBadge>
          <GrayBlock>
            {isQuality
              ? <>{assignee}已完成零件分析，连小山成功接收{assignee}零件数据</>
              : <>{assignee}已完成审核，连小山成功接收{assignee}审核反馈</>
            }
          </GrayBlock>
          <Divider />
          <TimestampFooter seconds="0.674s" />
          <ActionRow
            canAnnotate={canAnnotate}
            onAnnotate={onAnnotate}
            canReassign={canReassign}
            onOpenReassign={onOpenReassign}
          />
        </WhiteCard>
      </div>
    </div>
  );
}

function Msg5({ assignee, agentType }: MsgProps & { agentType?: string }) {
  const isQuality = agentType === "quality";

  return (
    <div className="flex gap-2 items-start pt-1">
      <HuichuanAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow
          name={assignee ?? "汇川Agent"}
          time="10:28"
        />
        <BlueCard title={isQuality ? "预警结果确认" : "从汇川Agent获取反馈数据"} isA2A>
          {isQuality ? (
            <div
              className="rounded p-2 w-full flex flex-col gap-[10px]"
              style={{ background: "rgba(255,255,255,0.5)" }}
            >
              <div className="text-[12px] text-[#383838] leading-[1.6]">
                <span className="text-[#48669c] font-medium">@连小山 </span>
                识别失效原因为铝皮飞边导致模具老化龟裂
              </div>
              <div className="border-t border-dashed border-[#e2e2e2]" />
              <div className="grid grid-cols-[auto_1fr] gap-x-[8px] gap-y-[4px] text-[12px] leading-[1.6]">
                <span className="text-[#999] shrink-0">诊断原因：</span>
                <span className="text-[#383838]">铝皮飞边导致模具老化龟裂</span>
                <span className="text-[#999] shrink-0">诊断路径：</span>
                <span className="text-[#383838]">绝缘阻值异常 → 绝缘材料受潮 → 壳体密封性下降 → 壳体出现分层缺陷 → 铝皮飞边导致模具老化龟裂</span>
                <span className="text-[#999] shrink-0">失效范围：</span>
                <span className="text-[#383838]">偶发失效，未发现批量风险</span>
                <span className="text-[#999] shrink-0">推荐措施：</span>
                <span className="text-[#383838]">已断点，暂无推荐措施</span>
              </div>
            </div>
          ) : (
            <div
              className="rounded p-2 w-full flex flex-col gap-[10px]"
              style={{ background: "rgba(255,255,255,0.5)" }}
            >
              {/* 审核结论 */}
              <div>
                <p className="text-[#999] text-[11px] mb-[4px]">审核结论</p>
                <div className="grid grid-cols-[auto_1fr] gap-x-[8px] gap-y-[3px] text-[12px] leading-[1.6]">
                  <span className="text-[#999] shrink-0">索赔单号：</span>
                  <span className="text-[#383838]">CL-2026-0401-001</span>
                  <span className="text-[#999] shrink-0">审核结果：</span>
                  <span className="text-[#16794c] font-medium">✓ 索赔信息确认无误</span>
                  <span className="text-[#999] shrink-0">确认时间：</span>
                  <span className="text-[#383838]">2026-03-30 09:15:33</span>
                  <span className="text-[#999] shrink-0">确认金额：</span>
                  <span className="text-[#171717] font-medium">¥13,450.00</span>
                </div>
              </div>
              <div className="border-t border-dashed border-[#e2e2e2]" />
              {/* 审核说明 */}
              <div>
                <p className="text-[#999] text-[11px] mb-[4px]">审核说明</p>
                <p className="text-[#383838] text-[12px] leading-[1.6]">
                  经核实，该车辆VIN LSJA24U39RA000101绝缘预警记录与到店测结果一致，双电机控制器绝缘阻值385kΩ低于安全阈值，符合索赔条件，零件费用及工时费用确认无误。
                </p>
              </div>
            </div>
          )}
          {!isQuality && <ViewReportBtn href="https://vip.lianshan.xyz/app/ls_datascience_project/LADS-RHEA-4002?page=a2a_supplier_report" />}
        </BlueCard>
      </div>
    </div>
  );
}

function Msg6({
  canAnnotate,
  onAnnotate,
  assignee,
  canReassign,
  onOpenReassign,
}: MsgProps) {
  return (
    <div className="flex gap-2 items-start pt-1">
      <LxsAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow name="连小山" time="10:28" />
        <WhiteCard title="生成完整报告">
          <GrayBlock>
            结合{assignee ?? "汇川Agent"}
            结论，ESP控制模块总成相同批次、相同软硬件版本在其他OEM客户处均未触发同类故障，目前仅在本客户整车上出现。初步怀疑与本车型整车供电策略或ESP标定参数相关，需协调汇川应用工程团队与本客户研发共同排查，确认是否需要针对本车型进行供电时序或标定参数的专项优化。
          </GrayBlock>
          <ViewReportBtn href="https://vip.lianshan.xyz/app/ls_datascience_project/LADS-RHEA-4002?page=a2a_total_report" />
          <Divider />
          <TimestampFooter seconds="0.674s" />
          <ActionRow
            canAnnotate={canAnnotate}
            onAnnotate={onAnnotate}
            canReassign={canReassign}
            onOpenReassign={onOpenReassign}
          />
        </WhiteCard>
      </div>
    </div>
  );
}

function Msg7({
  canAnnotate,
  onAnnotate,
  assignee,
  canReassign,
  onOpenReassign,
}: MsgProps) {
  return (
    <div className="flex gap-2 items-start pt-1">
      <LxsAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow name="连小山" time="10:28" />
        <WhiteCard title="闭环验证">
          <YellowBadge>
            <span className="text-[#48669c]">@连小山</span>
            <span className="text-[#cb802b]"> 请求 </span>
            <span className="text-[#48669c]">@{assignee}</span>
            <span className="text-[#cb802b]"> 协助排查</span>
          </YellowBadge>
          <div className="flex flex-col gap-[6px] w-full">
            <p className="text-[#383838] text-[12px] leading-[1.6] tracking-[-0.06px]">
              需要明确闭环验证方式
            </p>
            <textarea
              className="w-full rounded border border-[#e2e2e2] bg-white p-2 text-[12px] text-[#383838] leading-[1.6] resize-none outline-none placeholder:text-[#bbb]"
              rows={4}
              readOnly
              defaultValue="请描述验证方式的，明确验证时长、验证范围和通过条件，例如【持续收集闭环问题次零件1个月内的售后数据，如要发现有相同根因的售后工单，则代表闭环失效】"
            />
            <div className="flex gap-2 justify-end">
              <button className="border border-[#e2e2e2] rounded-[5px] px-4 py-[5px] text-[12px] text-[#383838] bg-white hover:bg-gray-50">
                重置
              </button>
              <button className="rounded-[5px] px-4 py-[5px] text-[12px] text-white bg-[#48669c] hover:bg-[#3b5888]">
                标注
              </button>
            </div>
          </div>
          <Divider />
          <TimestampFooter seconds="0.674s" />
          <ActionRow
            canAnnotate={canAnnotate}
            onAnnotate={onAnnotate}
            canReassign={canReassign}
            onOpenReassign={onOpenReassign}
          />
        </WhiteCard>
      </div>
    </div>
  );
}

function Msg8({
  canAnnotate,
  onAnnotate,
  assignee,
  canReassign,
  onOpenReassign,
}: MsgProps) {
  return (
    <div className="flex gap-2 items-start pt-1">
      <LxsAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow name="连小山" time="10:28" />
        <WhiteCard title="闭环验证">
          <YellowBadge>
            <span className="text-[#48669c]">@{assignee}</span>
            <span className="text-[#cb802b]"> 已完成任务</span>
          </YellowBadge>
          <GrayBlock>
            经过一个月的持续监控，连小山未发现新问题产生。索赔闭环验证通过。
          </GrayBlock>
          <Divider />
          <TimestampFooter seconds="0.674s" />
          <ActionRow
            canAnnotate={canAnnotate}
            onAnnotate={onAnnotate}
            canReassign={canReassign}
            onOpenReassign={onOpenReassign}
          />
        </WhiteCard>
      </div>
    </div>
  );
}

// ── Message key / routing ────────────────────────────────────────────────────

type MsgKey =
  | "msg1"
  | "msg1b"
  | "msg_report"
  | "msg_ptc"
  | "msg_ptc_reply"
  | "a2a-start"
  | "msg2r"
  | "msg2"
  | "msg3"
  | "msg4w"
  | "msg4d"
  | "msg5"
  | "a2a-end"
  | "msg6"
  | "msg7"
  | "msg8";

const MSG_MAP: Record<MsgKey, React.FC<MsgProps>> = {
  msg1: Msg1,
  msg1b: Msg1b,
  msg_report: MsgReport,
  msg_ptc: MsgPtc,
  msg_ptc_reply: MsgPtcReply,
  "a2a-start": A2ASeparatorStart,
  msg2r: Msg2Running,
  msg2: Msg2,
  msg3: Msg3,
  msg4w: Msg4Waiting,
  msg4d: Msg4Done,
  msg5: Msg5,
  "a2a-end": A2ASeparatorEnd,
  msg6: Msg6,
  msg7: Msg7,
  msg8: Msg8,
};

const A2A_CHANNEL_KEYS = new Set<MsgKey>([
  "msg2r",
  "msg2",
  "msg3",
  "msg4w",
  "msg4d",
  "msg5",
]);
const MSGS_WITH_SCHEDULE = new Set<MsgKey>([
  "msg1",
  "msg2r",
  "msg2",
  "msg4w",
  "msg4d",
  "msg6",
  "msg7",
  "msg8",
]);

// Messages that have a non-连小山 helper → reassign is active
const MSGS_REASSIGNABLE = new Set<MsgKey>([
  "msg2r",
  "msg2",
  "msg3",
  "msg4w",
  "msg4d",
  "msg5",
  "msg7",
  "msg8",
]);

// Default assignees
const DEFAULT_ASSIGNEES: Partial<Record<MsgKey, string>> = {
  msg2r: "汇川Agent",
  msg2: "汇川Agent",
  msg3: "汇川Agent",
  msg4w: "汇川Agent",
  msg4d: "汇川Agent",
  msg5: "汇川Agent",
  msg7: "王一",
  msg8: "王一",
};

function getMessages(step: number, agentType: "aftersales" | "quality" = "aftersales"): MsgKey[] {
  const isQuality = agentType === "quality";

  if (isQuality) {
    const msg1group: MsgKey[] = step >= 1 ? ["msg1", "msg1b", "msg_report"] : ["msg1"];
    if (step === 0) return ["msg1"];
    if (step === 1) return msg1group;
    if (step === 2) return [...msg1group, "a2a-start", "msg2r"];
    if (step === 3) return [...msg1group, "a2a-start", "msg2", "msg3", "msg4w"];
    if (step === 4) return [...msg1group, "a2a-start", "msg2", "msg3", "msg4d", "msg5"];
    return [...msg1group, "a2a-start", "msg2", "msg3", "msg4d", "msg5", "a2a-end", "msg8"];
  }

  // 索赔专家：step=1 插入PTC审核，step=2起进入A2A
  if (step === 0) return ["msg1"];
  if (step === 1) return ["msg1", "msg_ptc"];
  if (step === 2) return ["msg1", "msg_ptc", "msg_ptc_reply", "a2a-start", "msg2r"];
  if (step === 3) return ["msg1", "msg_ptc", "msg_ptc_reply", "a2a-start", "msg2", "msg3", "msg4w"];
  if (step === 4) return ["msg1", "msg_ptc", "msg_ptc_reply", "a2a-start", "msg2", "msg3", "msg4d", "msg5"];
  if (step === 5) return ["msg1", "msg_ptc", "msg_ptc_reply", "a2a-start", "msg2", "msg3", "msg4d", "msg5", "a2a-end", "msg7"];
  return ["msg1", "msg_ptc", "msg_ptc_reply", "a2a-start", "msg2", "msg3", "msg4d", "msg5", "a2a-end", "msg8"];
}

function getAnnotatableKey(messages: MsgKey[]): MsgKey | null {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (MSGS_WITH_SCHEDULE.has(messages[i])) return messages[i];
  }
  return null;
}

// ── Main export ──────────────────────────────────────────────────────────────

export function AgentChatPanel({
  step,
  agentType = "aftersales",
  onTaskReassign,
  onStepAdvance,
}: {
  step: number;
  agentType?: "aftersales" | "quality";
  onTaskReassign?: (
    taskId: number,
    assignees: string[],
  ) => void;
  onStepAdvance?: () => void;
}) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [reassignModal, setReassignModal] = useState<{
    open: boolean;
    key: MsgKey | null;
  }>({ open: false, key: null });

  // Per-message assignee state (overrides defaults when user reassigns)
  const [assigneeOverrides, setAssigneeOverrides] = useState<
    Partial<Record<MsgKey, string>>
  >({});

  const messages = getMessages(step, agentType);
  const annotatableKey = getAnnotatableKey(messages);

  // 判断某个消息所在任务组是否已完成
  // 规则：同组中出现了"完成态"消息（msg2/msg4d/msg5/msg8），则整组已完成，不可重新指派
  function isGroupDone(key: MsgKey): boolean {
    // A2A 发送组（msg2r / msg2 / msg3）：msg2 出现代表发送已完成
    if (["msg2r", "msg2", "msg3"].includes(key)) {
      return messages.includes("msg2");
    }
    // A2A 获取组（msg4w / msg4d / msg5）：msg4d 或 msg5 出现代表已完成
    if (["msg4w", "msg4d", "msg5"].includes(key)) {
      return messages.includes("msg4d") || messages.includes("msg5");
    }
    // 闭环组（msg7 / msg8）：msg8 出现代表已完成
    if (["msg7", "msg8"].includes(key)) {
      return messages.includes("msg8");
    }
    return false;
  }

  function getAssignee(key: MsgKey): string | undefined {
    return assigneeOverrides[key] ?? DEFAULT_ASSIGNEES[key];
  }

  function handleReassign(key: MsgKey, names: string[]) {
    const newName = names.join("、");
    setAssigneeOverrides((prev) => {
      const next = { ...prev };
      if (["msg2r", "msg2", "msg3"].includes(key)) {
        next["msg2r"] = newName;
        next["msg2"] = newName;
        next["msg3"] = newName;
      } else if (["msg4w", "msg4d", "msg5"].includes(key)) {
        next["msg4w"] = newName;
        next["msg4d"] = newName;
        next["msg5"] = newName;
      } else if (["msg7", "msg8"].includes(key)) {
        next["msg7"] = newName;
        next["msg8"] = newName;
      } else {
        next[key] = newName;
      }
      return next;
    });

    // Also update the task list via callback
    if (onTaskReassign) {
      let taskIds: number[] = [];
      const newAssigneesBase = ["连小山", ...names];

      // Map message key to task ID(s) based on the grouping logic
      // Group 1: msg2r, msg2, msg3 → Task 2 & 3 (send + receive initial response)
      if (["msg2r", "msg2", "msg3"].includes(key)) {
        taskIds = [2, 3];
      }
      // Group 2: msg4w, msg4d, msg5 → Task 3 only (receive full data)
      else if (["msg4w", "msg4d", "msg5"].includes(key)) {
        taskIds = [3];
      }
      // Group 3: msg7, msg8 → Task 5 (validation, no 连小山)
      else if (["msg7", "msg8"].includes(key)) {
        taskIds = [5];
      }

      // Update all affected tasks
      taskIds.forEach((taskId) => {
        // Task 5 doesn't include 连小山
        const assignees =
          taskId === 5 ? names : newAssigneesBase;
        onTaskReassign(taskId, assignees);
      });
    }
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const t = setTimeout(() => {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }, 120);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <>
      <div className="flex flex-col h-full min-h-0 bg-[#f8f8f8]">
        {/* Header */}
        <div className="shrink-0 bg-white border-b border-[#ededed] px-4 h-[43px] flex items-center">
          <span
            className="text-[#0f0f0f] text-[14px] leading-[20px]"
            style={{ fontWeight: 500 }}
          >
            连小山在工作
          </span>
        </div>

        {/* Scrollable message list */}
        <div
          ref={scrollRef}
          className="flex-1 min-h-0 overflow-y-auto px-4 py-4 flex flex-col gap-4"
        >
          <AnimatePresence initial={false}>
            {messages.map((key) => {
              const Comp = MSG_MAP[key];
              const isAnnotatable = key === annotatableKey;
              const assignee = getAssignee(key);
              const canReassign = MSGS_REASSIGNABLE.has(key) && !isGroupDone(key);

              const inner = A2A_CHANNEL_KEYS.has(key) ? (
                <A2AChannelMsg>
                  <Comp
                    canAnnotate={isAnnotatable}
                    onAnnotate={() => setModalOpen(true)}
                    assignee={assignee}
                    canReassign={canReassign}
                    onOpenReassign={() =>
                      setReassignModal({ open: true, key })
                    }
                    agentType={agentType}
                  />
                </A2AChannelMsg>
              ) : (
                <Comp
                  canAnnotate={isAnnotatable}
                  onAnnotate={() => setModalOpen(true)}
                  assignee={assignee}
                  canReassign={canReassign}
                  onOpenReassign={() =>
                    setReassignModal({ open: true, key })
                  }
                  agentType={agentType}
                  {...(key === "msg_ptc" ? { onStepAdvance } : {})}
                />
              );

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.28,
                    ease: "easeOut",
                  }}
                >
                  {inner}
                </motion.div>
              );
            })}
          </AnimatePresence>
          <div ref={bottomRef} />
        </div>
      </div>

      {modalOpen && (
        <ReAnnotateModal
          onCancel={() => setModalOpen(false)}
          onConfirm={() => setModalOpen(false)}
        />
      )}

      {reassignModal.open && reassignModal.key && (
        <ReassignModal
          currentAssignee={getAssignee(reassignModal.key)}
          onCancel={() =>
            setReassignModal({ open: false, key: null })
          }
          onConfirm={(names) => {
            handleReassign(reassignModal.key!, names);
            setReassignModal({ open: false, key: null });
          }}
        />
      )}
    </>
  );
}