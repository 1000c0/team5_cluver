# lib 폴더

`gameData.ts`, `gameState.ts`, `gameTypes.ts`는 Next.js 화면에서 쓰는 게임 데이터와 상태 기준 파일입니다.

- 배경 이미지 경로: `gameData.ts`의 `screenImages`, 각 scene의 `image`
- 증거 물품 이미지/설명/위치: `gameData.ts`의 각 scene 데이터
- 화면 전환 기준: `gameState.ts`
- 공통 타입: `gameTypes.ts`
- 실제 이미지 파일: `public/samunmong/assets`
- 화면 스타일: `app/game.css`

배경이나 증거 물품을 바꿀 때는 먼저 `gameData.ts`에서 경로와 위치 값을 수정하면 됩니다.
