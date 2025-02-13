import { useState, startTransition, CSSProperties } from "react";

import { Slider } from "../components/Slider";
import { ToggleButton } from "../components/ToggleButton";

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
    </div>
  );
}
const homeContainerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  overflow: "hidden",
};
