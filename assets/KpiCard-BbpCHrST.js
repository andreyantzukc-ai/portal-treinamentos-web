import{c as n,j as e}from"./index-DKNiIXr-.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=n("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=n("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=n("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=n("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=n("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function w({label:l,value:d,icon:r,accent:o=!1,variacao:t,sufixoVariacao:h=""}){let a=null;if(t&&typeof t.atual=="number"&&typeof t.anterior=="number"){const s=t.atual-t.anterior,i=t.anterior>0?Math.round(s/t.anterior*100):null,c=s>0?m:s<0?x:u,p=s>0?"text-emerald-700":s<0?"text-red-600":"text-slate-500";a=e.jsxs("p",{className:"mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs",children:[e.jsxs("span",{className:`inline-flex items-center gap-0.5 font-medium whitespace-nowrap ${p}`,children:[e.jsx(c,{size:14}),s>0?"+":"",Math.round(s*10)/10,h,i!==null?` (${s>0?"+":""}${i}%)`:""]}),e.jsx("span",{className:"text-slate-500 whitespace-nowrap",children:t.rotulo||"vs. mês anterior"})]})}return e.jsxs("div",{className:"bg-white rounded-xl border border-slate-200/80 shadow-card p-5 flex items-start justify-between hover:shadow-cardHover transition-shadow",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"t-label",children:l}),e.jsx("p",{className:"text-[1.75rem] leading-tight font-bold text-brand-ink mt-1.5 tabular-nums",children:d}),a]}),r&&e.jsx("div",{className:`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${o?"bg-brand-ink text-white":"bg-slate-100 text-slate-500"}`,children:e.jsx(r,{size:19})})]})}export{w as K,f as U,k as X};
