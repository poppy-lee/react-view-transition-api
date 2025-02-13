import {
  CSSProperties,
  startTransition,
  useState,
  unstable_ViewTransition as ViewTransition,
} from "react";

export const App = () => {
  return (
    <div style={appContainerStyle}>
      <Button />
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

function Button() {
  const [isOn, setIsOn] = useState(false);

  const handleClickButton = () => {
    startTransition(() => {
      setIsOn(!isOn);
    });
  };

  return (
    <button
      style={{
        ...buttonContainerStyle,
        justifyContent: "flex-" + (isOn ? "end" : "start"),
        backgroundColor: isOn ? "rgba(255, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.1)",
      }}
      onClick={handleClickButton}
    >
      <ViewTransition>
        <div
          style={{
            ...buttonHandleStyle,
            backgroundColor: isOn ? "red" : "black",
          }}
        />
      </ViewTransition>
    </button>
  );
}
const buttonContainerStyle: CSSProperties = {
  display: "flex",
  width: 100,
  height: 50,
  padding: 10,
  border: "none",
  borderRadius: 50,
  alignItems: "center",
  cursor: "pointer",
};
const buttonHandleStyle: CSSProperties = {
  width: 30,
  height: 30,
  backgroundColor: "black",
  borderRadius: "50%",
};
