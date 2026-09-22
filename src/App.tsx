import styled from "styled-components";
import LikeButton from "./LikeButton";
import PostPicker from "./PostPicker";
import LikelionPicker from "./LikelionPicker";

function App() {
  return (
    <AppContainer>
      <h1>신나는 9월 마지막 세션 실습</h1>
      {/* 여기에 각 실습에서 완성한 컴포넌트를 import해서 추가하세요 */}

      <Section>
        <SectionTitle>실습2</SectionTitle>
        <LikeButton />
      </Section>

      <Section>
        <SectionTitle>실습3</SectionTitle>
        <PostPicker />
      </Section>

      <Section>
        <SectionTitle>실습3-1</SectionTitle>
        <LikelionPicker />
      </Section>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  padding: 40px 24px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const SectionTitle = styled.h3`
  margin: 0;
  color: black;
`;

export default App;
