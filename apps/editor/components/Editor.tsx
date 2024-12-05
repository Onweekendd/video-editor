"use client";

import { useEffect, useRef } from "react";
import { Editor as EditorClass } from "@video-editor/core";

const Editor = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const editor = useRef<EditorClass | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            editor.current = new EditorClass(canvasRef.current);
            console.log(editor.current);
        }
    }, []);

    return <canvas id="canvas" ref={canvasRef} />;
};

export default Editor;

