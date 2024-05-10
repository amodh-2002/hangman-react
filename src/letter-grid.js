import Letter from "./letter.js";

export default function GameBoard({ secretWord, guessedLetters }) {
  let letters = secretWord
    .split("") //['R','e','a','c','t']
    .map((letter, index) => {
      let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
      return <Letter value={letter} isShown={isShown} key={index} />;
    });

  return <div className="flex">{letters}</div>;
}
