import React, { useState, useEffect } from "react";
import { lyrics } from "../lyrics/lyrics";

function LyricVisualizer({ currentTime, ellipseRadius, duration }) {
  const [currentLyric, setCurrentLyric] = useState(0);

  useEffect(() => {
    const lyric = findLyricByTime(currentTime, duration);
    setCurrentLyric(lyric);
  }, [currentTime]);

  return (
    <div className="w-full my-6 text-center">
      {currentTime ? currentTime.toFixed(2) : "0"} sec
      <p
        className={`text-3xl ${
          ellipseRadius < 94 ? "text-black" : "text-purple-800"
        } transition transiation-all duration-200`}
      >
        {currentLyric}
      </p>
    </div>
  );
}

export default LyricVisualizer;

function findLyricByTime(currentTime, duration) {
  const lyricsWithEndTime = lyrics.map((item, i) => {
    if (i <= lyrics.length - 2) {
      return {
        start: item.start,
        end: lyrics[i + 1].start,
        lyric: item.lyric,
      };
    } else {
      // last lyric item stays until songs end
      return {
        start: item.start,
        end: duration,
        lyric: item.lyric,
      };
    }
  });

  currentTime = Number(currentTime);

  for (var i = 0; i < lyrics.length; i++) {
    const lyricObj = lyricsWithEndTime[i];

    if (currentTime < lyricObj?.end && currentTime > lyricObj?.start) {
      return lyricObj.lyric;
    }
  }
}
