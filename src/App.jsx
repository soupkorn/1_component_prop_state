import {CORE_CONCEPTS} from "./data.js"
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map(i => <CoreConcept {...i}/>)}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
