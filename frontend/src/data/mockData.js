// Mock data for the Exam Preparation App

export const examCountdown = [
  { id: 1, name: "JEE Mains", daysLeft: 150, color: "#4F46E5", icon: "🎯" },
  { id: 2, name: "PU Board", daysLeft: 300, color: "#059669", icon: "📝" },
  { id: 3, name: "KCET", daysLeft: 350, color: "#D97706", icon: "📋" },
  { id: 4, name: "NEET", daysLeft: 380, color: "#DC2626", icon: "🩺" },
  { id: 5, name: "JEE Advanced", daysLeft: 400, color: "#7C3AED", icon: "🚀" },
];

export const todoItems = [
  { id: 1, text: "Complete Physics Chapter 5 - Electromagnetic Waves", completed: true, date: "2026-08-13" },
  { id: 2, text: "Solve 50 Maths PYQs from 2024", completed: false, date: "2026-08-13" },
  { id: 3, text: "Revise Organic Chemistry - Aldehydes", completed: false, date: "2026-08-13" },
  { id: 4, text: "Practice KCET Mock Test #12", completed: true, date: "2026-08-13" },
  { id: 5, text: "Watch lecture on Integration by Parts", completed: false, date: "2026-08-13" },
];

export const updateTabs = [
  { id: "puc", label: "PUC", active: false },
  { id: "kcet", label: "KCET", active: false },
  { id: "jee", label: "JEE Mains + Advanced", active: true },
  { id: "neet", label: "NEET", active: false },
];

export const updateNews = {
  puc: [
    { id: 1, title: "PU Board Exam 2027 Date Sheet Released", date: "Aug 10, 2026", type: "important" },
    { id: 2, title: "New syllabus changes for 2nd PUC Physics", date: "Aug 8, 2026", type: "update" },
    { id: 3, title: "Lab exam schedule announced for Dec 2026", date: "Aug 5, 2026", type: "info" },
  ],
  kcet: [
    { id: 1, title: "KCET 2027 Registration opens Jan 2027", date: "Aug 12, 2026", type: "important" },
    { id: 2, title: "KCET Exam pattern unchanged for 2027", date: "Aug 6, 2026", type: "info" },
  ],
  jee: [
    { id: 1, title: "JEE Mains 2027 Session 1 - Jan 2027", date: "Aug 13, 2026", type: "important" },
    { id: 2, title: "NTA releases official mock test link", date: "Aug 11, 2026", type: "update" },
    { id: 3, title: "JEE Advanced 2027 expected in May", date: "Aug 9, 2026", type: "info" },
    { id: 4, title: "New chapter added to Maths syllabus", date: "Aug 7, 2026", type: "update" },
  ],
  neet: [
    { id: 1, title: "NEET 2027 exam date: May 2027", date: "Aug 12, 2026", type: "important" },
    { id: 2, title: "Biology syllabus revision for 2027", date: "Aug 10, 2026", type: "update" },
  ],
};

export const examsList = [
  {
    id: 1,
    name: "2nd PUC Board + LAB",
    status: "coming_soon",
    description: "Karnataka Pre-University Board Examinations",
    color: "#059669",
  },
  {
    id: 2,
    name: "KCET",
    status: "coming_soon",
    description: "Karnataka Common Entrance Test",
    color: "#D97706",
  },
  {
    id: 3,
    name: "JEE Main's",
    status: "available",
    description: "Joint Entrance Examination - Main",
    color: "#4F46E5",
  },
  {
    id: 4,
    name: "JEE Advanced",
    status: "coming_soon",
    description: "Joint Entrance Examination - Advanced",
    color: "#7C3AED",
  },
  {
    id: 5,
    name: "NEET",
    status: "available",
    description: "National Eligibility cum Entrance Test",
    color: "#DC2626",
  },
];

export const jeeMainsDetail = {
  name: "JEE Main's",
  importance: {
    title: "Exam Importance.pdf",
    size: "100-200 KB",
    description: "Understand why JEE Mains is the gateway to top engineering colleges in India.",
  },
  conductedBy: "National Testing Agency (NTA)",
  dateTime: "January 2027 (Session 1) & April 2027 (Session 2)",
  admissionCutoff: {
    general: "90+ percentile",
    obc: "75+ percentile",
    sc_st: "50+ percentile",
    topColleges: "99+ percentile for NITs/IIITs",
  },
  subjects: [
    {
      id: "physics",
      name: "Physics",
      icon: "⚡",
      color: "#4F46E5",
      chapters: 20,
      totalQuestions: 25,
      marks: 100,
    },
    {
      id: "chemistry",
      name: "Chemistry",
      icon: "🧪",
      color: "#059669",
      chapters: 25,
      totalQuestions: 25,
      marks: 100,
    },
    {
      id: "maths",
      name: "Maths",
      icon: "📐",
      color: "#D97706",
      chapters: 18,
      totalQuestions: 25,
      marks: 100,
    },
  ],
  pyqs: {
    years: [2024, 2023, 2022, 2021, 2020],
    totalPapers: 15,
  },
  fullPaperTest: {
    totalTests: 10,
    duration: "3 hours",
    totalMarks: 300,
    totalQuestions: 75,
  },
};

