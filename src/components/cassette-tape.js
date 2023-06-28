import React, { useState, useEffect, useRef } from "react";
import song from "../audio/Miuki_Miu-Fork_This_(Penpot).mp3";
import instrumental from "../audio/Miuki_Miu-Fork_This-Instrumental_(Penpot).mp3";
import karaoke from "../audio/Miuki_Miu-Fork_This-Karaoke_(Penpot).mp3";
import CassetteTapeControls from "./cassete-tape-controls";
import CassetteTapeStickers from "./cassete-tape-stickers";
import CassetteTapeWheels from "./cassete-tape-wheels";
import CassetteTapeBg from "./cassete-tape-bg";
import CassetteTapeCircles from "./cassete-tape-circles";

const playlist = [
  {
    title: "Fork This",
    artist: "Miuki Miu",
    src: song,
  },
  {
    title: "Fork This (Karaoke)",
    artist: "Miuki Miu",
    src: karaoke,
  },
  {
    title: "Fork This (Instrumental)",
    artist: "Miuki Miu",
    src: instrumental,
  },
];

function CassetteTape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);
  const analyserRef = useRef(null);
  const animationRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio();

    const audioElement = audioRef.current;
    audioElement.src = playlist[currentTrack].src;

    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    analyserRef.current = audioContext.createAnalyser();
    const audioSource = audioContext.createMediaElementSource(audioElement);

    audioSource.connect(analyserRef.current);
    audioSource.connect(audioContext.destination);

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const animateCircle = () => {
      analyserRef.current.getByteFrequencyData(dataArray);
      const average = calculateAverage(dataArray);

      // Update the circle's radius based on the audio data
      const radius = average / 2;
      circleRef.current.setAttribute("r", radius.toString());

      animationRef.current = requestAnimationFrame(animateCircle);
    };

    animateCircle();

    return () => {
      cancelAnimationFrame(animationRef.current);
      audioSource.disconnect();
      analyserRef.current.disconnect();
      audioRef.current.src = "";
    };
  }, [currentTrack]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.log("Play error:", error);
      });
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const playNextTrack = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % playlist.length);
  };

  const playPrevTrack = () => {
    setCurrentTrack((prevTrack) =>
      prevTrack === 0 ? playlist.length - 1 : prevTrack - 1
    );
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current = new Audio(playlist[currentTrack].src);
      audioRef.current.play().catch((error) => {
        console.log("Play error:", error);
      });
    }
  }, [currentTrack, isPlaying]);

  // useEffect(() => {
  //   if (isPlaying) {
  //     audioRef.current.play().catch((error) => {
  //       console.log("Play error:", error);
  //     });
  //   } else {
  //     audioRef.current.pause();
  //   }
  // }, [isPlaying]);

  const calculateAverage = (dataArray) => {
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
      sum += dataArray[i];
    }
    return sum / dataArray.length;
  };

  return (
    // <div>
    //   <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    //   <br />
    //   <button onClick={playNextTrack}>Next</button>
    //   <br />
    //   <button onClick={playPrevTrack}>Previous</button>
    //   <br />
    //   {playlist[currentTrack].artist} - {playlist[currentTrack].title}
    //   <svg width="200" height="200">
    //     <circle ref={circleRef} cx="100" cy="100" r="50" fill="red" />
    //   </svg>
    // </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="cassette-tape"
      width="655"
      height="442"
      fill="none"
      style={{ WebkitPrintColorAdjust: "exact" }}
      version="1.1"
      viewBox="884 271 655 442"
    >
      <style data-loading="true"></style>
      <CassetteTapeBg />
      <CassetteTapeCircles />
      <CassetteTapeStickers
        title={`${playlist[currentTrack].artist} - ${playlist[currentTrack].title}`}
      />

      <CassetteTapeWheels isPlaying={isPlaying} />

      <CassetteTapeControls
        nextTrack={playNextTrack}
        prevTrack={playPrevTrack}
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
      />

      <svg width="200" height="200">
        <circle ref={circleRef} cx="100" cy="100" r="50" fill="red" />
      </svg>
    </svg>
  );
}

export default CassetteTape;
