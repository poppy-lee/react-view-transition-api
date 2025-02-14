import { useState, startTransition, CSSProperties, ReactNode } from "react";

import { Slider } from "../components/Slider";
import { ToggleButton } from "../components/ToggleButton";
import { Link } from "react-router";

export function Home() {
  return (
    <div style={homeContainerStyle}>
      <ToggleButtonExample />
      <SliderExample />
      <PageTransitionExample />
    </div>
  );
}
const homeContainerStyle: CSSProperties = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  gap: 40,
};

function ToggleButtonExample() {
  const [checked, setChecekd] = useState(true);

  return (
    <Example title="ToggleButtonExample">
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
    </Example>
  );
}
function SliderExample() {
  return (
    <Example title="SliderExample">
      <Slider />
    </Example>
  );
}
function PageTransitionExample() {
  return (
    <Example title="PageTransitionExample">
      <Link to={`/${Date.now()}`}>move to random page</Link>
    </Example>
  );
}

function Example({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={exampleContainerStyle}>
      <h1 style={exampleTitleStyle}>{title}</h1>
      {children}
    </div>
  );
}
const exampleContainerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 10,
};
const exampleTitleStyle: CSSProperties = {
  fontSize: 20,
  fontWeight: 700,
};
