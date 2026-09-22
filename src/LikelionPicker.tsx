// 실습 3-응용. 멋사 태그 만들기
//
// 목표: PostPicker와 같은 배열 상태 + $active 패턴을 "기수"와 "역할", 두 그룹에
// 각각 적용해 "나를 소개하는 태그"를 완성하세요.
//
// 조건: 기수도 역할도 여러 개 선택 가능해야 합니다.
// (예: 14기 아사로 시작해 15기에 운영진이 된 경우 둘 다 선택)
// 즉 그룹별로 useState<string[]>([])를 각각 만들어서
// PostPicker와 동일한 토글 로직을 두 번 적용하세요.

import styled from "styled-components";

const GENERATIONS = ["11기", "12기", "13기", "14기", "15기"];
const ROLES = ["아사", "운영진"];

// TODO 1: Tag를 styled.button<{ $active: boolean }>로 만드세요. ($ 접두사 필수!)

function LikelionPicker() {
  // TODO 2: myGenerations, myRoles 두 개의 배열 상태를 각각 useState<string[]>([])로 만드세요.

  // TODO 3: 토글 함수를 만드세요. (PostPicker.tsx의 토글 로직과 동일한 형태)
  //         값과 setter를 매개변수로 받는 공통 함수 하나로 재사용해도 좋습니다.

  return (
    <div>
      <h4 style={{ color: "darkorange" }}>나는?</h4>
      <div>
        {GENERATIONS.map((gen) => (
          <span key={gen}>{gen}</span>
        ))}
      </div>
      <div>
        {ROLES.map((role) => (
          <span key={role}>{role}</span>
        ))}
      </div>
    </div>
  );
}

export default LikelionPicker;
