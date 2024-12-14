import { create } from "zustand";
import type { Video } from "@video-editor/core/elements/Video";
import {
  StateManager,
  type EditorState,
} from "@video-editor/core/StateManager";

interface EditorActions {
  setVideos: (videos: Video[]) => void;
}

export const useEditorStore = (stateManager: StateManager) =>
  create<EditorState & EditorActions>((set) => ({
    videos: stateManager.state.videos,
    files: stateManager.state.files,
    setVideos: (videos) => {},
  }));
