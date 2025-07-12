"use client";

import { useState, useRef } from "react";

const animals = [
  { name: "Dog", sound: "/sounds/dog.mp3" },
  { name: "Cat", sound: "/sounds/cat.mp3" },
  { name: "Cow", sound: "/sounds/cow.mp3" },
  { name: "Sheep", sound: "/sounds/sheep.mp3" },
  { name: "Lion", sound: "/sounds/lion.mp3" },
  { name: "Elephant", sound: "/sounds/elephant.mp3" },
  { name: "Horse", sound: "/sounds/horse.mp3" },
  { name: "Duck", sound: "/sounds/duck.mp3" },
  { name: "Frog", sound: "/sounds/frog.mp3" },
  { name: "Pig", sound: "/sounds/pig.mp3" },
  { name: "Rooster", sound: "/sounds/rooster.mp3" },
  { name: "Owl", sound: "/sounds/owl.mp3" },
  { name: "Bee", sound: "/sounds/bee.mp3" },
  { name: "Wolf", sound: "/sounds/wolf.mp3" },
  { name: "Bear", sound: "/sounds/bear.mp3" },
  { name: "Monkey", sound: "/sounds/monkey.mp3" },
  { name: "Tiger", sound: "/sounds/tiger.mp3" },
  { name: "Rabbit", sound: "/sounds/rabbit.mp3" },
  { name: "Goat", sound: "/sounds/goat.mp3" },
  { name: "Turkey", sound: "/sounds/turkey.mp3" },
  { name: "Parrot", sound: "/sounds/parrot.mp3" },
  { name: "Crow", sound: "/sounds/crow.mp3" },
  { name: "Pigeon", sound: "/sounds/pigeon.mp3" },
  { name: "Swan", sound: "/sounds/swan.mp3" },
  { name: "Peacock", sound: "/sounds/peacock.mp3" },
  { name: "Camel", sound: "/sounds/camel.mp3" },
  { name: "Donkey", sound: "/sounds/donkey.mp3" },
  { name: "Goose", sound: "/sounds/goose.mp3" },
  { name: "Hawk", sound: "/sounds/hawk.mp3" },
  { name: "Eagle", sound: "/sounds/eagle.mp3" },
  { name: "Cheetah", sound: "/sounds/cheetah.mp3" },
  { name: "Zebra", sound: "/sounds/zebra.mp3" },
  { name: "Alligator", sound: "/sounds/alligator.mp3" },
  { name: "Bat", sound: "/sounds/bat.mp3" },
  { name: "Butterfly", sound: "/sounds/butterfly.mp3" },
  { name: "Cricket", sound: "/sounds/cricket.mp3" },
  { name: "Deer", sound: "/sounds/deer.mp3" },
  { name: "Dolphin", sound: "/sounds/dolphin.mp3" },
  { name: "Duckling", sound: "/sounds/duckling.mp3" },
  { name: "Flamingo", sound: "/sounds/flamingo.mp3" },
  { name: "Goatling", sound: "/sounds/goatling.mp3" },
  { name: "Hedgehog", sound: "/sounds/hedgehog.mp3" },
  { name: "Hippo", sound: "/sounds/hippo.mp3" },
  { name: "Kangaroo", sound: "/sounds/kangaroo.mp3" },
  { name: "Koala", sound: "/sounds/koala.mp3" },
  { name: "Llama", sound: "/sounds/llama.mp3" },
  { name: "Mole", sound: "/sounds/mole.mp3" },
  { name: "Moose", sound: "/sounds/moose.mp3" },
  { name: "Otter", sound: "/sounds/otter.mp3" },
  { name: "Penguin", sound: "/sounds/penguin.mp3" },
  { name: "Porcupine", sound: "/sounds/porcupine.mp3" },
  { name: "Raccoon", sound: "/sounds/raccoon.mp3" },
  { name: "Seal", sound: "/sounds/seal.mp3" },
  { name: "Skunk", sound: "/sounds/skunk.mp3" },
  { name: "Sloth", sound: "/sounds/sloth.mp3" },
  { name: "Snail", sound: "/sounds/snail.mp3" },
  { name: "Squirrel", sound: "/sounds/squirrel.mp3" },
  { name: "Turtle", sound: "/sounds/turtle.mp3" },
  { name: "Whale", sound: "/sounds/whale.mp3" },
  { name: "Woodpecker", sound: "/sounds/woodpecker.mp3" },
];

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = (sound: string) => {
    if (audioRef.current) {
      audioRef.current.src = sound;
      audioRef.current.play();
    }
  };

  return (
    <main className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Animal Sounds</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {animals.map((animal) => (
          <button
            key={animal.name}
            onClick={() => playSound(animal.sound)}
            className="bg-black text-white rounded-md py-3 px-4 hover:bg-gray-800 transition"
            aria-label={`Play sound of ${animal.name}`}
          >
            {animal.name}
          </button>
        ))}
      </div>
      <audio ref={audioRef} />
    </main>
  );
}
