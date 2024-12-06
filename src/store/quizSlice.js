import { createSlice } from "@reduxjs/toolkit";
import quizData from "../assets/data";

const initialState = JSON.parse(localStorage.getItem("quizData")) || {
  QuizComplted: false,
  Score: 0,
  QuestionNo: 0
}

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    handleAnswers: (state, action) => {
      const { isCorrect } = action.payload;
      if (isCorrect) state.Score += 1;
      state.QuizComplted = state.QuestionNo >= quizData.length - 1;
      if (!state.QuizComplted) {
        state.QuestionNo += 1;
      }
      localStorage.setItem("quizData", JSON.stringify(state))
    }
  }
});

export const { handleAnswers } = quizSlice.actions;
export default quizSlice.reducer;