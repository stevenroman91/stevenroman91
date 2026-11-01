### Steven Roman — founder · builder

I build the software my companies run on, and I ship it with AI agents under rules that live in code.

**Scalefast** (B2B outbound sales) runs on a monolith I designed and still code every day: call ingestion from 5 telephony platforms, an in-house dialer with a live AI whisperer, a GTM lead engine, sales training with voice agents, and a CFO cockpit. Around it, I ship AI products of my own.

```
since May 2026   ~1,700 merged PRs across my repos
scalefast app    1,450+ merged PRs · ~230k lines of JS · 34 ADRs · CI guards on every rule
how              one ticket = one Claude Code session = one branch = one PR, merged by me
```

#### What I'm building

| | |
|---|---|
| **ScaleCall** | In-house WebRTC dialer: call queue from our lead lists, live transcript, AI whisperer that suggests the next line, lead scoring retrained every night on our own calls. |
| **[Homotope](https://homotope.app)** | Image vectorizer (PNG/JPEG → SVG, DXF, PDF, EPS). Its engine is open source: [`@homotope/engine`](https://github.com/stevenroman91/homotope-engine), pure TypeScript, zero dependencies, topology-first tracing. |
| **BIEX** | Adaptive Socratic AI tutor for students aged 7–17. The model converses; a deterministic state machine decides; nothing internal ever reaches the child. |
| **écl[AI]r** | AI training platform by job role, SDRs first: lessons, a serious game, judged prompt labs, voice practice. |
| **[Atalaya](https://github.com/stevenroman91/Atalaya)** | Automated security-news monitoring for institutional security teams in Latin America: daily alerts, map, monthly synthesis. |
| **[Lumi](https://github.com/stevenroman91/oulala)** | French-learning mini-games for children living abroad. |

#### How I build

- **The rule lives in code, never in a prompt.** The model writes and suggests; code decides.
- **A guard is proven red by breaking the code.** A check that reads text guards nothing.
- **An outage is never an empty list.** "Unavailable" ≠ "none", and the screen says which.
- **Every AI call is measured**: task, provider, cost, value per unit. Sovereign EU models by default; any exception is proven and dated.
- **A computed verdict recommends, a human click decides.** No cron changes a status.
- **Boring stack, strict rules.** Node/Express monolith, Postgres, one immutable ADR per decision, docs on a word budget.

#### Stack

Node.js · TypeScript · Python · PostgreSQL + pgvector · Railway · Scaleway · Twilio / Telnyx · ElevenLabs · Mistral / Anthropic · Claude Code

[scalefast.fr](https://scalefast.fr) · [homotope.app](https://homotope.app) · [LinkedIn](https://www.linkedin.com/in/steven-roman-g/)

<details>
<summary><b>🇫🇷 En français</b></summary>

<br>

Je construis le logiciel sur lequel tournent mes entreprises, et je le livre avec des agents IA, sous des règles écrites en code.

**Scalefast** (prospection commerciale B2B) tourne sur un monolithe que j'ai conçu et que je code encore tous les jours : ingestion des appels de 5 plateformes de téléphonie, un dialer maison avec un souffleur IA en direct, un moteur GTM pour les leads, de la formation commerciale avec agents vocaux, un cockpit CFO. À côté, je livre mes propres produits IA.

- **ScaleCall** : dialer WebRTC maison, transcript live, souffleur IA, scoring des leads ré-entraîné chaque nuit sur nos appels.
- **[Homotope](https://homotope.app)** : vectoriseur d'images, moteur open source [`@homotope/engine`](https://github.com/stevenroman91/homotope-engine).
- **BIEX** : tuteur IA socratique pour les 7–17 ans. Le modèle converse, une machine d'états décide.
- **écl[AI]r** : formation à l'IA par métier, en commençant par les SDR.
- **Atalaya** : veille sécurité automatisée en Amérique latine. **Lumi** : jeux de français pour enfants expatriés.

**Mes principes** : la règle vit en code, jamais en prompt · une garde se prouve rouge en cassant le code · une panne n'est jamais une liste vide · tout appel IA se mesure, souverain UE par défaut · un verdict calculé recommande, le clic humain tranche · stack sobre, règles strictes.

Depuis mai 2026 : environ 1 700 PRs mergées. Un ticket = une session Claude Code = une branche = une PR, que je merge moi-même.

</details>
