import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "../components/ui/drawer";
import QuestionSlider from "../components/QuestionSlider";
import { getPhysicsChapter } from "../data/physicsIndex";
import {
  ArrowLeft,
  Atom,
  Play,
  ChevronRight,
  BookOpen,
} from "lucide-react";

const ChapterPage = () => {
  const navigate = useNavigate();
  const { id, subject, chapterId } = useParams();
  const chapter = getPhysicsChapter(chapterId);
  const isChapter1 = chapterId === "1";

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerQuestions, setDrawerQuestions] = useState([]);

  // Stamp every question with a stable unique ID for localStorage edits
  const sectionsWithUids = chapter
    ? chapter.sections.map((s) => ({
        ...s,
        questions: s.questions.map((q) => ({
          ...q,
          _uid: `physics_ch${chapterId}_q${q.question_no}`,
        })),
      }))
    : [];

  const allQuestions = sectionsWithUids.flatMap((s) => s.questions);

  const openDrawer = (questions) => {
    if (questions.length > 0) {
      setDrawerQuestions(questions);
      setDrawerOpen(true);
    }
  };

  if (!chapter) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pb-24">
        <div className="text-center">
          <p className="text-sm text-gray-400">Chapter not found</p>
          <button
            onClick={() => navigate(`/exams/${id}/${subject}`)}
            className="mt-2 text-xs text-indigo-600 font-medium hover:underline"
          >
            Back to chapters
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-lg mx-auto px-5 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate(`/exams/${id}/${subject}`)}
            className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={16} className="text-gray-600" />
          </button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <Atom size={18} className="text-indigo-600" />
              <h1 className="text-lg font-bold text-gray-900 tracking-tight truncate">Physics</h1>
            </div>
            <p className="text-[11px] text-gray-400 mt-0.5 ml-[26px]">
              Ch {chapter.chapter_no}: {chapter.chapter}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-5 pt-4 space-y-4">
        {/* Stats Card */}
        <Card className="border-0 shadow-sm bg-indigo-600 overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-white">{chapter.chapter}</h2>
                <p className="text-[11px] text-indigo-200 mt-0.5">{chapter.exam}</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-white">{chapter.total_questions}</p>
                <p className="text-[9px] text-indigo-200 uppercase">Questions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice All Button */}
        <button
          onClick={() => openDrawer(allQuestions)}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 active:scale-[0.98] transition-all duration-200 shadow-sm"
        >
          <Play size={15} fill="white" />
          Practice All ({chapter.total_questions} Questions)
        </button>

        {/* Topic-wise Sections */}
        <div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <BookOpen size={13} className="text-gray-400" />
            <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Topics</span>
          </div>

          <div className="space-y-2">
            {sectionsWithUids.map((section, idx) => {
              const counts = { Easy: 0, Medium: 0, Hard: 0 };
              section.questions.forEach((q) => {
                counts[q.difficulty] = (counts[q.difficulty] || 0) + 1;
              });
              return (
                <Card
                  key={idx}
                  className="border-0 shadow-sm overflow-hidden cursor-pointer hover:shadow-md active:scale-[0.98] transition-all duration-200"
                  onClick={() => openDrawer(section.questions)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-indigo-600">{idx + 1}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 leading-tight">{section.topic}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[11px] text-gray-400">
                            {section.questions.length} question{section.questions.length !== 1 ? "s" : ""}
                          </span>
                          {isChapter1 && (
                            <div className="flex gap-1.5">
                              {["Easy", "Medium", "Hard"].map((d) => {
                                if (!counts[d]) return null;
                                const color = d === "Easy" ? "bg-emerald-500" : d === "Medium" ? "bg-amber-500" : "bg-red-500";
                                return (
                                  <div key={d} className="flex items-center gap-0.5">
                                    <div className={`w-1.5 h-1.5 rounded-full ${color}`} />
                                    <span className="text-[10px] text-gray-400">{counts[d]}</span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
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

      {/* Question Drawer — fully open */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="h-[100dvh] max-h-[100dvh]">
          <DrawerHeader className="sr-only">
            <DrawerTitle>Practice Questions</DrawerTitle>
            <DrawerDescription>Solve physics questions one by one</DrawerDescription>
          </DrawerHeader>
          <QuestionSlider
            questions={drawerQuestions}
            onClose={() => setDrawerOpen(false)}
            showMeta={isChapter1}
          />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ChapterPage;
