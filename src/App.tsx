import ListGroup from "./components/ListGroup.tsx";
import { useState, useEffect } from "react";
import InputBox from "./components/InputBox.tsx";

function App() {
  const [items, setItems] = useState<string[]>(() => {
    return JSON.parse(window.localStorage.getItem("TO_DO_LIST_ITEMS") || "[]");
  });

  useEffect(() => {
    window.localStorage.setItem("TO_DO_LIST_ITEMS", JSON.stringify(items));
  }, [items])

  const handleClick = () => {
    const inputBox = document.getElementById("inputBox") as HTMLInputElement;
    setItems([...items, inputBox.value]);
    inputBox.value = "";
  }

  const handleDoneClick = (item: string) => {
    const newItems = items.filter(i => i !== item);
    setItems(newItems);
  }

  return (
    <>
      <h1>To Do List</h1>
      <ListGroup onClick={handleDoneClick} items={items} />
      <InputBox onClick={handleClick} />
    </>
  )
}

export default App
