import { useState, startTransition, CSSProperties } from "react";

import { Slider } from "../components/Slider";
import { ToggleButton } from "../components/ToggleButton";
import { Link } from "react-router";

export function Home() {
  const [checked, setChecekd] = useState(true);

  return (
    <div style={homeContainerStyle}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => {
            setChecekd(event.target.checked);
          }}
        />
        external state change
      </label>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => {
            startTransition(() => {
              setChecekd(event.target.checked);
            });
          }}
        />
        external state change with startTransition()
      </label>
      <ToggleButton checked={checked} onChange={setChecekd} />
      <Slider />
      <Link to={`/${Date.now()}`}>move to random page</Link>
    </div>
  );
}
const homeContainerStyle: CSSProperties = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  overflow: "hidden",
};
