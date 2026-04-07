import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// ── Org data ──────────────────────────────────────────────────────────────────

export type Person = { id: string; name: string; email: string };

type OrgNode =
  | { type: 'dept'; id: string; name: string; children: OrgNode[] }
  | { type: 'person'; id: string; name: string; email: string };

const ORG_TREE: OrgNode = {
  type: 'dept', id: 'root', name: '理想汽车',
  children: [
    {
      type: 'dept', id: 'quality', name: '质量部',
      children: [
        {
          type: 'dept', id: 'quality-mgmt', name: '质量管理组',
          children: [
            { type: 'person', id: 'p1', name: '张三', email: 'zhangsan@lixiang.com' },
            { type: 'person', id: 'p2', name: '李四', email: 'lisi@lixiang.com' },
            { type: 'person', id: 'p3', name: '王小明', email: 'wangxiaoming@lixiang.com' },
          ],
        },
        {
          type: 'dept', id: 'quality-test', name: '测试组',
          children: [
            { type: 'person', id: 'p4', name: '王五', email: 'wangwu@lixiang.com' },
            { type: 'person', id: 'p5', name: '陈芳', email: 'chenfang@lixiang.com' },
          ],
        },
      ],
    },
    {
      type: 'dept', id: 'equipment', name: '设备部',
      children: [
        { type: 'person', id: 'p6', name: '赵六', email: 'zhaoliu@lixiang.com' },
        { type: 'person', id: 'p7', name: '刘磊', email: 'liulei@lixiang.com' },
        { type: 'person', id: 'p8', name: '孙七', email: 'sunqi@lixiang.com' },
      ],
    },
    {
      type: 'dept', id: 'production', name: '生产部',
      children: [
        { type: 'person', id: 'p9', name: '周八', email: 'zhouba@lixiang.com' },
        { type: 'person', id: 'p10', name: '吴九', email: 'wujiu@lixiang.com' },
        { type: 'person', id: 'p11', name: '杨十', email: 'yangshi@lixiang.com' },
      ],
    },
    {
      type: 'dept', id: 'process', name: '工艺部',
      children: [
        { type: 'person', id: 'p12', name: '王一', email: 'wangyi@lixiang.com' },
        { type: 'person', id: 'p13', name: '郑十一', email: 'zhengshiyi@lixiang.com' },
      ],
    },
    {
      type: 'dept', id: 'external', name: '外部协作',
      children: [
        {
          type: 'dept', id: 'bosch-group', name: '博世协作组',
          children: [
            { type: 'person', id: 'p14', name: '博世Agent', email: 'bosch-agent@bosch.com' },
          ],
        },
      ],
    },
  ],
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function getAllPersons(node: OrgNode): Person[] {
  if (node.type === 'person') return [{ id: node.id, name: node.name, email: node.email }];
  return node.children.flatMap(getAllPersons);
}

const ALL_PERSONS: Person[] = getAllPersons(ORG_TREE);

function getDeptState(node: OrgNode, sel: Set<string>): 'none' | 'partial' | 'all' {
  if (node.type === 'person') return sel.has(node.id) ? 'all' : 'none';
  const persons = getAllPersons(node);
  if (persons.length === 0) return 'none';
  const count = persons.filter(p => sel.has(p.id)).length;
  if (count === 0) return 'none';
  if (count === persons.length) return 'all';
  return 'partial';
}

function toggleDept(node: OrgNode, sel: Set<string>): Set<string> {
  const persons = getAllPersons(node);
  const state = getDeptState(node, sel);
  const next = new Set(sel);
  if (state === 'all') persons.forEach(p => next.delete(p.id));
  else persons.forEach(p => next.add(p.id));
  return next;
}

function matchPerson(p: Person, q: string): boolean {
  const lower = q.toLowerCase();
  return p.name.includes(lower) || p.email.toLowerCase().includes(lower);
}

// ── Sub-components ────────────────────────────────────────────────────────────

function Highlight({ text, q }: { text: string; q: string }) {
  if (!q) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-[#48669c]">{text.slice(idx, idx + q.length)}</span>
      {text.slice(idx + q.length)}
    </>
  );
}

function CheckBox({ state, onClick }: { state: 'none' | 'partial' | 'all'; onClick: (e: React.MouseEvent) => void }) {
  return (
    <div
      className="shrink-0 size-4 flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      {state === 'none' ? (
        <div className="size-[14px] rounded-[3px] bg-white border border-[rgba(81,82,82,0.42)] transition-colors" />
      ) : state === 'partial' ? (
        <div className="size-[14px] rounded-[3px] bg-[#00665f] flex items-center justify-center transition-colors">
          <div className="w-[7px] h-px bg-white" />
        </div>
      ) : (
        <div className="size-[14px] rounded-[3px] bg-[#00665f] flex items-center justify-center transition-colors">
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
            <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );
}

// ── Main Modal ────────────────────────────────────────────────────────────────

type Stage = 'pick' | 'confirm';

interface ReassignModalProps {
  currentAssignee?: string;
  onCancel: () => void;
  onConfirm: (names: string[]) => void;
}

export function ReassignModal({ currentAssignee, onCancel, onConfirm }: ReassignModalProps) {
  const [stage, setStage] = useState<Stage>('pick');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [navPath, setNavPath] = useState<OrgNode[]>([ORG_TREE]);
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  const currentNode = navPath[navPath.length - 1];
  const children = currentNode.type === 'dept' ? currentNode.children : [];

  // Focus search on mount
  useEffect(() => {
    setTimeout(() => searchRef.current?.focus(), 100);
  }, []);

  const searchResults = useMemo<Person[] | null>(() => {
    const q = search.trim();
    if (!q) return null;
    return ALL_PERSONS.filter(p => matchPerson(p, q));
  }, [search]);

  const selectedPersons = ALL_PERSONS.filter(p => selected.has(p.id));

  // ── Navigation
  function navigateTo(index: number) {
    setNavPath(prev => prev.slice(0, index + 1));
  }
  function drillInto(node: OrgNode) {
    if (node.type === 'dept') setNavPath(prev => [...prev, node]);
  }

  // ── Selection
  function togglePerson(id: string) {
    setSelected(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  }
  function removePerson(id: string) {
    setSelected(prev => { const n = new Set(prev); n.delete(id); return n; });
  }

  function handleNext() {
    if (selected.size > 0) setStage('confirm');
  }
  function handleConfirm() {
    onConfirm(selectedPersons.map(p => p.name));
  }

  const CARD_SHADOW = '0px 0px 1px 0px rgba(39,43,63,0.32), 0px 8px 16px 0px rgba(39,43,63,0.08), 0px 16px 32px 0px rgba(39,43,63,0.08)';

  return (
    <AnimatePresence>
      <motion.div
        key="reassign-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: 'rgba(0,0,0,0.45)' }}
        onClick={e => e.target === e.currentTarget && onCancel()}
      >
        <AnimatePresence mode="wait">
          {stage === 'pick' ? (
            // ── Stage 1: Org Picker ──────────────────────────────────────────
            <motion.div
              key="pick-modal"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="bg-white rounded-[8px] w-[500px] flex flex-col overflow-hidden"
              style={{ boxShadow: CARD_SHADOW, maxHeight: '80vh' }}
            >
              {/* Header */}
              <div className="shrink-0 flex items-center h-[52px] px-5 border-b border-[#ededed]">
                <span className="flex-1 text-[#0f0f0f] text-[16px] leading-[1.15] tracking-[0.08px]" style={{ fontWeight: 500 }}>
                  重新指派执行人
                </span>
                <button
                  onClick={onCancel}
                  className="p-2 rounded-[7px] hover:bg-[#f3f3f3] transition-colors flex items-center justify-center"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1l12 12M13 1L1 13" stroke="rgba(20,21,21,0.56)" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 flex flex-col min-h-0 p-4 gap-3">
                {/* Label */}
                <div className="shrink-0 text-[13px] text-[#171717] tracking-[0.065px]">
                  执行人员 <span className="text-[#e03636]">*</span>
                </div>

                {/* Tag Input */}
                <div
                  className="shrink-0 border border-[rgba(111,113,113,0.22)] rounded-[4px] min-h-[36px] px-2 py-[5px] flex flex-wrap gap-[6px] items-center cursor-text"
                  onClick={() => searchRef.current?.focus()}
                >
                  {selectedPersons.map(p => (
                    <div
                      key={p.id}
                      className="bg-[#f0f9ff] flex items-center gap-[6px] px-2 py-[3px] rounded-[40px] shrink-0"
                    >
                      <span className="text-[#48669c] text-[13px] leading-[1.15] tracking-[0.065px] whitespace-nowrap">
                        {p.name}（{p.email}）
                      </span>
                      <button
                        className="shrink-0 text-[#48669c] hover:text-[#3b5888] transition-colors leading-none"
                        onClick={e => { e.stopPropagation(); removePerson(p.id); }}
                      >
                        <svg width="10" height="12" viewBox="0 0 10 11.867" fill="none">
                          <path
                            d="M9.01353 2.14631C9.20877 1.95126 9.52535 1.9512 9.72056 2.14631C9.9157 2.34151 9.91561 2.65808 9.72056 2.85334L6.64048 5.93244L9.72153 9.01349C9.91659 9.2086 9.91629 9.52524 9.72153 9.72052C9.52628 9.91577 9.20976 9.91575 9.0145 9.72052L5.93345 6.63947L2.85337 9.72052C2.65813 9.91577 2.34161 9.91572 2.14634 9.72052C1.95129 9.52525 1.95115 9.20869 2.14634 9.01349L5.22642 5.93244L2.14731 2.85334C1.95206 2.65807 1.95205 2.34156 2.14731 2.14631C2.34261 1.95141 2.65921 1.95116 2.85435 2.14631L5.93345 5.22541L9.01353 2.14631Z"
                            fill="#48669C"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                  <input
                    ref={searchRef}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder={selectedPersons.length === 0 ? '搜索姓名或邮箱...' : ''}
                    className="flex-1 min-w-[100px] text-[13px] text-[#383838] outline-none placeholder:text-[#bbb] bg-transparent"
                  />
                  {/* Chevron */}
                  <div className="shrink-0 flex items-center justify-center ml-auto">
                    <svg width="12" height="11" viewBox="0 0 12 10.8744" fill="none">
                      <path
                        d="M10.3896 3.10983C10.536 3.25628 10.536 3.49371 10.3896 3.64017L6.26518 7.76457C6.11873 7.91105 5.88129 7.91105 5.73485 7.76457L1.61041 3.64017C1.46396 3.49371 1.46396 3.25628 1.61041 3.10983C1.75685 2.96339 1.99429 2.96339 2.14074 3.10983L6.00001 6.96912L9.8593 3.10983C10.0057 2.96339 10.2431 2.96339 10.3896 3.10983Z"
                        fill="#0F0F0F"
                      />
                    </svg>
                  </div>
                </div>

                {/* Org Panel */}
                <div
                  className="flex-1 min-h-0 rounded-[4px] overflow-hidden flex flex-col"
                  style={{ background: '#e7e7e7', gap: 1 }}
                >
                  {/* Breadcrumb — hidden during search */}
                  {!searchResults && (
                    <div className="shrink-0 bg-white px-4 py-[8px]">
                      <div className="flex flex-wrap items-center gap-x-[4px] gap-y-[4px]">
                        {navPath.map((node, i) => (
                          <span key={node.id} className="flex items-center gap-[4px]">
                            {i < navPath.length - 1 ? (
                              <button
                                className="text-[#48669c] text-[14px] leading-[20px] hover:underline whitespace-nowrap"
                                onClick={() => navigateTo(i)}
                              >
                                {node.name}
                              </button>
                            ) : (
                              <span className="text-[#0f0f0f] text-[14px] leading-[20px] whitespace-nowrap">
                                {node.name}
                              </span>
                            )}
                            {i < navPath.length - 1 && (
                              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="shrink-0">
                                <path
                                  d="M0.146447 0.146447C0.341709 -0.0488155 0.658216 -0.0488155 0.853479 0.146447L5.85249 5.14547C6.04775 5.34073 6.04775 5.65724 5.85249 5.8525L0.853479 10.8515C0.658216 11.0468 0.341709 11.0468 0.146447 10.8515C-0.0488155 10.6562 -0.0488155 10.3397 0.146447 10.1445L4.79196 5.49899L0.146447 0.853479C-0.0488155 0.658216 -0.0488155 0.341709 0.146447 0.146447Z"
                                  fill="#999"
                                />
                              </svg>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* List */}
                  <div className="flex-1 min-h-0 overflow-y-auto bg-white">
                    {searchResults !== null ? (
                      // ── Search mode: flat person list
                      searchResults.length === 0 ? (
                        <div className="py-10 flex flex-col items-center gap-2 text-[#bbb]">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="14" cy="14" r="8" stroke="#ddd" strokeWidth="2" />
                            <path d="M20 20l6 6" stroke="#ddd" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                          <span className="text-[13px]">无匹配结果</span>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-px p-[6px]">
                          {searchResults.map(person => {
                            const checked = selected.has(person.id);
                            return (
                              <div
                                key={person.id}
                                className="rounded-[6px] flex items-center gap-4 px-[10px] py-[10px] hover:bg-[#f8f8f8] cursor-pointer transition-colors"
                                onClick={() => togglePerson(person.id)}
                              >
                                <CheckBox
                                  state={checked ? 'all' : 'none'}
                                  onClick={e => { e.stopPropagation(); togglePerson(person.id); }}
                                />
                                <div className="flex flex-col min-w-0 flex-1">
                                  <span className="text-[13px] text-[#171717] tracking-[0.065px] leading-[1.15]">
                                    <Highlight text={person.name} q={search.trim()} />
                                  </span>
                                  <span className="text-[11px] text-[#999] mt-[2px] truncate">
                                    <Highlight text={person.email} q={search.trim()} />
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )
                    ) : (
                      // ── Org tree mode
                      <div className="flex flex-col gap-px p-[6px]">
                        {children.map(child => {
                          if (child.type === 'dept') {
                            const state = getDeptState(child, selected);
                            return (
                              <div
                                key={child.id}
                                className="rounded-[6px] flex items-center gap-4 px-[10px] py-[10px] hover:bg-[#f8f8f8] cursor-pointer transition-colors group"
                                onClick={() => drillInto(child)}
                              >
                                <CheckBox
                                  state={state}
                                  onClick={e => {
                                    e.stopPropagation();
                                    setSelected(toggleDept(child, selected));
                                  }}
                                />
                                <span className={[
                                  'flex-1 text-[13px] tracking-[0.065px] leading-[1.15]',
                                  state === 'all' ? 'text-[#48669c]' : 'text-[#171717]',
                                ].join(' ')}>
                                  {child.name}
                                </span>
                                {/* Right arrow */}
                                <svg width="7" height="12" viewBox="0 0 6.499 12" fill="none" className="shrink-0 opacity-40 group-hover:opacity-70 transition-opacity">
                                  <path
                                    d="M0.146447 0.146447C0.341709 -0.0488155 0.658216 -0.0488155 0.853479 0.146447L5.85249 5.64547C6.04775 5.84073 6.04775 6.15724 5.85249 6.3525L0.853479 11.8515C0.658216 12.0468 0.341709 12.0468 0.146447 11.8515C-0.0488155 11.6562 -0.0488155 11.3397 0.146447 11.1445L4.79196 5.99899L0.146447 0.853479C-0.0488155 0.658216 -0.0488155 0.341709 0.146447 0.146447Z"
                                    fill="rgba(20,21,21,0.56)"
                                  />
                                </svg>
                              </div>
                            );
                          } else {
                            // person node
                            const checked = selected.has(child.id);
                            return (
                              <div
                                key={child.id}
                                className="rounded-[6px] flex items-center gap-4 px-[10px] py-[10px] hover:bg-[#f8f8f8] cursor-pointer transition-colors"
                                onClick={() => togglePerson(child.id)}
                              >
                                <CheckBox
                                  state={checked ? 'all' : 'none'}
                                  onClick={e => { e.stopPropagation(); togglePerson(child.id); }}
                                />
                                <div className="flex flex-col min-w-0 flex-1">
                                  <span className={[
                                    'text-[13px] tracking-[0.065px] leading-[1.15]',
                                    checked ? 'text-[#48669c]' : 'text-[#171717]',
                                  ].join(' ')}>
                                    {child.name}
                                  </span>
                                  <span className="text-[11px] text-[#999] mt-[2px] truncate">{child.email}</span>
                                </div>
                              </div>
                            );
                          }
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="shrink-0 flex items-center justify-between px-5 py-[14px] border-t border-[#ededed]">
                <span className="text-[#999] text-[13px]">
                  已选 <span className="text-[#48669c]">{selected.size}</span> 人
                </span>
                <div className="flex gap-[10px] items-center">
                  <button
                    onClick={onCancel}
                    className="h-[28px] px-4 rounded-[5px] bg-white text-[#383838] text-[14px] tracking-[0.07px] border border-[#e2e2e2] hover:bg-[#f8f8f8] transition-colors"
                  >
                    取消
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={selected.size === 0}
                    className={[
                      'h-[28px] px-4 rounded-[4px] text-white text-[14px] tracking-[0.14px] transition-colors',
                      selected.size === 0
                        ? 'bg-[#48669c]/40 cursor-not-allowed'
                        : 'bg-[#48669c] hover:bg-[#3b5888] cursor-pointer',
                    ].join(' ')}
                  >
                    下一步
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            // ── Stage 2: Confirm ─────────────────────────────────────────────
            <motion.div
              key="confirm-modal"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="bg-white rounded-[8px] w-[394px] flex flex-col gap-6 px-5 py-[19px]"
              style={{ boxShadow: CARD_SHADOW }}
            >
              {/* Header */}
              <div className="flex items-center min-h-[32px]">
                <div className="flex flex-1 items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                    <path
                      fillRule="evenodd" clipRule="evenodd"
                      d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2ZM9 6a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V6Zm1 9a1.25 1.25 0 1 0 0-2.5A1.25 1.25 0 0 0 10 15Z"
                      fill="#D38500"
                    />
                  </svg>
                  <span className="text-[#0f0f0f] text-[16px] leading-[1.15] tracking-[0.08px]" style={{ fontWeight: 500 }}>
                    确认指派
                  </span>
                </div>
                <button
                  onClick={() => setStage('pick')}
                  className="p-2 rounded-[7px] hover:bg-[#f3f3f3] transition-colors flex items-center justify-center"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1l12 12M13 1L1 13" stroke="rgba(20,21,21,0.56)" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[10px]">
                <p className="text-[#525252] text-[14px] leading-[1.15] tracking-[0.07px]" style={{ fontWeight: 500 }}>
                  指派后，任务将由以下执行人接手
                </p>

                {/* Selected people list */}
                <div className="bg-[#f8f8f8] rounded-[6px] px-3 py-2 flex flex-col gap-[6px]">
                  {selectedPersons.map(p => (
                    <div key={p.id} className="flex items-center gap-2">
                      {/* person icon */}
                      <div className="shrink-0 size-[20px] rounded-full bg-[#48669c]/10 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <circle cx="6" cy="4" r="2.5" stroke="#48669c" strokeWidth="1" />
                          <path d="M1.5 11c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5" stroke="#48669c" strokeWidth="1" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[#171717] text-[13px] leading-[1.15] tracking-[0.065px]">{p.name}</span>
                        <span className="text-[#999] text-[11px] truncate">{p.email}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {currentAssignee && (
                  <p className="text-[13px] leading-[1.5] tracking-[-0.065px]">
                    <span className="text-[#999]">当前执行人：</span>
                    <span className="text-[#525252]">{currentAssignee}</span>
                    <span className="text-[#999]">将被替换</span>
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setStage('pick')}
                  className="text-[#48669c] text-[14px] tracking-[0.07px] hover:underline transition-colors"
                >
                  ← 返回修改
                </button>
                <div className="flex gap-[10px]">
                  <button
                    onClick={onCancel}
                    className="relative h-[28px] px-4 rounded-[5px] bg-white text-[#383838] text-[14px] tracking-[0.07px] border border-[#e2e2e2] hover:bg-[#f8f8f8] transition-colors"
                  >
                    取消
                  </button>
                  <button
                    onClick={handleConfirm}
                    className="bg-[#48669c] text-white text-[14px] tracking-[0.14px] px-4 h-[28px] rounded-[4px] hover:bg-[#3b5888] transition-colors"
                  >
                    确认指派
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
