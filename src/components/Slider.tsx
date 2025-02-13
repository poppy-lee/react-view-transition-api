import {
  CSSProperties,
  startTransition,
  useState,
  unstable_ViewTransition as ViewTransition,
} from "react";

export function Slider() {
  const [page, setPage] = useState(0);

  return (
    <article style={sliderContainerStyle}>
      <section style={sliderListContainerStyle}>
        <ViewTransition>
          <ul
            style={{
              ...sliderListStyle,
              transform: `translate(${page * -300}px, 0px)`,
            }}
          >
            <li style={sliderListItemStyle}>1</li>
            <li style={sliderListItemStyle}>2</li>
            <li style={sliderListItemStyle}>3</li>
            <li style={sliderListItemStyle}>4</li>
            <li style={sliderListItemStyle}>5</li>
          </ul>
        </ViewTransition>
      </section>
      <nav>
        <button
          onClick={() => {
            startTransition(() => {
              setPage((page) => page - 1);
            });
          }}
        >
          left
        </button>
        <button
          onClick={() => {
            startTransition(() => {
              setPage((page) => page + 1);
            });
          }}
        >
          right
        </button>
      </nav>
    </article>
  );
}
const sliderContainerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 5,
};
const sliderListContainerStyle: CSSProperties = {
  position: "relative",
  display: "flex",
  flexDirection: "row",
  width: 300,
  height: 300,
  border: "1px solid red",
  overflow: "visible",
};
const sliderListStyle: CSSProperties = {
  position: "absolute",
  display: "flex",
  flexDirection: "row",
};
const sliderListItemStyle: CSSProperties = {
  display: "flex",
  flexShrink: 0,
  width: 300,
  height: 300,
  boxSizing: "border-box",
  border: "1px solid blue",
};
