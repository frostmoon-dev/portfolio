export function Ticker({
  text,
  reverse = false,
  background,
  border,
  color,
  rotate = 0,
  padding = "0",
  durationClassName = "animate-ticker",
}: {
  text: string;
  reverse?: boolean;
  background: string;
  border: string;
  color: string;
  rotate?: number;
  padding?: string;
  durationClassName?: string;
}) {
  return (
    <div aria-hidden="true" style={{ overflow: "hidden", padding }}>
      <div
        style={{
          transform: `rotate(${rotate}deg)`,
          background,
          borderTop: `1px solid ${border}`,
          borderBottom: `1px solid ${border}`,
          overflow: "hidden",
        }}
      >
        <div
          className={durationClassName}
          style={{
            display: "flex",
            width: "max-content",
            animationDirection: reverse ? "reverse" : "normal",
            color,
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: ".24em",
            textTransform: "uppercase",
            lineHeight: "46px",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ flex: "none" }}>{text}</span>
          <span style={{ flex: "none" }}>{text}</span>
        </div>
      </div>
    </div>
  );
}
