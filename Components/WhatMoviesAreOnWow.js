"use client";

import { useState } from "react";

import YoutubeShortsSection from "@/Components/YoutubeShortsSection";
import PeopleSayAboutWowSection from "@/Components/PeopleSayAboutWowSection";



export default function WhatMoviesAreOnWow() {

  const [activeTab, setActiveTab] = useState("movies");

  return (
    <div className="bg-black py-20">

      <div className="container mx-auto px-6 md:px-20">

        <div className="relative mx-auto my-10 flex h-[70px] w-[650px] cursor-pointer rounded-2xl bg-gray-600 p-2">

          <div
            className={[
              "absolute inset-0 h-full w-[50%] rounded-xl bg-cyan-400 transition-all duration-300",

              activeTab === "people"
                ? "left-2"
                : "left-[calc(50%+4px)]",
            ].join(" ")}
          />

          <button
            onClick={() => setActiveTab("people")}
            className={[
              "relative z-10 w-1/2 rounded-xl  text-lg  font-semibold transition-colors duration-300",

              activeTab === "people"
                ? "text-black"
                : "text-white/70",
            ].join(" ")}
          >
            What People say about wow
          </button>

          <button
            onClick={() => setActiveTab("movies")}
            className={[
              "relative z-10 w-1/2 rounded-xl cursor pointer text-lg font-semibold transition-colors duration-300",

              activeTab === "movies"
                ? "text-black"
                : "text-white/70",
            ].join(" ")}
          >
            What Movies Are On Wow?
          </button>

        </div>

        {activeTab === "movies" ? (

          <div className="flex items-center p-6 mt-6 text-white opacity-55 text-5xl mx-auto">

            <div className="w-1/3">
              <h1>
                DISCOVER <br />
                OUR <br />
                POPULAR <br />
                MOVIES
              </h1>
            </div>

            <div className="w-2/3">
              <YoutubeShortsSection />
            </div>

          </div>

        ) : (

          <PeopleSayAboutWowSection />

        )}

      </div>

    </div>
  );
}