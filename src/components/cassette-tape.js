import React, { useState, useEffect } from "react";
import { useAudioPlayer } from "react-use-audio-player";
import song from "../audio/Miuki_Miu-Fork_This_(Penpot).mp3";
import instrumental from "../audio/Miuki_Miu-Fork_This_(Instrumental_109bpm).mp3";
import CassetteTapeControls from "./cassete-tape-controls";
import CassetteTapeStickers from "./cassete-tape-stickers";
import CassetteTapeWheels from "./cassete-tape-wheels";
import CassetteTapeBg from "./cassete-tape-bg";

const songs = [
  {
    title: "Fork This",
    artist: "Miuki Miu",
    src: song,
  },
  {
    title: "Fork This (Instrumental)",
    artist: "Miuki Miu",
    src: instrumental,
  },
];

function CassetteTape() {
  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    src,
    load,
    togglePlayPause: audioPlayerToogglePlayPause,
  } = useAudioPlayer({
    src: songs[songIndex].src,
    html5: true,
    autoplay: true,
    onend: () => {
      setSongIndex((index) => index + 1);
    },
  });

  console.log({ songIndex, src });

  // load song on mount
  useEffect(() => {
    isPlaying &&
      load(songs[songIndex].src, {
        autoplay: true,
        html5: true,
        format: "mp3",
        onend: () => setSongIndex(songIndex + 1),
      });
  }, [songIndex, load, isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    audioPlayerToogglePlayPause();
  };

  const nextTrack = () => {
    if (songIndex === songs.length - 1) {
      setSongIndex(0);
      load(songs[0].src, {
        autoPlay: true,
        html5: true,
        format: "mp3",
        onend: () => setSongIndex(1),
      });
      return;
    } else {
      setSongIndex(songIndex + 1);

      load(songs[songIndex + 1].src, {
        autoPlay: true,
        html5: true,
        format: "mp3",
        onend: () => setSongIndex(1),
      });
    }
  };

  const prevTrack = () => {
    if (songIndex === 0) {
      setSongIndex(songs.length - 1);
      load(songs[songs.length - 1].src, {
        autoPlay: true,
        html5: true,
        format: "mp3",
        onend: () => setSongIndex(songs.length - 2),
      });
    } else {
      setSongIndex(songIndex - 1);
      load(songs[songIndex - 1].src, {
        autoPlay: true,
        html5: true,
        format: "mp3",
        onend: () => setSongIndex(songs.length - 2),
      });
    }
  };

  return (
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
      <CassetteTapeStickers
        title={`${songs[songIndex].artist} - ${songs[songIndex].title}`}
      />
      <CassetteTapeControls
        nextTrack={nextTrack}
        prevTrack={prevTrack}
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
      />
      <CassetteTapeWheels isPlaying={isPlaying} />
    </svg>
  );
}

export default CassetteTape;