export const neetDetail = {
  name: "NEET",
  importance: {
    title: "Exam Importance.pdf",
    size: "100-200 KB",
    description: "Understand why NEET is the gateway to top medical colleges in India.",
  },
  conductedBy: "National Testing Agency (NTA)",
  dateTime: "May 2027 (Expected)",
  admissionCutoff: {
    general: "720-650 marks",
    obc: "650-600 marks",
    sc_st: "600-550 marks",
    topColleges: "690+ for AIIMS/JIPMER",
  },
  subjects: [
    {
      id: "physics",
      name: "Physics",
      icon: "⚡",
      color: "#4F46E5",
      chapters: 20,
      totalQuestions: 45,
      marks: 180,
    },
    {
      id: "chemistry",
      name: "Chemistry",
      icon: "🧪",
      color: "#059669",
      chapters: 25,
      totalQuestions: 45,
      marks: 180,
    },
    {
      id: "botany",
      name: "Botany",
      icon: "🌿",
      color: "#16A34A",
      chapters: 16,
      totalQuestions: 45,
      marks: 180,
    },
    {
      id: "zoology",
      name: "Zoology",
      icon: "🧬",
      color: "#DC2626",
      chapters: 15,
      totalQuestions: 45,
      marks: 180,
    },
  ],
  pyqs: {
    years: [2026, 2025, 2024, 2023, 2022, 2021, 2020],
    totalPapers: 20,
  },
  fullPaperTest: {
    totalTests: 10,
    duration: "3 hours 20 min",
    totalMarks: 720,
    totalQuestions: 180,
  },
};

export const neetSyllabusData = {
  physics: [
    { chapter: "Mechanics", weightage: 25, completed: 70 },
    { chapter: "Electrodynamics", weightage: 20, completed: 55 },
    { chapter: "Optics", weightage: 15, completed: 45 },
    { chapter: "Modern Physics", weightage: 15, completed: 25 },
    { chapter: "Thermodynamics", weightage: 10, completed: 60 },
    { chapter: "Waves & Oscillations", weightage: 15, completed: 40 },
  ],
  chemistry: [
    { chapter: "Physical Chemistry", weightage: 30, completed: 50 },
    { chapter: "Organic Chemistry", weightage: 35, completed: 40 },
    { chapter: "Inorganic Chemistry", weightage: 35, completed: 35 },
  ],
  botany: [
    { chapter: "Plant Diversity", weightage: 20, completed: 65 },
    { chapter: "Cell Biology & Genetics", weightage: 25, completed: 55 },
    { chapter: "Plant Physiology", weightage: 25, completed: 40 },
    { chapter: "Ecology & Environment", weightage: 30, completed: 30 },
  ],
  zoology: [
    { chapter: "Animal Diversity", weightage: 20, completed: 60 },
    { chapter: "Human Physiology", weightage: 35, completed: 50 },
    { chapter: "Reproduction & Genetics", weightage: 25, completed: 35 },
    { chapter: "Evolution & Biotechnology", weightage: 20, completed: 20 },
  ],
};

export const userProfile = {
  name: "Pawan Kumar V",
  email: "pawankumar293@gmail.com",
  class: "12th",
  targetYear: 2027,
  stream: "Engineering",
  location: {
    country: "India",
    city: "Bangalore",
    pincode: "560001",
  },
  coachingInstitute: "",
  avatar: "PK",
};

export const dailyGoals = [
  { day: "Mon", hours: 0, label: "Mon" },
  { day: "Tue", hours: 9, label: "Tue" },
  { day: "Wed", hours: 12, label: "Wed" },
  { day: "Thu", hours: 0, label: "Thu" },
  { day: "Fri", hours: 0, label: "Fri" },
  { day: "Sat", hours: 0, label: "Sat" },
];

export const syllabusData = {
  physics: [
    { chapter: "Mechanics", weightage: 30, completed: 75 },
    { chapter: "Electrodynamics", weightage: 25, completed: 60 },
    { chapter: "Optics", weightage: 15, completed: 40 },
    { chapter: "Modern Physics", weightage: 15, completed: 20 },
    { chapter: "Thermodynamics", weightage: 15, completed: 50 },
  ],
  chemistry: [
    { chapter: "Physical Chemistry", weightage: 35, completed: 65 },
    { chapter: "Organic Chemistry", weightage: 35, completed: 45 },
    { chapter: "Inorganic Chemistry", weightage: 30, completed: 30 },
  ],
  maths: [
    { chapter: "Calculus", weightage: 30, completed: 80 },
    { chapter: "Algebra", weightage: 25, completed: 70 },
    { chapter: "Coordinate Geometry", weightage: 20, completed: 55 },
    { chapter: "Trigonometry", weightage: 15, completed: 60 },
    { chapter: "Statistics & Probability", weightage: 10, completed: 35 },
  ],
};
