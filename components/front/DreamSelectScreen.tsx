import { dreamOptions, screenImages } from "@/lib/gameData";
import type { CSSProperties } from "react";

type DreamStyle = CSSProperties & {
  "--dream-image": string;
};

export default function DreamSelectScreen() {
  return (
    <section className="screen" id="dreamScreen">
      <img className="plate" src={screenImages.dreamScreen} alt="" />
      <div className="shade" />
      <article className="hud dream-select-card">
        <div className="dream-select-head">
          <h2>어떤 꿈을 먼저 꾸시겠습니까?</h2>
        </div>
        <div className="dream-grid">
          {dreamOptions.map((dream) => (
            <button
              key={dream.kicker}
              className={`dream${dream.disabled ? " disabled" : ""}`}
              id={"id" in dream ? dream.id : undefined}
              type="button"
              style={{ "--dream-image": `url('${dream.image}')` } as DreamStyle}
              aria-label={dream.ariaLabel}
            >
              <span className={`dream-state${dream.disabled ? "" : " playable"}`}>{dream.state}</span>
              <span className="dream-kicker">{dream.kicker}</span>
              <strong>{dream.title}</strong>
              <span className="dream-desc">{dream.description}</span>
              <span className="dream-meta">{dream.meta}</span>
            </button>
          ))}
        </div>
      </article>
    </section>
  );
}
