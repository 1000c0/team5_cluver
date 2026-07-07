import { briefing } from "@/lib/gameData";

export default function BriefingScreen() {
  return (
    <section className="screen briefing-screen" id="briefingScreen">
      <article className="hud briefing-card">
        <h2>{briefing.title}</h2>
        <div className="briefing-copy" id="briefingCopy" aria-live="polite" />
        <button className="button primary briefing-start" id="startCase" type="button">
          {briefing.startLabel}
        </button>
      </article>
    </section>
  );
}
