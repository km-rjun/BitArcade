"use client";

import { useState } from "react";

type Choice = "rock" | "paper" | "scissors";

export default function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [cpuChoice, setCpuChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState("");

  const choices: Choice[] = ["rock", "paper", "scissors"];

  const getCpuChoice = (): Choice => {
    return choices[Math.floor(Math.random() * 3)];
  };

  const determineWinner = (user: Choice, cpu: Choice) => {
    if (user === cpu) return "Draw";

    if (
      (user === "rock" && cpu === "scissors") ||
      (user === "paper" && cpu === "rock") ||
      (user === "scissors" && cpu === "paper")
    ) {
      return "You Win!";
    }

    return "CPU Wins!";
  };

  const handleClick = (choice: Choice) => {
    const cpu = getCpuChoice();
    setUserChoice(choice);
    setCpuChoice(cpu);
    setResult(determineWinner(choice, cpu));
  };

  return (
    <div
      style={{
        height: "calc(100vh - 60px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* TOP → TITLE */}
<div style={{ padding: "1.5rem", textAlign: "center" }}>
  <h1
    style={{
      fontSize: "2.5rem",
      fontWeight: 700,
      margin: 0,
    }}
  >
    Rock Paper Scissors
  </h1>
</div>

      {/* MIDDLE → RESULTS */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {userChoice && cpuChoice ? (
          <>
            <p><strong>You:</strong> {userChoice}</p>
            <p><strong>CPU:</strong> {cpuChoice}</p>
            <h2>{result}</h2>
          </>
        ) : (
          <p>Make your move</p>
        )}
      </div>

      {/* BOTTOM → BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          paddingBottom: "3rem",
        }}
      >
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleClick(choice)}
            style={{
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              cursor: "pointer",
              borderRadius: "10px",
            }}
          >
            {choice.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

