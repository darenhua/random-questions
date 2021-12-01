import "./App.css";
import Label from "./Label.js";
import Button from "./Button.js";
import { useState, useEffect } from "react";
import questionsFile from "./questions.txt";

function App() {
  const [text, setText] = useState(null);
  const [question, setRandomQuestion] = useState("Good Morning");
  useEffect(() => {
    fetch(questionsFile)
      .then((response) => response.text())
      .then((data) => setText(data.split("?")));
  }, []);
  const getRandomQuestion = () => {
    console.log(Math.round(Math.random() * (text.length - 1)));
    setRandomQuestion(text[Math.round(Math.random() * text.length - 1)]);
  };
  return (
    <div className="App">
      <Label text={question} />
      <div className="container">
        <Button onClick={getRandomQuestion} />
        <Button className="right" onClick={getRandomQuestion} />
      </div>
    </div>
  );
}

export default App;
