import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Info from "./pages/Info";
function App() {
  // logic
  const [ingredientList, setIngredientList] = useState([]);
  //사전준비
  //1)git bash 에서 git clone https://github.com/sminstar/learn-react.git  로컬에 불러오기 실행
  //2) node_modules 별도 설치 필요(용량이 커서) - node comand 터미널에서 yarn 명령어 수행

  // view
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info sendIngredientList={(data) => setIngredientList(data)}/>} />
      <Route path="/chat" element={<Chat ingredientList={ingredientList}/>} />
    </Routes>
  );
}

export default App;
