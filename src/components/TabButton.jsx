export default function TabButton({ children, onSelect, isSelected }) {
  function handleClick() {
    console.log("Hello World!");
  }
  console.log("TabButton COMPONENT - executed!");

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
