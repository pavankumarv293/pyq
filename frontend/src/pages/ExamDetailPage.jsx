import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Separator } from "../components/ui/separator";
import {
  ArrowLeft,
  FileText,
  CalendarDays,
  Trophy,
  BookOpen,
  Atom,
  FlaskConical,
  Calculator,
  FileQuestion,
  ClipboardList,
  Download,
  ChevronRight,
  BarChart3,
} from "lucide-react";
import { jeeMainsDetail, syllabusData } from "../data/mockData";

const ExamDetailPage = () => {
  const navigate = useNavigate();
  const [expandedSubject, setExpandedSubject] = useState(null);
  const exam = jeeMainsDetail;

  const subjectIcons = {
    physics: Atom,
    chemistry: FlaskConical,
    maths: Calculator,
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-lg mx-auto px-5 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate("/exams")}
            className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={16} className="text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">{exam.name}</h1>
            <p className="text-xs text-gray-500 mt-0.5">Conducted by {exam.conductedBy}</p>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-5 pt-5 space-y-4">
        {/* Exam Importance PDF */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                <FileText size={18} className="text-red-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900">{exam.importance.title}</h3>
                <p className="text-[11px] text-gray-400 mt-0.5">{exam.importance.size}</p>
              </div>
              <button className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center hover:bg-indigo-100 transition-colors">
                <Download size={14} className="text-indigo-600" />
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Date & Time */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <CalendarDays size={18} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900">Exam Conducted Date & Time</h3>
                <p className="text-xs text-gray-500 mt-0.5">{exam.dateTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Admission Cutoff */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-4 px-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                <Trophy size={16} className="text-amber-600" />
              </div>
              <CardTitle className="text-base font-semibold text-gray-900">Admission Cutoff</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(exam.admissionCutoff).map(([key, value]) => (
                <div key={key} className="bg-gray-50 rounded-xl p-3">
                  <p className="text-[10px] text-gray-400 uppercase font-medium tracking-wide">
                    {key.replace("_", "/")}
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Syllabus & Analytics */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-4 px-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                <BarChart3 size={16} className="text-indigo-600" />
              </div>
              <CardTitle className="text-base font-semibold text-gray-900">Syllabus & Analytics</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-4 pb-4 space-y-2">
            {exam.subjects.map((subject) => {
              const Icon = subjectIcons[subject.id];
              const isExpanded = expandedSubject === subject.id;
              return (
                <div key={subject.id}>
                  <button
                    onClick={() => setExpandedSubject(isExpanded ? null : subject.id)}
                    className="w-full flex items-center justify-between py-3 px-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${subject.color}15` }}
                      >
                        <Icon size={16} style={{ color: subject.color }} />
                      </div>
                      <div className="text-left">
                        <span className="text-sm font-medium text-gray-800">{subject.name}</span>
                        <p className="text-[10px] text-gray-400">{subject.chapters} chapters · {subject.totalQuestions} questions · {subject.marks} marks</p>
                      </div>
                    </div>
                    <ChevronRight
                      size={14}
                      className={`text-gray-400 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                    />
                  </button>

                  {/* Expanded syllabus */}
                  {isExpanded && syllabusData[subject.id] && (
                    <div className="mt-2 ml-4 mr-2 space-y-2.5 animate-in slide-in-from-top-2 duration-200">
                      {syllabusData[subject.id].map((chapter, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">{chapter.chapter}</span>
                            <span className="text-[10px] text-gray-400">{chapter.completed}%</span>
                          </div>
                          <Progress value={chapter.completed} className="h-1.5" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* PYQs */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                <FileQuestion size={18} className="text-purple-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900">PYQ's (Previous Year Questions)</h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  {exam.pyqs.totalPapers} papers · {exam.pyqs.years[0]} to {exam.pyqs.years[exam.pyqs.years.length - 1]}
                </p>
              </div>
              <ChevronRight size={14} className="text-gray-300" />
            </div>
            <div className="flex gap-2 mt-3 flex-wrap">
              {exam.pyqs.years.map((year) => (
                <Badge
                  key={year}
                  variant="secondary"
                  className="text-xs px-3 py-1 bg-purple-50 text-purple-700 border-0 cursor-pointer hover:bg-purple-100 transition-colors"
                >
                  {year}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Full Paper Test */}
        <Card className="border-0 shadow-sm overflow-hidden bg-indigo-600">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <ClipboardList size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white">Full Paper Test</h3>
                <p className="text-xs text-indigo-200 mt-0.5">
                  {exam.fullPaperTest.totalTests} tests · {exam.fullPaperTest.duration} · {exam.fullPaperTest.totalMarks} marks
                </p>
              </div>
              <button className="px-4 py-2 rounded-full bg-white text-indigo-600 text-xs font-semibold hover:bg-indigo-50 transition-colors">
                Start
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExamDetailPage;
