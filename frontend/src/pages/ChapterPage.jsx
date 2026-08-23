import React, { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "../components/ui/drawer";
import QuestionSlider from "../components/QuestionSlider";
import { physicsChapter1 } from "../data/physicsData";
import {
  ArrowLeft,
  Atom,
  Filter,
  Play,
  Hash,
  ChevronRight,
  BookOpen,
} from "lucide-react";

const diffColors = {
  All:    { active: "bg-indigo-600 text-white",  inactive: "bg-gray-100 text-gray-600" },
  Easy:   { active: "bg-emerald-600 text-white", inactive: "bg-emerald-50 text-emerald-700" },
  Medium: { active: "bg-amber-600 text-white",   inactive: "bg-amber-50 text-amber-700" },
  Hard:   { active: "bg-red-600 text-white",     inactive: "bg-red-50 text-red-700" },
};

const ChapterPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const chapter = physicsChapter1;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerQuestions, setDrawerQuestions] = useState([]);
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  // All questions flat
  const allQuestions = useMemo(() =>
    chapter.sections.flatMap((s) => s.questions), [chapter]);

  // Unique years
  const years = useMemo(() => {
    const ySet = new Set(allQuestions.map((q) => q.year));
    return ["All", ...Array.from(ySet).sort().reverse()];
  }, [allQuestions]);

  const difficulties = ["All", "Easy", "Medium", "Hard"];

  // Filter helper
  const applyFilters = (questions) =>
    questions.filter((q) => {
      const yearMatch = selectedYear === "All" || q.year === selectedYear;
      const diffMatch = selectedDifficulty === "All" || q.difficulty === selectedDifficulty;
      return yearMatch && diffMatch;
    });

  // Sections with filtered questions
  const filteredSections = useMemo(() =>
    chapter.sections
      .map((s) => ({ ...s, filteredQuestions: applyFilters(s.questions) }))
      .filter((s) => s.filteredQuestions.length > 0),
    [chapter, selectedYear, selectedDifficulty]
  );

  const totalFiltered = useMemo(() =>
    filteredSections.reduce((sum, s) => sum + s.filteredQuestions.length, 0),
    [filteredSections]
  );

  const openDrawer = (questions) => {
    if (questions.length > 0) {
      setDrawerQuestions(questions);
      setDrawerOpen(true);
    }
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
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-lg font-bold text-white">{chapter.total_questions}</p>
                  <p className="text-[9px] text-indigo-200 uppercase">Total</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-white">{totalFiltered}</p>
                  <p className="text-[9px] text-indigo-200 uppercase">Filtered</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Difficulty Filter */}
        <div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <Filter size={13} className="text-gray-400" />
            <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Difficulty</span>
          </div>
          <div className="flex gap-2">
            {difficulties.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDifficulty(d)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 active:scale-95 ${
                  selectedDifficulty === d
                    ? diffColors[d].active + " shadow-sm"
                    : diffColors[d].inactive + " hover:opacity-80"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Year Filter */}
        <div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <Hash size={13} className="text-gray-400" />
            <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Year</span>
          </div>
          <ScrollArea className="w-full">
            <div className="flex gap-2 pb-1">
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setSelectedYear(y)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 active:scale-95 ${
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

        {/* Practice All Button */}
        {totalFiltered > 0 && (
          <button
            onClick={() => openDrawer(applyFilters(allQuestions))}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 active:scale-[0.98] transition-all duration-200 shadow-sm"
          >
            <Play size={15} fill="white" />
            Practice All ({totalFiltered} Questions)
          </button>
        )}

        {/* Topic-wise Sections */}
        <div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <BookOpen size={13} className="text-gray-400" />
            <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Topics</span>
          </div>

          {filteredSections.length > 0 ? (
            <div className="space-y-2">
              {filteredSections.map((section, idx) => {
                const counts = { Easy: 0, Medium: 0, Hard: 0 };
                section.filteredQuestions.forEach((q) => { counts[q.difficulty] = (counts[q.difficulty] || 0) + 1; });
                return (
                  <Card
                    key={idx}
                    className="border-0 shadow-sm overflow-hidden cursor-pointer hover:shadow-md active:scale-[0.98] transition-all duration-200"
                    onClick={() => openDrawer(section.filteredQuestions)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        {/* Topic number bubble */}
                        <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-indigo-600">{idx + 1}</span>
                        </div>

                        {/* Topic info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-800 leading-tight">{section.topic}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[11px] text-gray-400">
                              {section.filteredQuestions.length} question{section.filteredQuestions.length !== 1 ? "s" : ""}
                            </span>
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
                          </div>
                        </div>

                        {/* Arrow */}
                        <ChevronRight size={16} className="text-gray-300 flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-gray-400">No questions match your filters</p>
              <button
                onClick={() => { setSelectedYear("All"); setSelectedDifficulty("All"); }}
                className="mt-2 text-xs text-indigo-600 font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Question Drawer */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="max-h-[90vh] h-[90vh]">
          <DrawerHeader className="sr-only">
            <DrawerTitle>Practice Questions</DrawerTitle>
            <DrawerDescription>Solve physics questions one by one</DrawerDescription>
          </DrawerHeader>
          <QuestionSlider
            questions={drawerQuestions}
            onClose={() => setDrawerOpen(false)}
          />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ChapterPage;
