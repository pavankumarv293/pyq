import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Badge } from "../components/ui/badge";
import { Calendar } from "../components/ui/calendar";
import { ScrollArea } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";
import { Clock, CalendarDays, ListTodo, Bell, ChevronRight, Flame, TrendingUp } from "lucide-react";
import { examCountdown, todoItems as initialTodos, updateTabs, updateNews } from "../data/mockData";

const HomePage = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("jee");

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const completedCount = todos.filter((t) => t.completed).length;

  const formatDate = (date) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()} – ${days[date.getDay()]}`;
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "important": return "bg-red-50 text-red-700 border-red-200";
      case "update": return "bg-blue-50 text-blue-700 border-blue-200";
      case "info": return "bg-gray-50 text-gray-600 border-gray-200";
      default: return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-lg mx-auto px-5 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Student Updates</h1>
            <p className="text-xs text-gray-500 mt-0.5">Stay on track with your exam prep</p>
          </div>
          <button className="relative p-2 rounded-full hover:bg-gray-50 transition-colors">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-5 pt-5 space-y-5">
        {/* Exam Countdown Section */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardHeader className="pb-3 pt-4 px-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                <Clock size={16} className="text-indigo-600" />
              </div>
              <CardTitle className="text-base font-semibold text-gray-900">Exam Countdown</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="space-y-2">
              {examCountdown.map((exam) => (
                <div
                  key={exam.id}
                  className="flex items-center justify-between py-3 px-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-8 rounded-full"
                      style={{ backgroundColor: exam.color }}
                    />
                    <span className="text-sm font-medium text-gray-800">{exam.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold" style={{ color: exam.color }}>
                      {exam.daysLeft} days
                    </span>
                    <ChevronRight size={14} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notepad & Planner */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardHeader className="pb-3 pt-4 px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <ListTodo size={16} className="text-emerald-600" />
                </div>
                <div>
                  <CardTitle className="text-base font-semibold text-gray-900">Notepad & Planner</CardTitle>
                  <p className="text-[11px] text-gray-400 mt-0.5">Checkbox – works like a to-do list</p>
                </div>
              </div>
              <Badge variant="secondary" className="text-xs font-medium bg-emerald-50 text-emerald-700 border-0">
                {completedCount}/{todos.length}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <p className="text-xs text-gray-500 font-medium mb-3 bg-gray-50 rounded-lg px-3 py-2">
              <CalendarDays size={12} className="inline mr-1.5 text-gray-400" />
              {formatDate(selectedDate)}
            </p>
            <div className="space-y-1.5">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className={`flex items-start gap-3 py-2.5 px-3 rounded-lg transition-all duration-200 cursor-pointer ${
                    todo.completed ? "bg-emerald-50/50" : "hover:bg-gray-50"
                  }`}
                  onClick={() => toggleTodo(todo.id)}
                >
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo.id)}
                    className="mt-0.5 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                  />
                  <span
                    className={`text-sm leading-relaxed ${
                      todo.completed
                        ? "text-gray-400 line-through"
                        : "text-gray-700"
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Calendar */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-4 px-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                <CalendarDays size={16} className="text-amber-600" />
              </div>
              <CardTitle className="text-base font-semibold text-gray-900">Calendar</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-2 pb-3 flex justify-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => date && setSelectedDate(date)}
              className="rounded-lg"
            />
          </CardContent>
        </Card>

        {/* Update Tabs */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardHeader className="pb-3 pt-4 px-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <TrendingUp size={16} className="text-blue-600" />
              </div>
              <CardTitle className="text-base font-semibold text-gray-900">Updates</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            {/* Tab buttons */}
            <ScrollArea className="w-full">
              <div className="flex gap-2 pb-3">
                {updateTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </ScrollArea>

            {/* News items */}
            <div className="space-y-2.5 mt-1">
              {updateNews[activeTab]?.map((news) => (
                <div
                  key={news.id}
                  className={`p-3 rounded-xl border transition-all duration-200 hover:shadow-sm cursor-pointer ${getTypeColor(news.type)}`}
                >
                  <p className="text-sm font-medium leading-snug">{news.title}</p>
                  <p className="text-[11px] mt-1.5 opacity-70">{news.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
