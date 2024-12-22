import { Button } from "@/components/ui/button.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useEffect, useState } from "react";

interface ListGroupProps {
  items: string[];
  onClick: (item: string) => void;
}

function ListGroup({ items, onClick }: ListGroupProps) {
  const [checkedItems, setCheckedItems] = useState<string[]>(() => {
    return JSON.parse(window.localStorage.getItem("TO_DO_LIST_CHECKED_ITEMS") || "[]");
  });

  useEffect(() => {
    window.localStorage.setItem("TO_DO_LIST_CHECKED_ITEMS", JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleCheck = (checked: CheckedState, item: string) => {
    if (!checked && checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter(i => i !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  }

  return (
    <div className="flex flex-col items-center justify-between mb-4">
      {items.map((item, index) => {
        return (
          <div className="flex justify-between w-full">
            <div className="flex items-center space-x-2">
              <Checkbox checked={checkedItems.includes(item)} onCheckedChange={(checked) => handleCheck(checked, item)} id={`item-${index}`} />
              <label htmlFor={`item-${index}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{checkedItems.includes(item) ? <s>{item}</s> : <p>{item}</p>}</label>
            </div>
            <Button variant="ghost" type="button" className="" onClick={() => onClick(item)}>X</Button>
          </div>
        )
      })}
    </div>
  )
}

export default ListGroup;