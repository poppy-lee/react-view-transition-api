import {
  startTransition,
  CSSProperties,
  unstable_ViewTransition as ViewTransition,
} from "react";

export function ToggleButton({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  const handleClickButton = () => {
    startTransition(() => {
      onChange(!checked);
    });
  };

  return (
    <ViewTransition>
      <button
        style={{
          ...buttonContainerStyle,
          justifyContent: "flex-" + (checked ? "end" : "start"),
          backgroundColor: checked
            ? "rgba(0, 255, 0, 0.15)"
            : "rgba(0, 0, 0, 0.1)",
        }}
        onClick={handleClickButton}
      >
        <ViewTransition>
          <div
            style={{
              ...buttonHandleStyle,
              backgroundColor: checked ? "green" : "black",
            }}
          />
        </ViewTransition>
      </button>
    </ViewTransition>
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
