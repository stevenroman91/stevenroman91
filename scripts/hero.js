// Regenerates assets/hero-light.svg and assets/hero-dark.svg: node scripts/hero.js assets
const fs = require('fs');
const path = require('path');
const out = process.argv[2];

const themes = {
  light: { bg: '#F5F6FA', border: '#E3E6EF', text: '#0F1B3D', muted: '#5B6478', primary: '#3A47FF', yellow: '#FFD23F', onYellow: '#0F1B3D', pass: '#1A7F4B', fail: '#C62828', rail: '#D5D9E6' },
  dark:  { bg: '#0F1B3D', border: '#24305A', text: '#FFFFFF', muted: '#A9B1CC', primary: '#7B84FF', yellow: '#FFD23F', onYellow: '#0F1B3D', pass: '#4ADE80', fail: '#FF6B6B', rail: '#2C3866' },
};

const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Helvetica, Arial, sans-serif";
const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace";

const steps = ['ticket', 'session', 'branch', 'PR', 'CI', 'merged'];

function svg(t) {
  const x0 = 76, step = 132, y = 352;
  const nodes = steps.map((s, i) => {
    const x = x0 + i * step;
    const isAI = s === 'session';
    const fill = isAI ? t.yellow : t.primary;
    const mark = s === 'merged'
      ? `<path class="n n${i}" d="M${x - 6} ${y} l4 4 l8 -9" fill="none" stroke="${t.bg}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`
      : '';
    return `
    <circle class="n n${i}" cx="${x}" cy="${y}" r="13" fill="${fill}" stroke="${fill}" stroke-width="3"/>${mark}
    <text x="${x}" y="${y + 40}" text-anchor="middle" font-family="${MONO}" font-size="17" fill="${isAI ? t.text : t.muted}">${s}</text>`;
  }).join('');
  const rail = `<line x1="${x0}" y1="${y}" x2="${x0 + step * (steps.length - 1)}" y2="${y}" stroke="${t.rail}" stroke-width="3"/>`;
  const css = steps.map((_, i) => `.n${i}{animation-delay:${(i * 0.45).toFixed(2)}s}`).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 430" width="1200" height="430" role="img" aria-labelledby="title desc">
  <title id="title">Steven Roman — founder · builder</title>
  <desc id="desc">node --test steven.test.js: a pipeline from ticket to Claude Code session to branch, PR, CI and merge. About 1,700 merged PRs since May 2026, 34 ADRs, 6 products shipping.</desc>
  <style>
    .n{animation:on 5.4s ease-in-out infinite}
    @keyframes on{0%,6%{fill-opacity:0;stroke-opacity:.35}14%,82%{fill-opacity:1;stroke-opacity:1}94%,100%{fill-opacity:0;stroke-opacity:.35}}
    ${css}
    .cursor{animation:blink 1.1s steps(1) infinite}
    @keyframes blink{50%{opacity:0}}
    @media (prefers-reduced-motion: reduce){.n,.cursor{animation:none}}
  </style>
  <rect x="1.5" y="1.5" width="1197" height="427" rx="22" fill="${t.bg}" stroke="${t.border}" stroke-width="3"/>

  <g font-family="${MONO}" font-size="20">
    <circle cx="44" cy="40" r="7" fill="${t.fail}" opacity=".85"/>
    <circle cx="68" cy="40" r="7" fill="${t.yellow}"/>
    <circle cx="92" cy="40" r="7" fill="${t.pass}" opacity=".85"/>
    <text x="56" y="100" fill="${t.primary}">$ <tspan fill="${t.text}">node --test steven.test.js</tspan><tspan class="cursor" fill="${t.primary}"> ▍</tspan></text>
  </g>

  <text x="54" y="178" font-family="${SANS}" font-size="70" font-weight="800" fill="${t.text}" letter-spacing="-1.5">Steven Roman</text>
  <text x="56" y="222" font-family="${SANS}" font-size="28" font-weight="600" fill="${t.muted}">founder <tspan fill="${t.yellow}">·</tspan> builder</text>
  <text x="56" y="268" font-family="${SANS}" font-size="21" fill="${t.text}">I build the software my companies run on,</text>
  <text x="56" y="297" font-family="${SANS}" font-size="21" fill="${t.text}">and ship it with AI agents, under rules that live in code.</text>

  ${rail}${nodes}

  <line x1="812" y1="72" x2="812" y2="392" stroke="${t.border}" stroke-width="2"/>
  <g font-family="${SANS}">
    <text x="856" y="140" font-size="58" font-weight="800" fill="${t.text}" letter-spacing="-1">~1,700</text>
    <text x="858" y="170" font-size="18" fill="${t.muted}">merged PRs since May 2026</text>
    <text x="856" y="250" font-size="58" font-weight="800" fill="${t.text}" letter-spacing="-1">34</text>
    <text x="858" y="280" font-size="18" fill="${t.muted}">ADRs — immutable, by design</text>
    <text x="856" y="360" font-size="58" font-weight="800" fill="${t.text}" letter-spacing="-1">6</text>
    <text x="858" y="390" font-size="18" fill="${t.muted}">products shipping</text>
  </g>
</svg>
`;
}

fs.mkdirSync(out, { recursive: true });
for (const [name, t] of Object.entries(themes)) {
  fs.writeFileSync(path.join(out, `hero-${name}.svg`), svg(t));
}
console.log('ok');
