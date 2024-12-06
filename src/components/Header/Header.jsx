import React from 'react'; 
import { useSelector } from 'react-redux';
import quizData from "../../assets/data";
import './Header.css';

const Header = () => {
  const { Score, QuestionNo } = useSelector((state) => state.quiz)
  return(
    <header className="header">
      <h1>Quiz Game</h1>
      <p>
        Question No {QuestionNo + 1} / {quizData.length}  |  Score {Score}
      </p>
    </header>
  )
}

export default Header