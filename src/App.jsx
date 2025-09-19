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

function CoreConcept({ title, description, img }) {
  return (
    <li>
      <img src={img} />
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
          <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} img={CORE_CONCEPTS[0].image}/>
          <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} img={CORE_CONCEPTS[1].image}/>
          <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} img={CORE_CONCEPTS[2].image}/>
          <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} img={CORE_CONCEPTS[3].image}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
