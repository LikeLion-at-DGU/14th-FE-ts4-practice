// 실습 2. 좋아요 버튼 — boolean 상태로 동적 스타일링하기
//
// 목표: liked(boolean) 값에 따라 버튼 색과 이모지가 바뀌는 컴포넌트를 완성하세요.

import { useState } from "react";
import styled from "styled-components";

// TODO 1: styled 컴포넌트가 받을 props 타입을 <{ $liked: boolean }>로 명시하세요.
//         (커스텀 prop 이름 앞에는 반드시 $를 붙입니다!)
const StyledLike = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  /* TODO 2: $liked 값에 따라 color를 'red' / 'gray'로 분기하세요. */
`;

function LikeButton() {
  // TODO 3: useState로 liked 상태를 만드세요. (초기값 false, 제네릭 불필요)

  // TODO 4: 클릭할 때마다 liked를 토글하는 함수를 만드세요.
  //         힌트: setLiked((v) => !v)

  return (
    <StyledLike $liked={false} onClick={() => {}}>
      🩶 좋아요
    </StyledLike>
  );
}

export default LikeButton;

// ✅ 체크포인트
// [ ] $liked boolean이 styled 컴포넌트에 넘어가 색이 토글되는 걸 확인했다
// [ ] 일부러 $liked를 liked로 바꿔서(접두사 제거) 콘솔 경고를 직접 봤다
