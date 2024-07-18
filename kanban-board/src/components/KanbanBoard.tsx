import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Column } from "../types";

const KanbanBoard = () => {
  // State to track columns of type Column[]
  const [columns, setColumns] = useState<Column[]>([]);

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <div className="m-auto">
        <button
          className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-main-bg border border-column-bg p-4 ring-rose-500 hover:ring-1 flex gap-2"
          onClick={() => createNewColumn()}
        >
          <PlusCircleIcon className="size-6" />
          Add Column
        </button>
      </div>
    </div>
  );

  function createNewColumn() {
    // Function to generate new columns
    const newColumn: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, newColumn]);
    console.log(columns);
  }
  function generateId() {
    // Generate random number between 0 & 10,000
    return Math.floor(Math.random() * 100001);
  }
};

export default KanbanBoard;