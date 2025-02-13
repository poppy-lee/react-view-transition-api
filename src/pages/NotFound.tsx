import { CSSProperties } from "react";
import { Link } from "react-router";

export function NotFound() {
  return (
    <div style={notFoundContainerStyle}>
      <Link to="/">move to Home</Link>
    </div>
  );
}
const notFoundContainerStyle: CSSProperties = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
