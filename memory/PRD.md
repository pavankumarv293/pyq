# Product Requirements Document
## Exam Preparation App — NEET Focus

### Original Problem Statement
Build a mobile-first Exam App MVP based on wireframes containing Home, Exams, Exam Detail, and Profile screens. Integrate a provided 52-question JSON for Physics under "NEET". Modify the question UI to remove topic groupings in the drawer, present questions sliding bottom drawer with Next/Previous navigation, add Year and Difficulty filters, and hide `required_to_solve` behind a "Show Hint" button.

---

### App Architecture
```
/app/frontend/src/
  ├── components/
  │    ├── ui/ (shadcn components, vaul Drawer)
  │    ├── BottomNav.jsx
  │    ├── QuestionCard.jsx
  │    └── QuestionSlider.jsx
  ├── data/
  │    ├── mockData.js        (Mock user, exams, profile data)
  │    ├── physicsData.js     (Ch 1: Units & Measurements — 52 Qs)
  │    ├── physicsChapter2.js (Ch 2: Motion in a Straight Line — 20 Qs)
  │    ├── physicsChapter3.js (Ch 3: Motion in a Plane — 18 Qs)
  │    ├── physicsChapter4.js (Ch 4: Laws of Motion — 22 Qs)
  │    ├── physicsChapter5.js (Ch 5: Work, Energy and Power — 18 Qs)
  │    └── physicsIndex.js   (Aggregator + getPhysicsChapter lookup)
  ├── pages/
  │    ├── HomePage.jsx
  │    ├── ExamsPage.jsx
  │    ├── ExamDetailPage.jsx
  │    ├── SubjectPage.jsx    (NEW — Chapter list for a subject)
  │    ├── ChapterPage.jsx    (Topic-wise grouped Qs + sliding drawer)
  │    └── ProfilePage.jsx
  └── App.js (Routes: /, /exams, /exams/:id, /exams/:id/:subject, /exams/:id/:subject/:chapterId)
```

### Routing
- `/` → HomePage
- `/exams` → ExamsPage
- `/exams/:id` → ExamDetailPage
- `/exams/:id/:subject` → SubjectPage (chapter list)
- `/exams/:id/:subject/:chapterId` → ChapterPage (topics + drawer)

---

### What's Been Implemented

#### Frontend MVP (Complete)
- [x] Home dashboard with countdown, to-do list, calendar, updates
- [x] Exams list (NEET = available; JEE Main, PUC Board, KCET, JEE Advanced = Coming Soon)
- [x] NEET Exam Detail page (overview, cutoff, subjects, PYQs, full paper test)
- [x] SubjectPage — chapter list with difficulty breakdown dots
- [x] ChapterPage — topic-wise grouped questions + Year/Difficulty filters + "Practice All" button
- [x] QuestionSlider — vaul bottom drawer with Next/Previous, Show Hint, answer reveal
- [x] Profile page (mock data)

#### NEET Physics PYQ Bank (153 questions across 5 chapters)
- [x] Ch 1: Units and Measurements — 52 questions, 6 topics
- [x] Ch 2: Motion in a Straight Line — 41 real NEET PYQ questions, 7 topics (Average Speed & Velocity, Graphs of Motion, Equations of Motion, Kinematics Using Calculus, Free Fall & Vertical Motion, Relative Motion, 2D Motion & Vectors) — graph questions include diagram images
- [x] Ch 3: Motion in a Plane — 18 questions, 3 topics (Vectors & Scalars, Projectile Motion, Circular Motion)
- [x] Ch 4: Laws of Motion — 22 questions, 5 topics
- [x] Ch 5: Work, Energy and Power — 18 questions, 5 topics

#### Edit Questions Feature
- [x] ✏️ pencil edit button on every question in the drawer (always visible)
- [x] Edit mode: textarea for question, option inputs with letter-tap correct-answer selector, explanation textarea
- [x] Save stores patch in localStorage (`phys_edits_v1`) — "Edited" amber badge shown after saving
- [x] Cancel discards draft; Reset removes edit and reverts to original base question
- [x] Edits persist across page refresh via localStorage; original data files are never modified
- [x] `useQuestionEdits` hook at `/src/hooks/useQuestionEdits.js`; UIDs auto-generated as `physics_ch{n}_q{m}`

---

### Prioritized Backlog

#### P0 — Backend Integration
- Transition from mock data to FastAPI + MongoDB
- User authentication (JWT)
- Question progress tracking (attempted, correct/wrong)
- Create `/app/contracts.md` before starting

#### P1 — More Content
- More Physics chapters (Gravitation, Thermodynamics, Waves, etc.)
- Chemistry PYQs (Physical, Organic, Inorganic)
- Biology PYQs (Botany, Zoology)

#### P2 — Enhanced UX
- Chapter progress badges (% completed)
- Bookmarking questions
- Score summary after completing a topic set
- Search across questions

---

### Tech Stack
- React, React Router, TailwindCSS, shadcn/ui
- vaul (Sliding Drawers), framer-motion
- Mock Data only (no backend yet)

### Credentials
- None (no auth implemented yet)
