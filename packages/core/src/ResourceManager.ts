import type { Editor } from "./Editor.js";
import { EventEmitter } from "./interfaces/EventEmitter.js";

export type ResourceManagerEvents = {
  onVideoUpload: (payload: { file: File }) => void;
};

type Files = {
  videos: File[];
  images: File[];
  audios: File[];
};

class ResourceManager extends EventEmitter<ResourceManagerEvents> {
  files: Files = {
    videos: [],
    images: [],
    audios: [],
  };
  editor: Editor;

  constructor(editor: Editor) {
    super();
    this.editor = editor;
  }

  addVideo(video: File) {
    this.files.videos.push(video);

    this.emit("onVideoUpload", { file: video });
  }
}

export { ResourceManager };
