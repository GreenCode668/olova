import { render } from "./core/core.js";

// Button component with props
const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#0070f3",
        color: "white",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

// Using the Button component
const App = () => {
  return (
    <div>
      <h1>Component Example</h1>
      <Button text="Click me!" onClick={() => alert("Button clicked!")} />
      <Button
        text="Another button"
        onClick={() => console.log("Second button clicked")}
      />
    </div>
  );
};
