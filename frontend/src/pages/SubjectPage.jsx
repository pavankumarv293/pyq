import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, Atom, ChevronRight, BookOpen } from "lucide-react";
import { physicsChapters } from "../data/physicsIndex";

const diffColors = {
  Easy:   "bg-emerald-500",
  Medium: "bg-amber-500",
  Hard:   "bg-red-500",
};

const SubjectPage = () => {
  const navigate = useNavigate();
  const { id, subject } = useParams();

  const subjectLabel = subject.charAt(0).toUpperCase() + subject.slice(1);

  // For now only physics has data
  const chapters = subject === "physics" ? physicsChapters : [];

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
              <h1 className="text-lg font-bold text-gray-900 tracking-tight">{subjectLabel}</h1>
            </div>
            <p className="text-[11px] text-gray-400 mt-0.5 ml-[26px]">
              {chapters.length} chapters · NEET PYQs
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-5 pt-4 space-y-3">
        {/* Stats banner */}
        <Card className="border-0 shadow-sm bg-indigo-600 overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-white">NEET {subjectLabel} PYQs</h2>
                <p className="text-[11px] text-indigo-200 mt-0.5">Chapter-wise question bank</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-lg font-bold text-white">{chapters.length}</p>
                  <p className="text-[9px] text-indigo-200 uppercase">Chapters</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-white">
                    {chapters.reduce((s, c) => s + c.total_questions, 0)}
                  </p>
                  <p className="text-[9px] text-indigo-200 uppercase">Questions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chapter list */}
        <div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <BookOpen size={13} className="text-gray-400" />
            <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">All Chapters</span>
          </div>

          <div className="space-y-2">
            {chapters.map((ch) => {
              const counts = { Easy: 0, Medium: 0, Hard: 0 };
              ch.sections.forEach((s) =>
                s.questions.forEach((q) => { counts[q.difficulty] = (counts[q.difficulty] || 0) + 1; })
              );
              return (
                <Card
                  key={ch.chapter_no}
                  className="border-0 shadow-sm overflow-hidden cursor-pointer hover:shadow-md active:scale-[0.98] transition-all duration-200"
                  onClick={() => navigate(`/exams/${id}/${subject}/${ch.chapter_no}`)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      {/* Chapter number */}
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-indigo-600">{ch.chapter_no}</span>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 leading-tight truncate">{ch.chapter}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[11px] text-gray-400">
                            {ch.total_questions} questions · {ch.sections.length} topics
                          </span>
                          <div className="flex gap-1.5">
                            {["Easy", "Medium", "Hard"].map((d) => {
                              if (!counts[d]) return null;
                              return (
                                <div key={d} className="flex items-center gap-0.5">
                                  <div className={`w-1.5 h-1.5 rounded-full ${diffColors[d]}`} />
                                  <span className="text-[10px] text-gray-400">{counts[d]}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <ChevronRight size={16} className="text-gray-300 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;
