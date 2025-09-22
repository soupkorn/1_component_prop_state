import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  console.log("APP COMPONENT - executed!");
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}
export default App;
