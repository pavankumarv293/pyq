import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ChevronRight, BookOpen, Lock, ArrowRight } from "lucide-react";
import { examsList } from "../data/mockData";

const ExamsPage = () => {
  const navigate = useNavigate();

  const handleExamClick = (exam) => {
    if (exam.status === "available") {
      navigate(`/exams/${exam.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-lg mx-auto px-5 py-4">
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Exams Made Easier</h1>
          <p className="text-xs text-gray-500 mt-0.5">Select an exam to explore resources</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-5 pt-5 space-y-3">
        {examsList.map((exam, index) => (
          <Card
            key={exam.id}
            className={`border-0 shadow-sm overflow-hidden transition-all duration-300 ${
              exam.status === "available"
                ? "cursor-pointer hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
                : "opacity-75"
            }`}
            onClick={() => handleExamClick(exam)}
          >
            <CardContent className="p-0">
              <div className="flex items-center gap-4 p-4">
                {/* Color indicator */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${exam.color}15` }}
                >
                  <BookOpen size={20} style={{ color: exam.color }} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-gray-900 truncate">
                      {exam.name}
                    </h3>
                    {exam.status === "coming_soon" && (
                      <Badge
                        variant="secondary"
                        className="text-[10px] px-2 py-0.5 bg-amber-50 text-amber-700 border-0 whitespace-nowrap"
                      >
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{exam.description}</p>
                </div>

                {/* Action */}
                <div className="flex-shrink-0">
                  {exam.status === "available" ? (
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                      <ArrowRight size={14} className="text-indigo-600" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <Lock size={14} className="text-gray-400" />
                    </div>
                  )}
                </div>
              </div>

              {/* Progress bar for available exams */}
              {exam.status === "available" && (
                <div className="px-4 pb-3">
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: "35%", backgroundColor: exam.color }}
                    />
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">35% syllabus covered</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}

        {/* Info Card */}
        <Card className="border-0 shadow-sm bg-indigo-50 mt-6">
          <CardContent className="p-4">
            <p className="text-xs text-indigo-700 leading-relaxed">
              More exams and resources are being added regularly. Stay tuned for updates on PUC Board, KCET, JEE Advanced, and NEET sections.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExamsPage;
