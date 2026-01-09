import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "../../../styles/flip-clock-custom.css";

export function CountdownRotator() {
  const now = new Date();
  let year = now.getFullYear();

  const target = new Date(year, 1, 23, 0, 0, 0);
  if (target.getTime() < now.getTime()) {
    year += 1;
  }

  const targetDate = new Date(year, 1, 23, 0, 0, 0).getTime();

  return (
      <div style={{ borderRadius: 2}}>
        <FlipClockCountdown
          to={targetDate}
          showLabels={true}
          renderMap={[true, true, true, true]} // dias, horas, minutos, segundos
          className="flip-clock"
          digitBlockStyle={{
            borderRadius: "30px",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.6)",
            width: 150,
            height: 200,
            fontSize: 100,
          }}
          dividerStyle={{
            color: "black",
            height: 2,
          }}
        />
      </div>
  );
}
