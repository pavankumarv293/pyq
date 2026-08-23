import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";
import QuestionCard from "../components/QuestionCard";
import { physicsChapter1 } from "../data/physicsData";
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Atom,
  BookOpen,
  FileText,
  Hash,
} from "lucide-react";

const ChapterPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [expandedTopic, setExpandedTopic] = useState(null);
  const chapter = physicsChapter1;

  const totalQuestionsByDifficulty = (questions) => {
    const counts = { Easy: 0, Medium: 0, Hard: 0 };
    questions.forEach((q) => {
      counts[q.difficulty] = (counts[q.difficulty] || 0) + 1;
    });
    return counts;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-lg mx-auto px-5 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate(`/exams/${id}`)}
            className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={16} className="text-gray-600" />
          </button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <Atom size={18} className="text-indigo-600" />
              <h1 className="text-lg font-bold text-gray-900 tracking-tight truncate">Physics</h1>
            </div>
            <p className="text-[11px] text-gray-400 mt-0.5 ml-6.5">
              Ch {chapter.chapter_no}: {chapter.chapter}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter Stats Bar */}
      <div className="max-w-lg mx-auto px-5 pt-4 pb-2">
        <Card className="border-0 shadow-sm bg-indigo-600 overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-white">{chapter.chapter}</h2>
                <p className="text-[11px] text-indigo-200 mt-0.5">{chapter.exam}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <p className="text-lg font-bold text-white">{chapter.total_questions}</p>
                  <p className="text-[9px] text-indigo-200 uppercase">Questions</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-white">{chapter.sections.length}</p>
                  <p className="text-[9px] text-indigo-200 uppercase">Topics</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Topics List */}
      <div className="max-w-lg mx-auto px-5 pt-2 space-y-3">
        {chapter.sections.map((section, sIdx) => {
          const isExpanded = expandedTopic === sIdx;
          const difficulties = totalQuestionsByDifficulty(section.questions);

          return (
            <div key={sIdx}>
              {/* Topic Header */}
              <Card
                className={`border-0 shadow-sm cursor-pointer transition-all duration-300 ${
                  isExpanded ? "shadow-md" : "hover:shadow-md"
                }`}
                onClick={() => setExpandedTopic(isExpanded ? null : sIdx)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                        <BookOpen size={16} className="text-indigo-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 truncate">
                          {section.topic}
                        </h3>
                        <div className="flex items-center gap-2 mt-1.5">
                          <Badge variant="secondary" className="text-[9px] px-1.5 py-0.5 bg-gray-100 text-gray-500 border-0">
                            {section.questions.length} Qs
                          </Badge>
                          {difficulties.Easy > 0 && (
                            <Badge className="text-[9px] px-1.5 py-0.5 bg-emerald-50 text-emerald-600 border-0">
                              {difficulties.Easy} Easy
                            </Badge>
                          )}
                          {difficulties.Medium > 0 && (
                            <Badge className="text-[9px] px-1.5 py-0.5 bg-amber-50 text-amber-600 border-0">
                              {difficulties.Medium} Med
                            </Badge>
                          )}
                          {difficulties.Hard > 0 && (
                            <Badge className="text-[9px] px-1.5 py-0.5 bg-red-50 text-red-600 border-0">
                              {difficulties.Hard} Hard
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Expanded Questions */}
              {isExpanded && (
                <div className="mt-2 space-y-3 animate-in pl-1">
                  {section.questions.map((q, qIdx) => (
                    <QuestionCard key={q.question_no} question={q} index={qIdx} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterPage;
