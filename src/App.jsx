import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    console.log("Hello World - selected!");
    setSelectedTopic(selectedButton);
  }
  console.log("APP COMPONENT - executed!");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((i, index) => (
              <CoreConcept key={index} {...i} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>jsx</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>state</TabButton>
          </menu>
          <div id="tab-content">
            {!selectedTopic && <p>Please select a topic.</p>}
            {selectedTopic && (
              <>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
