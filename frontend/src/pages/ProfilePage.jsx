import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  ChevronRight,
  Mail,
  GraduationCap,
  Target,
  Edit3,
  ArrowLeft,
  Save,
  MapPin,
  Building2,
  X,
} from "lucide-react";
import { userProfile as initialProfile, dailyGoals } from "../data/mockData";

const ProfilePage = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...initialProfile });

  const maxHours = Math.max(...dailyGoals.map((d) => d.hours), 1);

  const handleSave = () => {
    setProfile({ ...editForm });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({ ...profile });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="min-h-screen bg-gray-50 pb-24">
        {/* Header */}
        <div className="bg-white sticky top-0 z-40 border-b border-gray-100">
          <div className="max-w-lg mx-auto px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handleCancel}
                className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft size={16} className="text-gray-600" />
              </button>
              <h1 className="text-xl font-bold text-gray-900 tracking-tight">Edit Profile</h1>
            </div>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors"
            >
              <Save size={12} />
              Save
            </button>
          </div>
        </div>

        <div className="max-w-lg mx-auto px-5 pt-5 space-y-5">
          {/* Academic Info */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3 pt-4 px-4">
              <CardTitle className="text-base font-semibold text-gray-900">Academic Info</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 space-y-4">
              <div className="space-y-1.5">
                <Label className="text-xs text-gray-500 font-medium">Full Name</Label>
                <Input
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="h-10 text-sm bg-gray-50 border-gray-200 focus:bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs text-gray-500 font-medium">Stream</Label>
                <Select
                  value={editForm.stream}
                  onValueChange={(val) => setEditForm({ ...editForm, stream: val })}
                >
                  <SelectTrigger className="h-10 text-sm bg-gray-50 border-gray-200">
                    <SelectValue placeholder="Select stream" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Medical">Medical</SelectItem>
                    <SelectItem value="Both">Both</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs text-gray-500 font-medium">Class</Label>
                <div className="grid grid-cols-4 gap-2">
                  {["11th", "12th", "1st PU", "2nd PU"].map((cls) => (
                    <button
                      key={cls}
                      onClick={() => setEditForm({ ...editForm, class: cls })}
                      className={`py-2 px-3 rounded-lg text-xs font-medium transition-all duration-200 ${
                        editForm.class === cls
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs text-gray-500 font-medium">Target Year</Label>
                <Input
                  type="number"
                  value={editForm.targetYear}
                  onChange={(e) =>
                    setEditForm({ ...editForm, targetYear: parseInt(e.target.value) || 2027 })
                  }
                  className="h-10 text-sm bg-gray-50 border-gray-200 focus:bg-white"
                  placeholder="2027"
                />
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3 pt-4 px-4">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-500" />
                <CardTitle className="text-base font-semibold text-gray-900">Location</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4 space-y-4">
              <div className="space-y-1.5">
                <Label className="text-xs text-gray-500 font-medium">Country</Label>
                <Input
                  value={editForm.location.country}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      location: { ...editForm.location, country: e.target.value },
                    })
                  }
                  className="h-10 text-sm bg-gray-50 border-gray-200 focus:bg-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs text-gray-500 font-medium">City</Label>
                  <Input
                    value={editForm.location.city}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        location: { ...editForm.location, city: e.target.value },
                      })
                    }
                    className="h-10 text-sm bg-gray-50 border-gray-200 focus:bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs text-gray-500 font-medium">Pincode</Label>
                  <Input
                    value={editForm.location.pincode}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        location: { ...editForm.location, pincode: e.target.value },
                      })
                    }
                    className="h-10 text-sm bg-gray-50 border-gray-200 focus:bg-white"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Coaching Institute */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3 pt-4 px-4">
              <div className="flex items-center gap-2">
                <Building2 size={16} className="text-gray-500" />
                <CardTitle className="text-base font-semibold text-gray-900">Coaching Institute</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="space-y-1.5">
                <Label className="text-xs text-gray-400 font-medium">(optional)</Label>
                <Input
                  value={editForm.coachingInstitute}
                  onChange={(e) =>
                    setEditForm({ ...editForm, coachingInstitute: e.target.value })
                  }
                  className="h-10 text-sm bg-gray-50 border-gray-200 focus:bg-white"
                  placeholder="Enter coaching institute name"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-lg mx-auto px-5 py-4">
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">My Profile</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-5 pt-5 space-y-4">
        {/* Profile Card */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">{profile.avatar}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-bold text-gray-900">{profile.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-indigo-50 text-indigo-700 border-0">
                    Class {profile.class}
                  </Badge>
                  <span className="text-[10px] text-gray-400">·</span>
                  <span className="text-[11px] text-gray-500">Target Year {profile.targetYear}</span>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 text-xs font-medium hover:bg-gray-100 transition-colors"
              >
                EDIT
                <ChevronRight size={12} />
              </button>
            </div>

            <Separator className="my-3" />

            <div className="flex items-center gap-2">
              <Mail size={14} className="text-gray-400" />
              <span className="text-sm text-gray-600">{profile.email}</span>
            </div>
          </CardContent>
        </Card>

        {/* Daily Goal */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardHeader className="pb-3 pt-4 px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Target size={16} className="text-amber-600" />
                </div>
                <CardTitle className="text-base font-semibold text-gray-900">Your Daily Goal</CardTitle>
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-1 ml-10">
              Tracks how many practice questions you solve each day
            </p>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="flex items-end justify-between gap-2 h-32">
              {dailyGoals.map((goal, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5 flex-1">
                  <div className="relative w-full flex justify-center">
                    {goal.hours > 0 && (
                      <span className="text-[10px] font-semibold text-gray-500 mb-1">
                        {goal.hours.toString().padStart(2, "0")}h
                      </span>
                    )}
                  </div>
                  <div
                    className="w-full max-w-[36px] rounded-lg transition-all duration-500"
                    style={{
                      height: goal.hours > 0 ? `${(goal.hours / maxHours) * 80}px` : "4px",
                      backgroundColor: goal.hours > 0 ? "#4F46E5" : "#E5E7EB",
                      opacity: goal.hours > 0 ? 0.8 + (goal.hours / maxHours) * 0.2 : 1,
                    }}
                  />
                  <span className="text-[10px] text-gray-400 font-medium">{goal.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Info */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-3">
                <GraduationCap size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">Stream</span>
              </div>
              <span className="text-sm font-medium text-gray-900">{profile.stream}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">Location</span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                {profile.location.city}, {profile.location.country}
              </span>
            </div>
            {profile.coachingInstitute && (
              <>
                <Separator />
                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-3">
                    <Building2 size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">Coaching</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{profile.coachingInstitute}</span>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
