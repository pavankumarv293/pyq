import React, { useState, useCallback, useMemo } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Tag,
  Eye,
  EyeOff,
  RotateCcw,
  X,
} from "lucide-react";

const difficultyConfig = {
  Easy: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-500" },
  Medium: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", dot: "bg-amber-500" },
  Hard: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200", dot: "bg-red-500" },
};

const QuestionSlider = ({ questions, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const question = questions[currentIndex];
  if (!question) return null;

  const diff = difficultyConfig[question.difficulty] || difficultyConfig.Easy;
  const optionLabels = ["a", "b", "c", "d"];

  const goNext = () => {
    if (currentIndex < questions.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
      resetState();
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
      resetState();
    }
  };

  const resetState = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setShowHint(false);
  };

  const handleOptionSelect = (key) => {
    if (showAnswer) return;
    setSelectedOption(key);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption) return;
    setShowAnswer(true);
  };

  const handleRetry = () => {
    resetState();
  };

  const getOptionStyle = (key) => {
    if (!showAnswer) {
      return selectedOption === key
        ? "border-indigo-400 bg-indigo-50 ring-1 ring-indigo-200"
        : "border-gray-200 bg-white hover:border-gray-300";
    }
    if (key === question.answer) {
      return "border-emerald-400 bg-emerald-50 ring-1 ring-emerald-200";
    }
    if (selectedOption === key && key !== question.answer) {
      return "border-red-400 bg-red-50 ring-1 ring-red-200";
    }
    return "border-gray-200 bg-gray-50 opacity-50";
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="flex flex-col h-full max-h-[85vh]">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 pt-2 pb-3 border-b border-gray-100 flex-shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-indigo-600">
            Q{question.question_no}
          </span>
          <span className="text-xs text-gray-400">of {questions.length}</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={`text-[10px] px-2 py-0.5 border ${diff.bg} ${diff.text} ${diff.border}`}>
            {question.difficulty}
          </Badge>
          <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 border-0">
            {question.year}
          </Badge>
        </div>
      </div>

      {/* Progress dots */}
      <div className="px-4 py-2 flex-shrink-0">
        <div className="flex gap-1 overflow-hidden">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full flex-1 transition-all duration-300 ${
                i === currentIndex ? "bg-indigo-500" : i < currentIndex ? "bg-indigo-200" : "bg-gray-200"
              }`}
              style={{ maxWidth: questions.length > 20 ? "8px" : "auto" }}
            />
          ))}
        </div>
      </div>

      {/* Scrollable Question Area */}
      <ScrollArea className="flex-1 min-h-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="px-4 pb-4"
          >
            {/* Question */}
            <p className="text-sm text-gray-800 leading-relaxed font-medium py-3">
              {question.question}
            </p>

            {/* Options */}
            <div className="space-y-2 mb-3">
              {optionLabels.map((key) => {
                if (!question.options[key]) return null;
                return (
                  <button
                    key={key}
                    onClick={() => handleOptionSelect(key)}
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

            {/* Hint Button (before answer) */}
            {!showAnswer && (
              <button
                onClick={() => setShowHint(!showHint)}
                className="w-full flex items-center justify-center gap-1.5 py-2 mb-2 rounded-xl bg-amber-50 text-amber-700 text-xs font-medium hover:bg-amber-100 transition-all duration-200"
              >
                <Lightbulb size={13} />
                {showHint ? "Hide Hint" : "Show Hint"}
              </button>
            )}

            {/* Hint Content */}
            {showHint && !showAnswer && (
              <div className="mb-3 p-3 rounded-xl bg-amber-50/70 border border-amber-100 space-y-2 animate-in">
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

            {/* Check / Result Area */}
            {!showAnswer ? (
              <button
                onClick={handleCheckAnswer}
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
                {/* Correct Answer Banner */}
                <div className={`flex items-center gap-2 p-3 rounded-xl ${
                  selectedOption === question.answer ? "bg-emerald-50 border border-emerald-200" : "bg-red-50 border border-red-200"
                }`}>
                  {selectedOption === question.answer ? (
                    <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
                  ) : (
                    <XCircle size={18} className="text-red-500 flex-shrink-0" />
                  )}
                  <div>
                    <p className={`text-xs font-semibold ${selectedOption === question.answer ? "text-emerald-700" : "text-red-700"}`}>
                      {selectedOption === question.answer ? "Correct!" : "Incorrect"}
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Answer: ({question.answer.toUpperCase()}) {question.options[question.answer]}
                    </p>
                  </div>
                </div>

                {/* Explanation */}
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Lightbulb size={12} className="text-amber-500" />
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Explanation</span>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">{question.explanation}</p>
                </div>

                {/* Tags row */}
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

                {/* Hint in answer (concepts + formulas) */}
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

                {/* Retry */}
                <button
                  onClick={handleRetry}
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

      {/* Bottom Navigation */}
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

        <span className="text-xs font-bold text-gray-400">
          {currentIndex + 1} / {questions.length}
        </span>

        <button
          onClick={goNext}
          disabled={currentIndex === questions.length - 1}
          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
            currentIndex === questions.length - 1
              ? "bg-gray-100 text-gray-300 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95"
          }`}
        >
          Next
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default QuestionSlider;
