import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import {
  ChevronDown,
  CheckCircle2,
  XCircle,
  Lightbulb,
  BookOpen,
  Sigma,
  Tag,
  Eye,
  EyeOff,
} from "lucide-react";

const difficultyConfig = {
  Easy: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  Medium: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  Hard: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
};

const QuestionCard = ({ question, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const diff = difficultyConfig[question.difficulty] || difficultyConfig.Easy;
  const optionLabels = ["a", "b", "c", "d"];

  const handleOptionSelect = (key) => {
    if (showAnswer) return;
    setSelectedOption(key);
  };

  const handleCheckAnswer = () => {
    setShowAnswer(true);
    setIsExpanded(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setIsExpanded(false);
  };

  const getOptionStyle = (key) => {
    if (!showAnswer) {
      return selectedOption === key
        ? "border-indigo-400 bg-indigo-50 ring-1 ring-indigo-200"
        : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50";
    }
    if (key === question.answer) {
      return "border-emerald-400 bg-emerald-50 ring-1 ring-emerald-200";
    }
    if (selectedOption === key && key !== question.answer) {
      return "border-red-400 bg-red-50 ring-1 ring-red-200";
    }
    return "border-gray-200 bg-gray-50 opacity-60";
  };

  return (
    <Card className="border-0 shadow-sm overflow-hidden transition-all duration-300">
      <CardContent className="p-0">
        {/* Question Header */}
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                Q{question.question_no}
              </span>
              <Badge className={`text-[10px] px-2 py-0.5 border ${diff.bg} ${diff.text} ${diff.border}`}>
                {question.difficulty}
              </Badge>
              <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 border-0">
                {question.year}
              </Badge>
            </div>
          </div>

          {/* Question Text */}
          <p className="text-sm text-gray-800 leading-relaxed font-medium">
            {question.question}
          </p>
        </div>

        {/* Options */}
        <div className="px-4 pb-3 space-y-2">
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

        {/* Action Buttons */}
        <div className="px-4 pb-3 flex gap-2">
          {!showAnswer ? (
            <button
              onClick={handleCheckAnswer}
              disabled={!selectedOption}
              className={`flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedOption
                  ? "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98]"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              Check Answer
            </button>
          ) : (
            <>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-1.5"
              >
                {isExpanded ? <EyeOff size={12} /> : <Eye size={12} />}
                {isExpanded ? "Hide" : "Show"} Explanation
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-200"
              >
                Retry
              </button>
            </>
          )}
        </div>

        {/* Expanded Explanation */}
        {isExpanded && showAnswer && (
          <div className="border-t border-gray-100 bg-gray-50/50 px-4 py-4 space-y-4 animate-in">
            {/* Answer */}
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-700">
                Correct Answer: ({question.answer.toUpperCase()}) {question.options[question.answer]}
              </span>
            </div>

            {/* Explanation */}
            <div className="bg-white rounded-xl p-3 border border-gray-100">
              <div className="flex items-center gap-1.5 mb-2">
                <Lightbulb size={13} className="text-amber-500" />
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Explanation</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{question.explanation}</p>
            </div>

            {/* Approach */}
            <div className="flex items-center gap-2">
              <Tag size={13} className="text-indigo-500" />
              <span className="text-[11px] font-medium text-gray-500">Approach:</span>
              <span className="text-xs text-gray-700">{question.approach}</span>
            </div>

            {/* Similarity Tag */}
            <div className="flex items-center gap-2">
              <Tag size={13} className="text-purple-500" />
              <span className="text-[11px] font-medium text-gray-500">Similarity:</span>
              <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-purple-50 text-purple-700 border-0">
                {question.similarity_tag}
              </Badge>
            </div>

            <Separator />

            {/* Required to Solve */}
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <BookOpen size={13} className="text-blue-500" />
                  <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Concepts</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {question.required_to_solve.concepts.map((c, i) => (
                    <Badge key={i} variant="secondary" className="text-[10px] px-2 py-1 bg-blue-50 text-blue-700 border-0">
                      {c}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Sigma size={13} className="text-emerald-500" />
                  <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Formulas</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {question.required_to_solve.formulas.map((f, i) => (
                    <Badge key={i} variant="secondary" className="text-[10px] px-2 py-1 bg-emerald-50 text-emerald-700 border-0 font-mono">
                      {f}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
