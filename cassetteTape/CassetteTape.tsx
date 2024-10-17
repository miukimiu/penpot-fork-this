"use client";
import React, { useState, useEffect, useRef } from "react";
import { CassetteTapeControls } from "./CassetteTapeControls";
import { CassetteTapeSticker } from "./CassetteTapeSticker";
import { CassetteTapeWheels } from "./CassetteTapeWheels";
import { CassetteTapeBackground } from "./CassetteTapeBackground";
import { CassetteTapeCircles } from "./CassetteTapeCircles";
import { LyricVisualizer } from "./LyricVisualizer";

const playlist = [
  {
    title: "Fork This",
    artist: "Miuki Miu",
    src: "/audio/Miuki_Miu-Fork_This_(Penpot).mp3",
  },
  {
    title: "Fork This (Karaoke)",
    artist: "Miuki Miu",
    src: "/audio/Miuki_Miu-Fork_This-Instrumental_(Penpot).mp3",
  },
  {
    title: "Fork This (Instrumental)",
    artist: "Miuki Miu",
    src: "/audio/Miuki_Miu-Fork_This-Karaoke_(Penpot).mp3",
  },
];

export const CassetteTape: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const initialRadius = 80;
  const [ellipseRadius, setEllipseRadius] = useState(initialRadius);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const source = useRef<MediaElementAudioSourceNode | null>(null);
  const analyzer = useRef<AnalyserNode | null>(null);
  const animationController = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const handleAudioPlay = () => {
      // AudioContext setup
      let audioContext = new AudioContext();
      if (!source.current && audioRef.current) {
        source.current = audioContext.createMediaElementSource(
          audioRef.current
        );
        analyzer.current = audioContext.createAnalyser();
        source.current.connect(analyzer.current);
        analyzer.current.connect(audioContext.destination);
      }

      visualizeData();
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("play", handleAudioPlay);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("play", handleAudioPlay);
      }
      if (animationController.current !== null) {
        cancelAnimationFrame(animationController.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      intervalRef.current = window.setInterval(() => {
        setCurrentTime(audioRef.current!.currentTime);
      }, 100); // Update every 100 milliseconds for more precision
    } else if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPlaying]);

  const visualizeData = () => {
    if (animationController.current !== null) {
      animationController.current = requestAnimationFrame(visualizeData);
    }

    if (audioRef.current?.paused) {
      if (animationController.current !== null) {
        cancelAnimationFrame(animationController.current);
      }
      return;
    }

    // Visualizing Audio Data
    const songData = new Uint8Array(140);
    analyzer.current?.getByteFrequencyData(songData);

    const average = getAverage(songData);

    let radius = initialRadius + average * 0.1;
    // radius = Math.min(radius, 100.5); // Limit radius to a maximum of 100

    setEllipseRadius(radius);
  };

  const getAverage = (dataArray: Uint8Array) => {
    const sum = dataArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const average = sum / dataArray.length;
    return average;
  };

  const playTrack = (trackIndex: number) => {
    setCurrentTrack(trackIndex);
    if (audioRef.current) {
      audioRef.current.src = playlist[trackIndex].src;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying && audioRef.current) {
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
      let audioContext = new AudioContext();

      if (!source.current && audioRef.current) {
        source.current = audioContext.createMediaElementSource(
          audioRef.current
        );
        analyzer.current = audioContext.createAnalyser();
        source.current.connect(analyzer.current);
        analyzer.current.connect(audioContext.destination);
      }

      if (animationController.current === null) {
        animationController.current = requestAnimationFrame(visualizeData); // Start the animation loop
      }
    };

    const handleAudioEnd = () => {
      const nextIndex = (currentTrack + 1) % playlist.length;
      playTrack(nextIndex);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("play", handleAudioPlay);
      audioRef.current.addEventListener("ended", handleAudioEnd);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("play", handleAudioPlay);
        audioRef.current.removeEventListener("ended", handleAudioEnd);
      }
      if (animationController.current !== null) {
        cancelAnimationFrame(animationController.current);
      }
    };
  }, [currentTrack]);

  const duration = audioRef.current?.duration;

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

        <CassetteTapeBackground />

        <CassetteTapeCircles
          isPlaying={isPlaying}
          initialRadius={initialRadius}
          ellipseRadius={ellipseRadius}
        />

        <CassetteTapeSticker
          title={`${playlist[currentTrack].artist} - ${playlist[currentTrack].title}`}
        />

        <CassetteTapeWheels isPlaying={isPlaying} />

        <CassetteTapeControls
          nextTrack={nextTrack}
          prevTrack={prevTrack}
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
        />
      </svg>
      <audio ref={audioRef} />

      <LyricVisualizer
        currentTime={currentTime}
        ellipseRadius={ellipseRadius}
        duration={duration || 0}
      />
    </>
  );
};
