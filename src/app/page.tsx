"use client";
import { useState } from "react";
import TopBar from "../../components/TopBar"
import Cards from "../../components/Cards"

export default function Home() {
   const [searchQuery, setSearchQuery] = useState("");

   const cards = [
    {
     title: "Rock Paper Scissor", imageSrc: "/rpc.png" },
  ];

    const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

    return (
        <>
        <TopBar onSearch={setSearchQuery} /> 
        <Cards items={filteredCards} />
    </>
    )
}
