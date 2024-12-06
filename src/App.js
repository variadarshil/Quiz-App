import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import { useDispatch, useSelector } from 'react-redux';
import quizData from "./assets/data";
import { handleAnswers } from './store/quizSlice';
import Popup from './components/Popup/Popup';

function App() {
  //const [open, setOpen] = useState(false)
  const dispatch = useDispatch();
  const { QuestionNo } = useSelector((state) => state.quiz);
  const question = quizData[QuestionNo];
  const [popup, setPopup] = useState({
    isCorrect : false, 
    isOpen : false,
    description: ''
  })

  // const checkModal = (isOpen) => {
  //   setOpen(isOpen)
  // }

  const handleAnswersFun = (e) => {
    if (!e.target || !e.target.innerText) return;
    const ans = e.target?.innerText?.split(':')[0];
    const correctAnswer = question.answer.match(/\(#answer-([a-d])\)/)?.[1];

    const isCorrect = ans.toLowerCase() === correctAnswer;
    const description = question.answer.split('\n\n').slice(1).join("\n\n");

    setPopup({
      isCorrect,
      isOpen: true,
      description
    });
  };

  const closeUp = () => {
    setPopup({
      isCorrect : false, 
      isOpen : false, 
      description: ''
    });
    dispatch(handleAnswers({ isCorrect: popup.isCorrect }));
  };

  return (
    <>
      <div className={`${popup.isOpen ? 'disable-background': 'enable-background'}`}></div>
      <div className={"App"}>
        <Header />
        <Questions handleAnswersFun={handleAnswersFun} />
      </div>
      <Popup
        isCorrect={popup.isCorrect}
        isOpen={popup.isOpen}
        description={popup.description}
        onClose={closeUp}
      />
    </>
  );
}

export default App;
