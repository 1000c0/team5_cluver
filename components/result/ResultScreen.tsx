"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const verdictCopy = {
  success: {
    eyebrow: "DREAM RECORD",
    title: "지목이 기록되었습니다",
    body: "꿈의 안개가 잠시 걷히며 사건의 결이 또렷해집니다. 남은 단서와 진술을 정리해 다음 꿈으로 이어갈 수 있습니다.",
    seal: "기록 완료"
  },
  fail: {
    eyebrow: "DREAM RECORD",
    title: "아직 모순이 남아 있습니다",
    body: "꿈은 완전히 풀리지 않았습니다. 수사노트와 증거 가방을 다시 확인하고, 놓친 진술을 더 맞춰볼 수 있습니다.",
    seal: "재검토"
  }
} as const;

function getSafeSuspect(value: string | null) {
  return value?.trim() || "선택한 용의자";
}

export default function ResultScreen() {
  const searchParams = useSearchParams();
  const outcome = searchParams.get("outcome") === "success" ? "success" : "fail";
  const suspect = getSafeSuspect(searchParams.get("suspect"));
  const copy = verdictCopy[outcome];

  return (
    <main className={`result-screen result-${outcome}`}>
      <img className="result-backdrop" src="/samunmong/assets/main-screen-v2.png" alt="" />
      <div className="result-vignette" />

      <section className="result-panel" aria-labelledby="resultTitle">
        <p className="result-eyebrow">{copy.eyebrow}</p>
        <h1 id="resultTitle">{copy.title}</h1>
        <div className="result-suspect">
          <span>지목한 인물</span>
          <strong>{suspect}</strong>
        </div>
        <p>{copy.body}</p>

        <div className="result-actions">
          <Link className="button primary" href="/interrogation">
            취조실로 돌아가기
          </Link>
          <Link className="button" href="/dream">
            꿈 선택으로
          </Link>
        </div>

        <div className="result-seal" aria-hidden="true">
          {copy.seal}
        </div>
      </section>
    </main>
  );
}
