import React, { useState, useMemo, useEffect } from "react";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Tag,
  RotateCcw,
  Filter,
} from "lucide-react";

const difficultyConfig = {
  Easy:   { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  Medium: { bg: "bg-amber-50",   text: "text-amber-700",   border: "border-amber-200"   },
  Hard:   { bg: "bg-red-50",     text: "text-red-700",     border: "border-red-200"     },
};

const diffColors = {
  All:    { active: "bg-indigo-600 text-white",  inactive: "bg-gray-100 text-gray-600" },
  Easy:   { active: "bg-emerald-600 text-white", inactive: "bg-emerald-50 text-emerald-700" },
  Medium: { active: "bg-amber-500 text-white",   inactive: "bg-amber-50 text-amber-700" },
  Hard:   { active: "bg-red-500 text-white",     inactive: "bg-red-50 text-red-700" },
};

const QuestionSlider = ({ questions, onClose, showMeta = true }) => {
  const [selectedYear, setSelectedYear]           = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [currentIndex, setCurrentIndex]           = useState(0);
  const [direction, setDirection]                 = useState(0);
  const [selectedOption, setSelectedOption]       = useState(null);
  const [showAnswer, setShowAnswer]               = useState(false);
  const [showHint, setShowHint]                   = useState(false);

  // Unique years from all passed questions
  const years = useMemo(() => {
    const s = new Set(questions.map((q) => q.year));
    return ["All", ...Array.from(s).sort().reverse()];
  }, [questions]);

  // Filtered questions
  const filtered = useMemo(() =>
    questions.filter((q) => {
      const y = selectedYear === "All"       || q.year === selectedYear;
      const d = selectedDifficulty === "All" || q.difficulty === selectedDifficulty;
      return y && d;
    }),
  [questions, selectedYear, selectedDifficulty]);

  // Reset index & state when filters change
  useEffect(() => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setShowHint(false);
  }, [selectedYear, selectedDifficulty]);

  const question = filtered[currentIndex];

  const resetState = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setShowHint(false);
  };

  const goNext = () => {
    if (currentIndex < filtered.length - 1) {
      setDirection(1);
      setCurrentIndex((p) => p + 1);
      resetState();
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((p) => p - 1);
      resetState();
    }
  };

  const getOptionStyle = (key) => {
    if (!showAnswer) {
      return selectedOption === key
        ? "border-indigo-400 bg-indigo-50 ring-1 ring-indigo-200"
        : "border-gray-200 bg-white hover:border-gray-300";
    }
    if (key === question.answer)            return "border-emerald-400 bg-emerald-50 ring-1 ring-emerald-200";
    if (selectedOption === key)             return "border-red-400 bg-red-50 ring-1 ring-red-200";
    return "border-gray-200 bg-gray-50 opacity-50";
  };

  const slideVariants = {
    enter:  (d) => ({ x: d > 0 ?  300 : -300, opacity: 0 }),
    center:      ({ x: 0, opacity: 1 }),
    exit:   (d) => ({ x: d > 0 ? -300 :  300, opacity: 0 }),
  };

  return (
    <div className="flex flex-col h-full">

      {/* ── Filters ── */}
      <div className="px-4 pt-3 pb-2 border-b border-gray-100 space-y-2 flex-shrink-0">
        {/* Difficulty row */}
        <div className="flex items-center gap-2">
          <Filter size={12} className="text-gray-400 flex-shrink-0" />
          <div className="flex gap-1.5 flex-wrap">
            {["All", "Easy", "Medium", "Hard"].map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDifficulty(d)}
                className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-all duration-150 active:scale-95 ${
                  selectedDifficulty === d ? diffColors[d].active : diffColors[d].inactive
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Year row */}
        <ScrollArea className="w-full">
          <div className="flex gap-1.5 pb-0.5">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all duration-150 active:scale-95 ${
                  selectedYear === y
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* ── No-results state ── */}
      {filtered.length === 0 ? (
        <div className="flex-1 flex items-center justify-center flex-col gap-2 px-6 text-center">
          <p className="text-sm text-gray-400">No questions match these filters</p>
          <button
            onClick={() => { setSelectedYear("All"); setSelectedDifficulty("All"); }}
            className="text-xs text-indigo-600 font-medium hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <>
          {/* ── Top Bar ── */}
          <div className="flex items-center justify-between px-4 pt-3 pb-2 flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-indigo-600">Q{question.question_no}</span>
              <span className="text-xs text-gray-400">of {filtered.length}</span>
            </div>
            {showMeta && (
              <div className="flex items-center gap-2">
                <Badge className={`text-[10px] px-2 py-0.5 border ${difficultyConfig[question.difficulty]?.bg} ${difficultyConfig[question.difficulty]?.text} ${difficultyConfig[question.difficulty]?.border}`}>
                  {question.difficulty}
                </Badge>
                <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 border-0">
                  {question.year}
                </Badge>
              </div>
            )}
          </div>

          {/* ── Progress bar ── */}
          <div className="px-4 pb-2 flex-shrink-0">
            <div className="flex gap-1 overflow-hidden">
              {filtered.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full flex-1 transition-all duration-300 ${
                    i === currentIndex ? "bg-indigo-500" : i < currentIndex ? "bg-indigo-200" : "bg-gray-200"
                  }`}
                  style={{ maxWidth: filtered.length > 20 ? "8px" : "auto" }}
                />
              ))}
            </div>
          </div>

          {/* ── Scrollable question area ── */}
          <ScrollArea className="flex-1 min-h-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex + selectedYear + selectedDifficulty}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="px-4 pb-4"
              >
                {/* Question text */}
                <p className="text-sm text-gray-800 leading-relaxed font-medium py-3">
                  {question.question}
                </p>

                {/* Options */}
                <div className="space-y-2 mb-3">
                  {["a", "b", "c", "d"].map((key) => {
                    if (!question.options[key]) return null;
                    return (
                      <button
                        key={key}
                        onClick={() => { if (!showAnswer) setSelectedOption(key); }}
                        className={`w-full flex items-start gap-3 p-3 rounded-xl border transition-all duration-200 text-left ${getOptionStyle(key)}`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5 ${
                            showAnswer && key === question.answer
                              ? "bg-emerald-500 text-white"
                              : showAnswer && selectedOption === key && key !== question.answer
                              ? "bg-red-500 text-white"
                              : selectedOption === key
                              ? "bg-indigo-500 text-white"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {showAnswer && key === question.answer ? (
                            <CheckCircle2 size={14} />
                          ) : showAnswer && selectedOption === key && key !== question.answer ? (
                            <XCircle size={14} />
                          ) : (
                            key.toUpperCase()
                          )}
                        </span>
                        <span className="text-sm text-gray-700 leading-relaxed">
                          {question.options[key]}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Hint */}
                {!showAnswer && (
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="w-full flex items-center justify-center gap-1.5 py-2 mb-2 rounded-xl bg-amber-50 text-amber-700 text-xs font-medium hover:bg-amber-100 transition-all duration-200"
                  >
                    <Lightbulb size={13} />
                    {showHint ? "Hide Hint" : "Show Hint"}
                  </button>
                )}
                {showHint && !showAnswer && (
                  <div className="mb-3 p-3 rounded-xl bg-amber-50/70 border border-amber-100 space-y-2">
                    <div>
                      <p className="text-[10px] font-semibold text-amber-600 uppercase tracking-wide mb-1">Concepts needed</p>
                      <div className="flex flex-wrap gap-1">
                        {question.required_to_solve.concepts.map((c, i) => (
                          <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">{c}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-amber-600 uppercase tracking-wide mb-1">Formulas</p>
                      <div className="flex flex-wrap gap-1">
                        {question.required_to_solve.formulas.map((f, i) => (
                          <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-mono">{f}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Check / Result */}
                {!showAnswer ? (
                  <button
                    onClick={() => { if (selectedOption) setShowAnswer(true); }}
                    disabled={!selectedOption}
                    className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      selectedOption
                        ? "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98]"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Check Answer
                  </button>
                ) : (
                  <div className="space-y-3">
                    <div className={`flex items-center gap-2 p-3 rounded-xl ${
                      selectedOption === question.answer ? "bg-emerald-50 border border-emerald-200" : "bg-red-50 border border-red-200"
                    }`}>
                      {selectedOption === question.answer
                        ? <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
                        : <XCircle size={18} className="text-red-500 flex-shrink-0" />}
                      <div>
                        <p className={`text-xs font-semibold ${selectedOption === question.answer ? "text-emerald-700" : "text-red-700"}`}>
                          {selectedOption === question.answer ? "Correct!" : "Incorrect"}
                        </p>
                        <p className="text-xs text-gray-600 mt-0.5">
                          Answer: ({question.answer.toUpperCase()}) {question.options[question.answer]}
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Lightbulb size={12} className="text-amber-500" />
                        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Explanation</span>
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed">{question.explanation}</p>
                    </div>

                    {showMeta && (
                      <>
                        <div className="flex items-center gap-2 flex-wrap">
                          <div className="flex items-center gap-1">
                            <Tag size={11} className="text-gray-400" />
                            <span className="text-[10px] text-gray-400">Approach:</span>
                          </div>
                          <span className="text-[10px] text-gray-600">{question.approach}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Tag size={11} className="text-purple-400" />
                          <Badge variant="secondary" className="text-[9px] px-1.5 py-0.5 bg-purple-50 text-purple-600 border-0">
                            {question.similarity_tag}
                          </Badge>
                        </div>
                      </>
                    )}

                    <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 space-y-2">
                      <div>
                        <p className="text-[10px] font-semibold text-blue-600 uppercase tracking-wide mb-1">Concepts</p>
                        <div className="flex flex-wrap gap-1">
                          {question.required_to_solve.concepts.map((c, i) => (
                            <span key={i} className="text-[10px] px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-700">{c}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-blue-600 uppercase tracking-wide mb-1">Formulas</p>
                        <div className="flex flex-wrap gap-1">
                          {question.required_to_solve.formulas.map((f, i) => (
                            <span key={i} className="text-[10px] px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-700 font-mono">{f}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={resetState}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gray-100 text-gray-600 text-xs font-medium hover:bg-gray-200 transition-all"
                    >
                      <RotateCcw size={12} />
                      Retry Question
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </ScrollArea>

          {/* ── Navigation ── */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-white flex-shrink-0">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                currentIndex === 0
                  ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95"
              }`}
            >
              <ChevronLeft size={14} />
              Previous
            </button>
            <span className="text-xs font-bold text-gray-400">{currentIndex + 1} / {filtered.length}</span>
            <button
              onClick={goNext}
              disabled={currentIndex === filtered.length - 1}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                currentIndex === filtered.length - 1
                  ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95"
              }`}
            >
              Next
              <ChevronRight size={14} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionSlider;
