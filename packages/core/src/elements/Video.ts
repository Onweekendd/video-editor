import type { TimelineProcess } from "../interfaces/TimelineProcess.js";
import type { CanvasRender } from "../interfaces/CanvasRender.js";
import type { BaseTransform } from "../interfaces/BaseTransform.js";
import type { BaseElement } from "./BaseElement.js";
class Video
  implements BaseElement, TimelineProcess, CanvasRender, BaseTransform
{
  file: File;
  name: string;
  fileSize: number;
  fileType: string;
  createTime: Date;

  constructor(file: File) {
    this.file = file;
    this.name = file.name;
    this.fileSize = file.size;
    this.fileType = file.type;
    this.createTime = new Date();
  }

  onSplit = () => {
    console.log("onSplit");
  };

  onMerge = () => {
    console.log("onMerge");
  };
  onRender = () => {
    console.log("onRender");
  };

  onTranslate = (x: number, y: number, z: number) => {
    console.log("onTranslate");
  };
  onRotate = (x: number, y: number, z: number) => {
    console.log("onRotate");
  };
  onScale = (x: number, y: number, z: number) => {
    console.log("onScale");
  };
}

export { Video };
