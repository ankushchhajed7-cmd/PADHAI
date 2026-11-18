# PadhAI — STATE

Class-4 padhai app (PWA) — Ankush ki dono betiyon ke liye.
Single-file: `index.html` + `sw.js` + `manifest.json` + icons. GitHub Pages par host.

---

## Abhi ka version

| | |
|---|---|
| App | **v37** (`const APP_VER` in index.html) |
| Service worker | **padhai-v37** (`const CACHE` in sw.js) |
| File size | ~3.7 MB (index.html) |

> **Niyam:** jab bhi `index.html` badle, `APP_VER` aur `sw.js` ka `CACHE` dono ek saath badhao —
> warna purana version phone ke cache mein atak jaata hai.

---

## Content

| Subject | Chapters/Parts | Quiz sawaal |
|---|---|---|
| Maths (Maths Mela) | 18 | — |
| Computer Science | 11 | 724 |
| English (Santoor) | 12 | 1056 |
| EVS (Our Wondrous World) | 6 | 487 |
| Marathi (RISE) | 28 | 1125 |
| Hindi (वीणा) | 22 | 966 |
| NCES Handbook | 8 parts | 375 |
| 🏅 Olympiad → Maths (EHF NIMO) | 10 parts | 459 |
| 🏅 Olympiad → Science (EHF NISO) | 9 parts | 510 |

Har chapter mein ho sakta hai: Video Lesson (Hindi/English/Marathi awaaz),
Quiz, Sawaal-Jawab, Match & Fill, Swadhyay/likhit jawab, Workbook.

---

## Features

- **Quiz** — options apne aap shuffle; par `both (a) and (b)` jaise aapas mein jude options
  book-order mein rehte hain, aur `none/all of these` hamesha sabse neeche.
- **▶ Resume (v37)** — quiz beech mein chhoda to wahin se aage. Chapter screen par
  `Q26 par ruke the` chip + `▶ Q26 se aage` button, aur `↺ Shuru se (Q1) karo` ka option.
  Exam / Galtiyan / Mix / Samajhna-hai modes ka resume nahi banta.
- **❌ Meri Galtiyan** — galat sawaal apne aap jama, sahi karne par nikal jaate hain.
- **📘 Samajhna hai** — "Samajh nahi aaya" button; Sara samjhati hai + awaaz, aur sawaal
  revision list mein chala jaata hai.
- **⏱ Exam mode** — 25 random sawaal, 90 sec/sawaal timer, jawab turant nahi dikhta.
- **🎲 Mix practice** — sab chapters se 20 random.
- **🔥 Streak + roz ka target** (10 sawaal) aur **📈 Progress** screen (hafte ka chart,
  mazboot/kamzor topics).
- **👧 Sara** — AI doubt solver (Google Gemini). API key har phone mein alag se daalni
  padti hai, browser storage mein rehti hai, repo mein kabhi nahi.
- **Awaaz** — browser TTS; APK/WebView mein `window.AndroidTTS` bridge ho to wo use hota hai.

---

## Version history

