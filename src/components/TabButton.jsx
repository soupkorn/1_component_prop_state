export default function TabButton({ children, onSelect }) {
  function handleClick() {
    console.log("Hello World!");
  }
  console.log("TabButton COMPONENT - executed!");

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
