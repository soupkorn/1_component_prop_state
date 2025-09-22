import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import { useState } from "react";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    console.log("Hello World - selected!");
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </>
    );
  }

  return (
    <section id="examples">
      <h2>Example</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          jsx
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          state
        </TabButton>
      </menu>
      <div id="tab-content">{tabContent}</div>
    </section>
  );
}
