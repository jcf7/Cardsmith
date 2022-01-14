import "./App.css"
import React, { useState, useEffect } from "react";
import Axios from "axios";






function App() {

  const [listOfCards, setListOfCards] = useState([])
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListOfCards(response.data);
    });
  }, []);

  const createCard = () => {
    Axios.post("http://localhost:3001/createCard", {
      question,
      answer,
    }).then((response) => {
      // console.log('success')
      setListOfCards([
        ...listOfCards,
        {
          question,
          answer,
        },
      ]);
    });
  };

  const showDiv = () => {
    div = document.getElementById('back');
    div.style.display = "block";
  }


  return (
    <div className="App">
      <h1>CODESMITH FLASHCARDS™</h1>
      <div className="cardsDisplay">
        {listOfCards.map((card) => {
          return (
            <div className ="thecard">
              <div className="thefront">
                <h2>Question: {card.question}</h2>
              </div>
              <div className="back">
                <h2>Answer: {card.answer}</h2>
              </div>
            </div>
          );
        })}
      </div>




      <div className="Creator">
        <input
          type="text"
          placeholder="Question..."
          onChange={(event) => {
            setQuestion(event.target.value);
          }}
          />
        <input
          type="text"
          placeholder="Answer..."
          onChange={(event) => {
            setAnswer(event.target.value);
          }}
        />
        
        <button onClick={createCard}> Create Flashcard </button>
      </div>
      <h1> COPYRIGHT 2022 JACK FITZGERALD©</h1>
    </div>
    
  );
}

export default App;




