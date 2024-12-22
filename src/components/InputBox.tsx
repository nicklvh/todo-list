import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input.tsx";

interface InputBoxProps {
  onClick: () => void;
}

function InputBox({ onClick }: InputBoxProps) {
  return (
    <div className="flex flex-col gap-2">
        <label htmlFor="inputBox" className="text-sm font-medium leading-none">Add an item</label>
        <Input type="text" id="inputBox" />
        <Button type="submit" className="w-full" onClick={onClick}>Add</Button>
    </div>
  )
}

export default InputBox;