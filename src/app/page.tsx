"use client";

import { useState } from "react";
import Cards from "../../components/Cards";
import TopBar from "../../components/TopBar";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const cards = [
    { title: "Rock Paper Scissor", imageSrc: "/rockpaperscissors.png", link: "/rockpaperscissors" },
    { title: "Tic-Tac-Toe", imageSrc: "/tictactoe.png", link: "/tictactoe" },
  ];

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <TopBar onSearch={setSearchQuery} /> {/* search enabled here */}
      <Cards items={filteredCards} />
    </>
  );
}