| Ver | Kya hua |
|---|---|
| v37 | **Quiz resume** — jahan chhoda wahin se aage. Version + refresh button Home ke top par. |
| v36 | EVS Ch-6 ka likhit workbook (18 section, 87 sawaal-jawab) |
| v35 | EVS Ch-6 "Happy and Healthy Living" — lesson, 45 quiz, Q&A, bolne wala workbook |
| v34 | Lesson pacing fix — bolne ke baad 13 sec ka sannata hata (ab 1.1 sec) |
| v33 | Awaaz ka tootna theek — keepalive ab sirf tabhi dhakka deta hai jab Chrome khud ruke |
| v32 | APK ke liye Android TTS bridge ka support |
| v31 | Awaaz test batata hai ki app Chrome / PWA / APK mein chal raha hai |
| v30 | Awaaz ke 3 bug theek + 🔊 Awaaz test button |
| v29 | Gattu → **Sara** (SVG avatar, naya naam poore app mein) |
| v28 | Galat API key apne aap hat jaati hai; key badlo ab pura button |
| v27 | Home par version number + force-refresh |
| v26 | Default English; 📘 "Samajhna hai" feature |
| v25 | EHF Maths Revision 50 → 79 sawaal (kitaab ke kram mein) |
| v24 | Sara ka model discovery + thinking-budget fix (jawab kat raha tha) |
| v23 | Option shuffle fix — `both (a) and (b)` aur `none of these` wale sawaal |
| v22 | Science Olympiad Ch-8 (79) |
| v12–v21 | Olympiad grouping + Science Olympiad Ch-1 se Ch-7 |
| v10–v11 | Poora UI redesign (bottom nav, dashboard, dark question band) |
| v6–v9 | Streak, Galtiyan bank, Exam mode, Sara (Gattu) chat |
| v1–v5 | NCES Handbook + EHF Maths Olympiad |

---

## Pending / aage karna hai

- **EHF Maths Revision ke 6 sawaal baaki** — Q42, 52, 53, 54, 82, 83. Ye sirf tasveer wale
  pattern puzzle hain (tile ka missing pattern, ghoomti aakritiyan); photo se hubahu banana
  mushkil tha, isliye chhode. Kitaab se seedhe karao — page 11, 12, 15.
- **EVS workbook mein "khelon ke naam"** ke 7 chitra pehchane nahi ja sake; aam Bharatiya
  khelon ki list di hai, kitaab se milana padega.
- **APK mein awaaz** — WebView bol nahi sakta. App taiyar hai (`window.AndroidTTS` bridge),
  par `apk-factory` ke `build-apk.yml` mein Android ka TextToSpeech jodna baaki hai.
  Tab tak Chrome → "Add to Home screen" use karo.

---

## Kitaab ki galtiyan (teacher ko pata honi chahiye)

App mein **sahi** jawab rakha hai, par kitaab ki answer key alag kehti hai:

| Kahan | Baat |
|---|---|
| EHF Maths Rev Q27 vs Q42 | Ek hi sawaal, key aapas mein ulta. Sahi: **Willow** (uske phool mein pankhudiyan nahi hoti) |
| Science Ch-2 Q10 | Key kehti hai "reptiles" mein reedh ki haddi nahi — galat, wo vertebrates hain. Sahi: **None of these** |
| NCES Math Q45 | Anushka ka 4th birthday: ganit se 1975, key kehti hai 1971 |
| NCES Math Q63 | 2 types × 4 colours = 8, key kehti hai 6 |
| NCES EVS Q60 | Teeno air-pollution bimariyan sahi, key sirf Asthma kehti hai |
| NCES Ch1 Q32 | 715937 ka hundreds place 9 hai, key kehti hai 5 |
| EHF Ch7 Q28 | 80000÷2ⁿ series: 1250 sahi, key kehti hai 250 |

In sab mein app **key-wale jawab** rakhta hai (taaki exam mein number na kate), sirf upar ke
do — Willow aur reptiles — mein sahi jawab rakha hai.

---

## Verify checklist (har build ke baad)

1. Dono files GitHub par chadhao, phir phone par app kholo.
2. Home ke **top-right par version** dekho — nayi value dikhni chahiye. Nahi to us pill par tap karo.
3. Koi bhi chapter → **Quiz** → 5-6 sawaal karo → ✕ se bahar niklo.
4. Wapas us chapter par jao — **`Q7 par ruke the` chip** aur **`▶ Q7 se aage`** button dikhna chahiye.
5. Resume dabao — Q7 se shuru ho, aur ⭐ score pehle jitna hi ho.
6. `↺ Shuru se (Q1) karo` dabao — Q1 se shuru ho, score 0.
7. Quiz poora karo → wapas aao → ab resume ka chip nahi dikhna chahiye.
8. **⏱ Exam mode** chalakar beech mein chhodo — iska resume **nahi** banna chahiye.
