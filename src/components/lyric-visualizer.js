import React, { useState, useEffect, useRef } from "react";
import { lyrics } from "../lyrics/lyrics";

function LyricVisualizer({audioContext, ellipseRadius}) {

  const [currentLyric, setCurrentLyric] = useState(0)

  useEffect(() => {

    const lyric = findLyricByTime(audioContext?.currentTime?.toFixed(2))
    setCurrentLyric(lyric)
  }, [audioContext?.currentTime]);


  return (
    <>
      <div className="w-full my-6 text-center">
      {audioContext?.currentTime?.toFixed(2)}
      <p className={`text-3xl ${ellipseRadius<94?'text-black':'text-purple-800'} transition transiation-all duration-200`}>
        {currentLyric}
      </p>
      </div>
    </>
  );
}

export default LyricVisualizer;

function findLyricByTime(time) {
  time = Number(time)
  const arr = lyrics

  for (var i = 0; i < arr.length; i++) {
    var lyricObj = arr[i];
    if (time< lyricObj.timing?.end && time>lyricObj?.timing?.start) {
      return lyricObj.lyric;
    }
  }

}