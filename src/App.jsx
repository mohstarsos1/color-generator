import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MdContentPaste } from "react-icons/md";

function App() {
  const [color, setColor] = useState("#CCCCCC");

  const handleGenerate = () => {
    const colors = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    const n1 = colors[Math.floor(Math.random() * colors.length)];
    const n2 = colors[Math.floor(Math.random() * colors.length)];
    const n3 = colors[Math.floor(Math.random() * colors.length)];
    const n4 = colors[Math.floor(Math.random() * colors.length)];
    const n5 = colors[Math.floor(Math.random() * colors.length)];
    const n6 = colors[Math.floor(Math.random() * colors.length)];
    const generatedColor = n1 + n2 + n3 + n4 + n5 + n6;
    setColor("#" + generatedColor);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    toast.success(`Color copied to clipboard`, { autoClose: 3000 });
  };

  return (
    <div className="hero is-fullheight" style={{ backgroundColor: color }}>
      <ToastContainer />
      <div className="hero-body has-text-centered">
        <div className="container">
          <div className="is-size-1 has-text-white mb-2 has-text-weight-bold">
            {color}
          </div>
          <button
            className="button mr-2 has-text-weight-bold"
            onClick={handleGenerate}
          >
            Generate Color
          </button>
          <button className="button has-text-weight-bold" onClick={handleCopy}>
            <MdContentPaste className="mr-1" />
            Copy Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
