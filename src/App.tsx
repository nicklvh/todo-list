import ListGroup from "./components/ListGroup.tsx";
import { useState, useEffect } from "react";
import InputBox from "./components/InputBox.tsx";
import { Separator } from "@/components/ui/separator.tsx";

function App() {
  const [items, setItems] = useState<string[]>(() => {
    return JSON.parse(window.localStorage.getItem("TO_DO_LIST_ITEMS") || "{}");
  });

  useEffect(() => {
    window.localStorage.setItem("TO_DO_LIST_ITEMS", JSON.stringify(items));
  }, [items])

  const handleClick = () => {
    const inputBox = document.getElementById("inputBox") as HTMLInputElement;
    if (items.includes(inputBox.value)) return;
    setItems([...items, inputBox.value]);
    inputBox.value = "";
  }

  const handleDoneClick = (item: string) => {
    const newItems = items.filter(i => i !== item);
    setItems(newItems);
  }

  return (
    <div className="flex align-center justify-center items-center min-w-screen min-h-screen">
      <div className="w-1/4">
        <h1 className="text-2xl font-bold text-center h-full align-text-top">To Do List</h1>
        <ListGroup onClick={handleDoneClick} items={items}/>
        <Separator className="my-4" />
        <InputBox onClick={handleClick}/>
      </div>
    </div>
  )
}

export default App;
