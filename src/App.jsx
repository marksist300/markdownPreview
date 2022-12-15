import ReactMarkdown from "react-markdown";
import React, { useState } from "react";

import styles from "./components/textArea.module.css";
function App() {
  const [text, setText] = useState("");

  const textLog = e => {
    return setText(e.target.value);
  };

  return (
    <div className="App">
      <h1 className={styles.title}>Convert your markdown here 👇</h1>
      <textarea
        name="inputText"
        id=""
        onChange={textLog}
        className={styles.container}
      ></textarea>
      <div>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
