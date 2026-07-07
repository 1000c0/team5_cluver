import { fieldOneScene } from "@/lib/gameData";
import type { CSSProperties } from "react";

type HotspotStyle = CSSProperties & {
  "--x": string;
  "--y": string;
  "--w": string;
  "--h": string;
};

function hotspotStyle(hotspot: (typeof fieldOneScene.hotspots)[number]): HotspotStyle {
  return {
    "--x": hotspot.x,
    "--y": hotspot.y,
    "--w": hotspot.w,
    "--h": hotspot.h
  };
}

export default function FieldOneScene() {
  return (
    <section className="screen" id={fieldOneScene.id}>
      <img className="plate" src={fieldOneScene.image} alt={fieldOneScene.alt} />
      <div className="shade" />

      {fieldOneScene.hotspots.map((hotspot) => (
        <button
          key={hotspot.id ?? hotspot.evidenceName}
          className={`hotspot object-outline${hotspot.className ? ` ${hotspot.className}` : ""}`}
          data-evidence-name={hotspot.evidenceName}
          style={hotspotStyle(hotspot)}
          id={hotspot.id}
          type="button"
          aria-label={hotspot.ariaLabel}
        />
      ))}

      <nav className="hud scene-dock" aria-label="현장 메뉴">
        {fieldOneScene.dock.map((action) => {
          const actionId = "id" in action ? action.id : undefined;
          return (
            <button
              key={actionId ?? action.className}
              className={`scene-chip ${action.className}`}
              id={actionId}
              data-go={action.goTo}
              type="button"
              aria-label={action.ariaLabel}
            >
              <img src={action.image} alt="" />
              <span className="sr-only">{action.label}</span>
            </button>
          );
        })}
      </nav>

      <aside className="hud inspect-pop" id={fieldOneScene.inspect.id} aria-live="polite">
        <img src={fieldOneScene.inspect.image} alt="" />
        <div>
          <strong>{fieldOneScene.inspect.title}</strong>
          <p>{fieldOneScene.inspect.text}</p>
        </div>
        <button className="button primary" id={fieldOneScene.inspect.buttonId} type="button">
          {fieldOneScene.inspect.buttonLabel}
        </button>
      </aside>
    </section>
  );
}
