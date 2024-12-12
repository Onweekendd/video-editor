import { create } from "zustand";

interface EditorState {
  videos: File[];
}

interface EditorActions {
  setVideos: (videos: File[]) => void;
}

export const useEditorStore = create<EditorState & EditorActions>()((set) => ({
  videos: [],
  setVideos: (videos) => set({ videos }),
}));
