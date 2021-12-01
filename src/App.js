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
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setText(data.split("\r\n")));
  }, []);
  const getRandomQuestion = () => {
    setRandomQuestion(text[Math.round(Math.random() * text.length - 1)]);
    console.log(question);
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
