import { CSSProperties, startTransition, useState } from "react";

import { ToggleButton } from "./components/ToggleButton";

export const App = () => {
  const [checked, setChecekd] = useState(true);

  return (
    <div style={appContainerStyle}>
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
    </div>
  );
};
const appContainerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
};
