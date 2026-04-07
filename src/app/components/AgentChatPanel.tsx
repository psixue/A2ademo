import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgFlow from "figma:asset/540a8d44e219ebf1016269b72e2d87d0a1e8d118.png";
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
        查看分析报告
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
            连小山 ⟷ 博世Agent
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
}: MsgProps) {
  return (
    <div className="flex gap-2 items-start pt-1">
      <LxsAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow name="连小山" time="10:28" />
        <WhiteCard title="索赔详情分析">
          <GrayBlock>
            <p className="text-[#171717] mb-[4px]">
              连山诊断助手总结
            </p>
            <p>
              该车于2026-03-26 09:15:42 触发异常工况
              <span className="text-[#171717]">
                绝缘阻值偏低(阻值降至480k欧姆，阈值500k欧姆)
              </span>
              。
            </p>
            <p className="text-[#171717] mb-[4px]">失效描述</p>
            <p className="mt-[4px]">
              车辆行驶中绝缘监测系统报出绝缘失效故障码,绝缘阻值持续低于安全闻值。回溯数据显示失效前已出现绝缘阻值偏低预警工况。{" "}
            </p>
          </GrayBlock>
          <ViewReportBtn href="https://vip.lianshan.xyz/app/ls_datascience_project/LADS-RHEA-4002?page=a2a_li_report" />
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

function Msg2Running({
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
        <WhiteCard title="将分析结论发送给博世Agent" isA2A>
          <YellowBadge>
            <span className="text-[#48669c]">@连小山</span>
            <span className="text-[#cb802b]">请求 </span>
            <span className="text-[#48669c]">@{assignee}</span>
            <span className="text-[#cb802b]">协助排查</span>
          </YellowBadge>
          <GrayBlock>
            连小山无更多可分析数据，将分析报告及数据发送给
            {assignee}，等待{assignee}分析结果
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
}: MsgProps) {
  return (
    <div className="flex gap-2 items-start pt-1">
      <LxsAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow name="连小山" time="10:28" />
        <WhiteCard title="将分析结论发送给博世Agent" isA2A>
          <YellowBadge>
            <span className="text-[#48669c]">@{assignee}</span>
            <span className="text-[#cb802b]">已完成任务</span>
          </YellowBadge>
          <GrayBlock>
            已将分析数据发送至{assignee}，{assignee}成功接收
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

function Msg3({ assignee }: MsgProps) {
  return (
    <div className="flex gap-2 items-start pt-1">
      <BoshiAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow
          name={assignee ?? "博世Agent"}
          time="10:28"
        />
        <BlueCard title="将分析结论发送给博世Agent" isA2A>
          <div
            className="rounded p-2 w-full"
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <p className="text-[#7c7c7c] text-[12px] leading-[1.6] tracking-[-0.06px]">
              已收到连小山的索赔详情，正在分析索赔原因
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
}: MsgProps) {
  return (
    <div className="flex gap-2 items-start pt-1">
      <LxsAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow name="连小山" time="10:28" />
        <WhiteCard title="从博世Agent获取分析数据" isA2A>
          <YellowBadge>
            <span className="text-[#48669c]">@连小山</span>
            <span className="text-[#cb802b]">请求</span>
            <span className="text-[#48669c]">@{assignee}</span>
            <span className="text-[#cb802b]">协助排查</span>
          </YellowBadge>
          <GrayBlock>
            连小山正在等待{assignee}分析根因
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

function Msg4Done({
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
        <WhiteCard title="从博世Agent获取分析数据" isA2A>
          <YellowBadge>
            <span className="text-[#48669c]">@{assignee}</span>
            <span className="text-[#cb802b]">已完成任务</span>
          </YellowBadge>
          <GrayBlock>
            {assignee}已完成分析，连小山成功接收{assignee}
            分析结论
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

function Msg5({ assignee }: MsgProps) {
  return (
    <div className="flex gap-2 items-start pt-1">
      <BoshiAvatar />
      <div className="flex flex-col gap-[6px] flex-1 min-w-0 overflow-hidden">
        <SenderRow
          name={assignee ?? "博世Agent"}
          time="10:28"
        />
        <BlueCard title="从博世Agent获取分析数据" isA2A>
          <div
            className="rounded p-2 w-full flex flex-col gap-[10px]"
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            {[
              {
                root: "电磁阀驱动芯片虚焊，振动疲劳断裂致无法建压",
                part: "IPB集成智能制动单元总成",
                qty: 2,
                breakpoint:
                  "2025-11-18（W47)更换芯片供应商，新增X-ray全检",
              },
              {
                root: "电源管理IC高温退化，供电电压跌落触发安全关断",
                part: "ESP控制模块总成、ESP控制模块总成（湿式）",
                qty: 3,
                breakpoint:
                  "2025-09-22（W39）升级IC耐温等级至125C",
              },
              {
                root: "电机位置传感器信号漂移，进入安全降级",
                part: "iBooster控制模块带主缸总成",
                qty: 1,
                breakpoint: "2025-12-09（W50）增加温漂补偿标定",
              },
              {
                root: "换能器密封圈老化进水，压电陶瓷片受潮失效",
                part: "超声波雷达探头 灰色金属漆",
                qty: 1,
                breakpoint:
                  "2026-01-13（W03）密封圈材料NBR→FKM",
              },
              {
                root: "连接器端子镀层不均，接触电阻偏高致信号丢失",
                part: "前碰传感器",
                qty: 1,
                breakpoint: "2025-10-27（W44）改为化学镀镍金",
              },
              {
                root: "磁环与传感器间隙超差，输出信号幅值不足",
                part: "轮速传感器总成",
                qty: 1,
                breakpoint:
                  "2025-08-11（W33）间隙公差收紧至0.3-0.8mm",
              },
            ].map((item, idx, arr) => (
              <div key={idx}>
                <div className="flex flex-col gap-[3px] text-[12px] leading-[1.6] tracking-[-0.06px]">
                  <div className="flex gap-[4px]">
                    <span className="text-[#999] shrink-0">
                      根因:
                    </span>
                    <span className="text-[#383838]">
                      {item.root}
                    </span>
                  </div>
                  <div className="flex gap-[4px]">
                    <span className="text-[#999] shrink-0">
                      涉及零件:
                    </span>
                    <span className="text-[#383838]">
                      {item.part}
                    </span>
                  </div>
                  <div className="flex gap-[4px]">
                    <span className="text-[#999] shrink-0">
                      数量:
                    </span>
                    <span className="text-[#383838]">
                      {item.qty}
                    </span>
                  </div>
                  <div className="flex gap-[4px]">
                    <span className="text-[#999] shrink-0">
                      断点:
                    </span>
                    <span className="text-[#383838]">
                      {item.breakpoint}
                    </span>
                  </div>
                </div>
                {idx < arr.length - 1 && (
                  <div className="mt-[10px] border-t border-dashed border-[#e2e2e2]" />
                )}
              </div>
            ))}
          </div>
          <ViewReportBtn href="https://vip.lianshan.xyz/app/ls_datascience_project/LADS-RHEA-4002?page=a2a_supplier_report" />
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
            结合{assignee ?? "博世Agent"}
            结论，ESP控制模块总成相同批次、相同软硬件版本在其他OEM客户处均未触发同类故障，目前仅在本客户整车上出现。初步怀疑与本车型整车供电策略或ESP标定参数相关，需协调博世应用工程团队与本客户研发共同排查，确认是否需要针对本车型进行供电时序或标定参数的专项优化。
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
  msg2r: "博世Agent",
  msg2: "博世Agent",
  msg3: "博世Agent",
  msg4w: "博世Agent",
  msg4d: "博世Agent",
  msg5: "博世Agent",
  msg7: "王一",
  msg8: "王一",
};

function getMessages(step: number): MsgKey[] {
  if (step === 0) return ["msg1"];
  if (step === 1) return ["msg1", "a2a-start", "msg2r"];
  if (step === 2)
    return ["msg1", "a2a-start", "msg2", "msg3", "msg4w"];
  if (step === 3)
    return [
      "msg1",
      "a2a-start",
      "msg2",
      "msg3",
      "msg4d",
      "msg5",
    ];
  if (step === 4)
    return [
      "msg1",
      "a2a-start",
      "msg2",
      "msg3",
      "msg4d",
      "msg5",
      "a2a-end",
      "msg6",
    ];
  if (step === 5)
    return [
      "msg1",
      "a2a-start",
      "msg2",
      "msg3",
      "msg4d",
      "msg5",
      "a2a-end",
      "msg6",
      "msg7",
    ];
  return [
    "msg1",
    "a2a-start",
    "msg2",
    "msg3",
    "msg4d",
    "msg5",
    "a2a-end",
    "msg6",
    "msg8",
  ];
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
  onTaskReassign,
}: {
  step: number;
  onTaskReassign?: (
    taskId: number,
    assignees: string[],
  ) => void;
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

  const messages = getMessages(step);
  const annotatableKey = getAnnotatableKey(messages);

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
              const canReassign = MSGS_REASSIGNABLE.has(key);

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