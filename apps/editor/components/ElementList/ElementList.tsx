import { useContext, useEffect, useState } from "react";
import VideoUpload from "./components/VideoUpload";
import { EditorContext } from "../../context/EditorContext";
import { Video } from "@video-editor/core/elements/Video";

const ElementList = () => {
  const editor = useContext(EditorContext);
  const [elementList, setElementList] = useState<Video[]>(
    editor?.videoProcess.videos || [],
  );

  useEffect(() => {
    editor?.videoProcess.on("onVideoProcessFinish", ({ video }) => {
      setElementList((prev) => [...prev, video]);
    });
  }, [editor]);

  return (
    <div className="h-full w-full">
      <div className="grid h-full w-full grid-cols-4 grid-rows-2 gap-4 p-4">
        {elementList?.map((video) => (
          <div
            key={video.name + Math.random()}
            className="aspect-square rounded-lg bg-gray-100 text-xs"
          >
            {`${video.name} ${video.duration}s ${video.frameRate}fps ${video.width}x${video.height}`}
          </div>
        ))}
        <div className="aspect-square rounded-lg bg-gray-100">
          <VideoUpload
            onChange={(file) => {
              editor?.resourceManager.addVideo(file);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ElementList;
