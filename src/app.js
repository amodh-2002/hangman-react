import { useState } from "react";
import GameBoard from "./game-board";
import "./app.css";

export default function App() {
  return (
    <div className="app-container">
      <h1>Welcome to Hangman</h1>
      <p>Do you want to play the game?</p>
      <div>
        <GameBoard secretWord="SuperMax" maxErrors={6} />
      </div>
    </div>
  );
}
