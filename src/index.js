import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./Page/loginPage/loginPage";
import Signup from "./components/signUpPage/signUpPage";
import Novel from "./components/novelContent/novelContent";
import Category from "./components/category";
import Detail from "./components/detail";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "./Page/myPage/myPage";
import Board from "./components/board/board";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/novel" element={<Novel />} />
        <Route path="/category/novel/detail/:id" element={<Detail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/board" element={<Board />} />

        <Route path="*" element={<div>없는페이지에요</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
