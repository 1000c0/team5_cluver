import { Suspense } from "react";
import ResultScreen from "@/components/result/ResultScreen";

export default function ResultPage() {
  return (
    <Suspense fallback={<main className="result-screen" />}>
      <ResultScreen />
    </Suspense>
  );
}
