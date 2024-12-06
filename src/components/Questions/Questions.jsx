import React from "react";
import { useSelector } from "react-redux";
import quizData from "../../assets/data";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import './Questions.css';

const Questions = (props) => {
  const { handleAnswersFun } = props;
  // const dispatch = useDispatch();
  const { QuestionNo } = useSelector((state) => state.quiz);
  const question = quizData[QuestionNo];
  // const [popup, setPopup] = useState({
  //   isCorrect : false, 
  //   isOpen : false,
  //   description: ''
  // })

  // const closeUp = () => {
  //   setPopup({
  //     isCorrect : false, 
  //     isOpen : false, 
  //     description: ''
  //   });
  //   //checkModal(false);
  //   dispatch(handleAnswers({ isCorrect: popup.isCorrect }));
  // };

  const decodeStringToHtmlDom = (str) => {
    const doc = new DOMParser().parseFromString(str, "text/html");
    return doc.documentElement.textContent;
  };

  // const handleAnswersFun = (e) => {
  //   if (!e.target || !e.target.innerText) return;
  //   const ans = e.target?.innerText?.split(':')[0];
  //   const correctAnswer = question.answer.match(/\(#answer-([a-d])\)/)?.[1];

  //   const isCorrect = ans.toLowerCase() === correctAnswer;
  //   const description = question.answer.split('\n\n').slice(1).join("\n\n");

  //   setPopup({
  //     isCorrect,
  //     isOpen: true,
  //     description
  //   });
  //   checkModal(true)
  // };

  return(
    <div className="container">
      <h2>{question.title}</h2>
      <div className="code-highlight">
        <SyntaxHighlighter language="javascript" style={solarizedlight}>
          {decodeStringToHtmlDom(question.code)}
        </SyntaxHighlighter>
      </div>

      <div className="choices" onClick={(e) => handleAnswersFun(e)}>
        {question.choices?.map((choice, ind) => {
          return (
            <button 
              key={ind}
              className="choice-button"
            >
              {choice}
            </button>
          )
        })}
      </div>
      {/* <Popup
        isCorrect={popup.isCorrect}
        isOpen={popup.isOpen}
        description={popup.description}
        onClose={closeUp}
      /> */}
    </div>
  );
};

export default Questions