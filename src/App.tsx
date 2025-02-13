import { CSSProperties, useState } from "react";

import { ToggleButton } from "./components/ToggleButton";

export const App = () => {
  const [checked, setChecekd] = useState(true);

  return (
    <div style={appContainerStyle}>
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
};
