import reactImg from "./assets/react-core-concepts.png";
import {CORE_CONCEPTS} from "./data.js"


const reactDescription = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {
  const description = reactDescription[getRandomInt(reactDescription.length)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

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
