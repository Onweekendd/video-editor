import { useContext } from "react";
import VideoUpload from "./components/VideoUpload";
import { EditorContext } from "../index";
import Image from "next/image";

const ElementList = () => {
  const editor = useContext(EditorContext);

  const onUpload = (file: File) => {
    editor?.resourceManager.addVideo({
      video: file,
    });
  };

  return (
    <div className="h-full w-full">
      <div className="grid h-full w-full grid-cols-4 grid-rows-2 gap-4 p-4">
        {editor?.state.getVideos().map((video) => (
          <div
            key={video.name + Math.random()}
            className="aspect-square rounded-lg bg-gray-100 text-xs"
          >
            {video.id.includes("placeholder") ? (
              <div className="flex h-full w-full items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-sky-500" />
              </div>
            ) : (
              <Image
                className="!relative h-full w-full rounded-md border-2 border-transparent object-cover hover:border-sky-500"
                src={video.cover}
                alt={video.name}
                fill
              />
            )}
          </div>
        ))}
        <div className="aspect-square rounded-lg bg-gray-100">
          <VideoUpload onChange={onUpload} />
        </div>
      </div>
    </div>
  );
};

export default ElementList;
