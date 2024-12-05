import { CommandManager } from "./CommandManager.js";
import { ResourceManager } from "./ResourceManager.js";
import { TimeManager } from "./TimeManager.js";

class Editor {
  canvas: HTMLCanvasElement;
  resourceManager: ResourceManager;
  timeManager: TimeManager;
  commandManager: CommandManager;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    this.resourceManager = new ResourceManager();
    this.timeManager = new TimeManager();
    this.commandManager = new CommandManager();
  }
}

export { Editor };
