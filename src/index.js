import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /**
   * React.StringMode 리액트에서 제공하는 검사모드,
   * dev 모드일 경우에만 디버깅 해당 태그로 감싸져있는 부분은 안전하지 않은 컴포넌트, 자손 및 불안요소를 검사
   */
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
