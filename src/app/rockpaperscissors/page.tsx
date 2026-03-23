"use client";

import { useState } from "react";

type Choice = "rock" | "paper" | "scissors";

export default function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [cpuChoice, setCpuChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState("");

  const choices: Choice[] = ["rock", "paper", "scissors"];

  const getCpuChoice = (): Choice => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
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
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Rock Paper Scissors</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}>
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleClick(choice)}
            style={{
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              cursor: "pointer",
              borderRadius: "8px",
            }}
          >
            {choice.toUpperCase()}
          </button>
        ))}
      </div>

      {userChoice && cpuChoice && (
        <div style={{ marginTop: "2rem" }}>
          <p><strong>You:</strong> {userChoice}</p>
          <p><strong>CPU:</strong> {cpuChoice}</p>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
}

