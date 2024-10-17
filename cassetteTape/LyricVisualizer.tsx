import { useState, useEffect } from "react";
import { forkThisLyric } from "@/data/forkThisLyric";
import { permanentMarker } from "@/utils/fonts";

interface LyricVisualizerProps {
  currentTime: number;
  ellipseRadius: number;
  duration: number;
}

interface Lyric {
  start: number;
  end: number;
  lyric: string;
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

export const LyricVisualizer: React.FC<LyricVisualizerProps> = ({
  currentTime,
  ellipseRadius,
  duration,
}) => {
  const [currentLyric, setCurrentLyric] = useState<string>("");

  useEffect(() => {
    const lyric = findLyricByTime(currentTime, duration);
    setCurrentLyric(lyric);
  }, [currentTime, duration]);

  return (
    <div
      className={`w-full my-6 text-center text-black ${permanentMarker.className}`}
    >
      <p>{formatTime(currentTime)}</p>
      <p
        className={`text-3xl ${
          ellipseRadius < 94 ? "text-white" : "text-[--accent]"
        } transition transition-all duration-200 bg-red-100`}
      >
        {currentLyric || "Hit that play button and let's go!"}
      </p>
    </div>
  );
};

export default LyricVisualizer;

function findLyricByTime(currentTime: number, duration: number): string {
  const lyricsWithEndTime: Lyric[] = forkThisLyric.map((item, i) => {
    if (i <= forkThisLyric.length - 2) {
      return {
        start: item.start,
        end: forkThisLyric[i + 1].start,
        lyric: item.lyric,
      };
    } else {
      // last lyric item stays until song's end
      return {
        start: item.start,
        end: duration,
        lyric: item.lyric,
      };
    }
  });

  currentTime = Number(currentTime);

  for (let i = 0; i < lyricsWithEndTime.length; i++) {
    const lyricObj = lyricsWithEndTime[i];

    if (currentTime < lyricObj.end && currentTime > lyricObj.start) {
      return lyricObj.lyric;
    }
  }

  return "";
}
