import { BaseElement } from "./elements/BaseElement.ts";
import { Track } from "./elements/Track.ts";
import { Video } from "./elements/Video.ts";
import { TimelineProcess } from "./interfaces/TimelineProcess.ts";

export interface State {
  /**@description 当前激活的视频Id */
  activeVideoId: string;

  /**@description 视频列表 */
  videos: Video[];

  /**@description 文件名列表 */
  filesName: string[];

  /**@description 正在渲染的视频Id列表 */
  renderingVideoIds: string[];

  /**@description 单位时间(毫秒) */
  unitTime: number;

  /**@description 单位时间像素长度 */
  unitPixelOfTime: number;

  /**@description 轨道列表 */
  tracks: Track<BaseElement & TimelineProcess>[];
}

export abstract class EditorState {
  abstract setState(data: Partial<State>): void;
  abstract getState(): State;

  public getVideos() {
    return this.getState().videos;
  }

  public setVideos(videos: Video[]) {
    this.setState({
      videos,
    });
  }

  public setActiveVideoId(id: string) {
    this.setState({
      activeVideoId: id,
    });
  }

  public getActiveVideoId() {
    return this.getState().activeVideoId;
  }

  public getActiveVideo() {
    return this.getState().videos.find(
      (video) => video.id === this.getState().activeVideoId,
    );
  }

  public getUnitTime() {
    return this.getState().unitTime;
  }

  public setUnitTime(time: number) {
    this.setState({
      unitTime: time,
    });
  }

  public getUnitPixelOfTime() {
    return this.getState().unitPixelOfTime;
  }

  public setUnitPixelOfTime(pixel: number) {
    this.setState({
      unitPixelOfTime: pixel,
    });
  }

  public getTracks() {
    return this.getState().tracks;
  }

  public setTracks(tracks: Track<BaseElement & TimelineProcess>[]) {
    this.setState({
      tracks,
    });
  }

  public getRenderingList() {
    return this.getState().renderingVideoIds;
  }
}
