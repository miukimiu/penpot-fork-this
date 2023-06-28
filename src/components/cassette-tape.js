import React, { useState, useEffect, useRef } from "react";
import song from "../audio/Miuki_Miu-Fork_This_(Penpot).mp3";
import instrumental from "../audio/Miuki_Miu-Fork_This-Instrumental_(Penpot).mp3";
import karaoke from "../audio/Miuki_Miu-Fork_This-Karaoke_(Penpot).mp3";
import CassetteTapeControls from "./cassete-tape-controls";
import CassetteTapeSticker from "./cassete-tape-sticker";
import CassetteTapeWheels from "./cassete-tape-wheels";
import CassetteTapeBackground from "./cassete-tape-background";
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
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const initialRadius = 80;
  const [ellipseRadius, setEllipseRadius] = useState(initialRadius);

  const audioRef = useRef();
  const source = useRef();
  const analyzer = useRef();
  const animationController = useRef();

  useEffect(() => {
    const handleAudioPlay = () => {
      let audioContext = new AudioContext();
      if (!source.current) {
        source.current = audioContext.createMediaElementSource(
          audioRef.current
        );
        analyzer.current = audioContext.createAnalyser();
        source.current.connect(analyzer.current);
        analyzer.current.connect(audioContext.destination);
      }

      console.log({ source, analyzer });
      visualizeData();
    };

    audioRef.current.addEventListener("play", handleAudioPlay);

    return () => {
      audioRef.current.removeEventListener("play", handleAudioPlay);
      cancelAnimationFrame(animationController.current);
    };
  }, []);

  const visualizeData = () => {
    animationController.current = requestAnimationFrame(visualizeData);

    if (audioRef.current.paused) {
      cancelAnimationFrame(animationController.current);
      return;
    }

    const songData = new Uint8Array(140);
    analyzer.current.getByteFrequencyData(songData);

    const average = getAverage(songData);

    let radius = initialRadius + average * 0.1;
    // radius = Math.min(radius, 100.5); // Limit radius to a maximum of 100

    setEllipseRadius(radius);
  };

  const getAverage = (dataArray) => {
    const sum = dataArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const average = sum / dataArray.length;
    return average;
  };

  const playTrack = (trackIndex) => {
    setCurrentTrack(trackIndex);
    audioRef.current.src = playlist[trackIndex].src;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const currentTrackIndex = currentTrack % playlist.length;
      playTrack(currentTrackIndex);
    }
  };

  const nextTrack = () => {
    const nextIndex = (currentTrack + 1) % playlist.length;
    if (isPlaying) {
      playTrack(nextIndex);
    } else {
      setCurrentTrack(nextIndex);
    }
  };

  const prevTrack = () => {
    const prevIndex = (currentTrack - 1 + playlist.length) % playlist.length;
    if (isPlaying) {
      playTrack(prevIndex);
    } else {
      setCurrentTrack(prevIndex);
    }
  };

  useEffect(() => {
    const handleAudioPlay = () => {
      console.log("handleAudioPlay");
      let audioContext = new AudioContext();
      if (!source.current) {
        source.current = audioContext.createMediaElementSource(
          audioRef.current
        );
        analyzer.current = audioContext.createAnalyser();
        source.current.connect(analyzer.current);
        analyzer.current.connect(audioContext.destination);
      }

      console.log({ source, analyzer });
      visualizeData();
    };

    const handleAudioEnd = () => {
      const nextIndex = (currentTrack + 1) % playlist.length;
      playTrack(nextIndex);
    };

    audioRef.current.addEventListener("play", handleAudioPlay);
    audioRef.current.addEventListener("ended", handleAudioEnd);

    return () => {
      audioRef.current.removeEventListener("play", handleAudioPlay);
      audioRef.current.removeEventListener("ended", handleAudioEnd);
      cancelAnimationFrame(animationController.current);
    };
  }, [currentTrack]);

  return (
    <>
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
        {/* <CassetteTapeBackground /> */}
        <CassetteTapeCircles
          isPlaying={isPlaying}
          initialRadius={initialRadius}
          ellipseRadius={ellipseRadius}
        />
        <CassetteTapeSticker
          title={`${playlist[currentTrack].artist} - ${playlist[currentTrack].title}`}
        />

        {/* <CassetteTapeWheels isPlaying={isPlaying} /> */}

        <CassetteTapeControls
          nextTrack={nextTrack}
          prevTrack={prevTrack}
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
        />
      </svg>
      <audio ref={audioRef} />
    </>
  );
}

export default CassetteTape;
