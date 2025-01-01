import ListGroup from "./components/ListGroup.tsx";
import { useEffect, useState } from "react";
import InputBox from "./components/InputBox.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function App() {
  const [items, setItems] = useState<string[]>(() => {
    return JSON.parse(window.localStorage.getItem("TO_DO_LIST_ITEMS") || "{}");
  });

  useEffect(() => {
    window.localStorage.setItem("TO_DO_LIST_ITEMS", JSON.stringify(items));
  }, [items])

  const handleClick = () => {
    const inputBox = document.getElementById("inputBox") as HTMLInputElement;
    if (items.includes(inputBox.value) || !inputBox.value) return;
    setItems([...items, inputBox.value]);
    inputBox.value = "";
  }

  const handleDoneClick = (item: string) => {
    const newItems = items.filter(i => i !== item);
    setItems(newItems);
  }

  const handleResetClick = () => {
    setItems([]);
  }

  return (
    <>
      <div>
        <Breadcrumb className="flex justify-center font-medium mt-5">
          <h1 className="font-bold mr-5">To Do List</h1>
          <BreadcrumbList className="ml-4">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex justify-center" onClick={handleResetClick}>Reset</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
            <BreadcrumbItem>
              <BreadcrumbLink href="https://github.com/nicklvh/todo-list">Source Code</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mt-10 flex justify-center min-w-screen">
        <div className="w-1/2">
          <ListGroup onClick={handleDoneClick} items={items}/>
          <Separator className="my-4"/>
          <InputBox onClick={handleClick}/>
        </div>
      </div>
    </>
  )
}

export default App;
