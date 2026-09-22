// 실습 3. 관심 글 담기 (오늘의 핵심 예제) — 배열 상태 + 동적 스타일링
//
// 목표: "이 게시글이 favorites 배열 안에 들어있는가"로 게시글 카드 스타일을 결정하세요.

import { useState } from "react";
import styled from "styled-components";

type Post = { id: number; title: string };

const POSTS: Post[] = [
  { id: 1, title: "오늘 저녁 뭐 먹지" },
  { id: 2, title: "스터디 모집합니다" },
  { id: 3, title: "생새우회 드실 분" },
  { id: 4, title: "육비 맛집 추천 받습니다" },
];

function BookmarkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 480px;
`;

// TODO 1: PostCard를 styled.div<{ $active: boolean }>로, PostTitle을 styled.h3<{ $active: boolean }>로 만드세요.
//         (커스텀 prop 이름 앞에는 반드시 $를 붙입니다!)
const PostCard = styled.div`
  background: white;
  border: 1.5px solid #dcdcdc;
  border-radius: 12px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  text-align: left;
  /* TODO 2: $active 값에 따라 background-color와 border-color를 흰색/회색 테두리 ↔ 파랑(#2f6feb)으로 분기하세요. */
`;

const PostTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: black;
  /* TODO 3: $active 값에 따라 color를 검정 ↔ 흰색으로 함께 분기하세요. (파란 배경 위 검정 글씨는 안 보여요!) */
`;

const FavoriteButton = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  cursor: pointer;
  background: white;
  color: black;
  font-size: 14px;
  font-weight: 500;
`;

function PostPicker() {
  // TODO 4: useState<Post[]>([])로 favorites 상태를 만드세요. (빈 배열엔 제네릭 필수!)

  // TODO 5: toggleFavorite 함수를 만드세요.
  //         힌트: prev.some((p) => p.id === post.id) ? prev.filter(...) : [...prev, post]
  //         문자열이 아니라 객체라서 .includes() 대신 .some()으로 id를 비교합니다.
  // 여기에 만들기 >>

  return (
    <PostList>
      {POSTS.map((post) => (
        <PostCard key={post.id} $active={false}>
          <PostTitle $active={false}>{post.title}</PostTitle>
          <FavoriteButton onClick={() => {}}>
            <BookmarkIcon />
            담기
          </FavoriteButton>
        </PostCard>
      ))}
    </PostList>
  );
}

export default PostPicker;
