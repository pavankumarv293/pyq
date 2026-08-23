import { useState } from "react";

const STORAGE_KEY = "phys_edits_v1";

export const useQuestionEdits = () => {
  const [edits, setEdits] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  });

  const saveEdit = (uid, patch) => {
    const next = { ...edits, [uid]: patch };
    setEdits(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const resetEdit = (uid) => {
    const next = { ...edits };
    delete next[uid];
    setEdits(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  return { edits, saveEdit, resetEdit };
};
