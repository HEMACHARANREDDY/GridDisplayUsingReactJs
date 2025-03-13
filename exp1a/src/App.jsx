import React from "react";

export default function App() {
  const containerStyle = {
    display: "grid",
    width: "100vw",  // Ensures full page width
    height: "100vh", // Ensures full page height
    gridTemplateColumns: "33% 33% 33%",
    gridTemplateRows: "20% 20% 60%",
  };

  const boxStyle = {
    margin: "1px",
    padding: "10px",
    textAlign: "center",
    fontSize: "20px",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...boxStyle, backgroundColor: "blue", gridColumn: "1 / 4", gridRow: "1 / 2" }}>Header</div>
      <div style={{ ...boxStyle, backgroundColor: "brown", gridColumn: "1 / 3", gridRow: "2 / 3" }}>Search</div>
      <div style={{ ...boxStyle, backgroundColor: "chartreuse", gridColumn: "1 / 2", gridRow: "3 / 4" }}>Left Side Bar</div>
      <div style={{ ...boxStyle, backgroundColor: "crimson", gridColumn: "2 / 3", gridRow: "3 / 4" }}>Middle</div>
      <div style={{ ...boxStyle, backgroundColor: "deeppink", gridColumn: "3 / 4", gridRow: "2 / 4" }}>Right Side Bar</div>
    </div>
  );
}
