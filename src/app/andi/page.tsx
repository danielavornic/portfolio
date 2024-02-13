/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

export default function Andi() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const [audio, setAudio] = useState<any>(null);

  const getNoButtonText = () => {
    const phrases = [
      "No, kys",
      "Fă, are you sure?",
      "What a turbonormie you are",
      "Ok what if I asked nicely this time?",
      "S'il te plaît ma cherie!!",
      "With a cherry on top",
      "Andruka, what about choclate milk?",
      "PLEASE OOMFIET",
      "I'm begging you on my knees",
      "But :*(",
      "I'm killing myself",
      "Yep im dead",
      "ok u r talking to dana's ghost",
      "I'm haunting you now, say yes",
      "I promise I'll be a good oomfeo",
      "I'll do anything",
      "no </3",
      "no kys :3",
      "damn fă chiar nu vrei?",
      "no </3",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  useEffect(() => {
    // Initialize with default audio
    const initialAudio = new Audio("oarecare.mp3");
    initialAudio.load();
    setAudio(initialAudio);

    return () => {
      initialAudio.pause();
      initialAudio.currentTime = 0;
    };
  }, []);

  const handleYesClick = async () => {
    setYesPressed(true);

    if (audio) {
      audio.pause();
      audio.currentTime = 0; // Reset current time to ensure playback starts from the beginning
    }

    const newAudio = new Audio("suruceanu.mp3");
    newAudio.load();
    setAudio(newAudio);
    try {
      await newAudio.play();
    } catch (error) {
      console.error("Playback was interrupted:", error);
    }
  };

  const handleNoClick = async () => {
    setNoCount(noCount + 1);
    if (audio) {
      try {
        await audio.play();
      } catch (error) {
        console.error("Playback was interrupted:", error);
      }
    }
  };
  return (
    <div className="-mt-16 flex h-screen flex-col items-center text-lavender justify-center">
      {yesPressed ? (
        <>
          <Fireworks autorun={{ speed: 3 }} />
          <img
            src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/pepe-the-frog-1/sticker_13.png?45f2f168a42095ed37c40728e65f957f&d=200x200"
            alt="bear-kiss"
          />
          <div className="my-4 text-4xl font-bold">WOOOOOO OOMFIET!! :3</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://storage.googleapis.com/sticker-prod/9lnVIyBWWRejBz94AIVI/6.png"
            alt="bear-roses"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-subtext0 hover:text-pink hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-subtext0 hover:text-pink hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
