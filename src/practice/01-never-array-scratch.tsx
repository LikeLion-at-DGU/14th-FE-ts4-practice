// 실습 1. useState<T> — never[] 에러 직접 만나고 고치기
//
// 실습 방법: 아래 App 함수의 내용을 통째로 App.tsx에 잠깐 복붙(또는 손으로 타이핑)해서
// 에러를 직접 확인한 뒤, 다시 원래 App.tsx에서 제거하세요.

import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([]); // 일부러 이렇게 시작합니다

  const addFruit = () => {
    setFruits((prev) => [...prev, "사과"]); // <<< 이 줄에서 빨간 줄이 뜨는지 확인하기 !!
  };

  return <button onClick={addFruit}>과일 추가</button>;
}

export default App;
