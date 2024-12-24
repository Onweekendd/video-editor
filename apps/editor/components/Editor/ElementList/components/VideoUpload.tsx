import { FC } from "react";

interface VideoUploadProps {
  onChange: (file: File) => void;
}

const VideoUpload: FC<VideoUploadProps> = ({ onChange }) => {
  return (
    <div className="rounded-md bg-sky-500 px-2 py-1 text-white transition-colors hover:bg-sky-600">
      <input
        type="file"
        accept="video/*"
        className="hidden"
        id="video-upload"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            // 处理视频文件
            onChange(file);
          }
        }}
      />
      <label
        htmlFor="video-upload"
        className="flex cursor-pointer items-center justify-center"
      >
        <span className="text-nowrap text-xs font-semibold">上传视频</span>
      </label>
    </div>
  );
};

export default VideoUpload;
