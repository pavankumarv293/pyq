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
} from "lucide-react";

const ChapterPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const chapter = physicsChapter1;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  // Gather all questions flat
  const allQuestions = useMemo(() => {
    return chapter.sections.flatMap((s) => s.questions);
  }, [chapter]);

  // Unique years
  const years = useMemo(() => {
    const ySet = new Set(allQuestions.map((q) => q.year));
    return ["All", ...Array.from(ySet).sort().reverse()];
  }, [allQuestions]);

  // Difficulty levels
  const difficulties = ["All", "Easy", "Medium", "Hard"];

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      const yearMatch = selectedYear === "All" || q.year === selectedYear;
      const diffMatch = selectedDifficulty === "All" || q.difficulty === selectedDifficulty;
      return yearMatch && diffMatch;
    });
  }, [allQuestions, selectedYear, selectedDifficulty]);

  const diffCounts = useMemo(() => {
    const counts = { All: allQuestions.length, Easy: 0, Medium: 0, Hard: 0 };
    allQuestions.forEach((q) => {
      counts[q.difficulty] = (counts[q.difficulty] || 0) + 1;
    });
    return counts;
  }, [allQuestions]);

  const diffColors = {
    All: { active: "bg-indigo-600 text-white", inactive: "bg-gray-100 text-gray-600" },
    Easy: { active: "bg-emerald-600 text-white", inactive: "bg-emerald-50 text-emerald-700" },
    Medium: { active: "bg-amber-600 text-white", inactive: "bg-amber-50 text-amber-700" },
    Hard: { active: "bg-red-600 text-white", inactive: "bg-red-50 text-red-700" },
  };

  const handleStartPractice = () => {
    if (filteredQuestions.length > 0) {
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
                  <p className="text-lg font-bold text-white">{filteredQuestions.length}</p>
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
                <span className="ml-1 opacity-70">({diffCounts[d] || 0})</span>
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

        {/* Filtered Questions Preview */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardContent className="p-4">
            {filteredQuestions.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-gray-800">
                    {filteredQuestions.length} Question{filteredQuestions.length !== 1 ? "s" : ""} Found
                  </p>
                  <div className="flex gap-1.5">
                    {["Easy", "Medium", "Hard"].map((d) => {
                      const count = filteredQuestions.filter((q) => q.difficulty === d).length;
                      if (count === 0) return null;
                      const color = d === "Easy" ? "bg-emerald-500" : d === "Medium" ? "bg-amber-500" : "bg-red-500";
                      return (
                        <div key={d} className="flex items-center gap-1">
                          <div className={`w-1.5 h-1.5 rounded-full ${color}`} />
                          <span className="text-[10px] text-gray-400">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Question previews - show first 5 */}
                <div className="space-y-2 mb-3">
                  {filteredQuestions.slice(0, 5).map((q, i) => {
                    const dc = diffColors[q.difficulty];
                    return (
                      <div
                        key={q.question_no}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={handleStartPractice}
                      >
                        <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded mt-0.5 flex-shrink-0">
                          Q{q.question_no}
                        </span>
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 flex-1">
                          {q.question}
                        </p>
                        <Badge className={`text-[8px] px-1.5 py-0 ${diffColors[q.difficulty].inactive} border-0 flex-shrink-0 mt-0.5`}>
                          {q.difficulty}
                        </Badge>
                      </div>
                    );
                  })}
                  {filteredQuestions.length > 5 && (
                    <p className="text-[11px] text-gray-400 text-center pt-1">
                      +{filteredQuestions.length - 5} more questions
                    </p>
                  )}
                </div>

                {/* Start Practice Button */}
                <button
                  onClick={handleStartPractice}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 active:scale-[0.98] transition-all duration-200 shadow-sm"
                >
                  <Play size={15} fill="white" />
                  Start Practice ({filteredQuestions.length} Qs)
                </button>
              </>
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
          </CardContent>
        </Card>
      </div>

      {/* Question Drawer */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="max-h-[90vh] h-[90vh]">
          <DrawerHeader className="sr-only">
            <DrawerTitle>Practice Questions</DrawerTitle>
            <DrawerDescription>Solve physics questions one by one</DrawerDescription>
          </DrawerHeader>
          <QuestionSlider
            questions={filteredQuestions}
            onClose={() => setDrawerOpen(false)}
          />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ChapterPage;
