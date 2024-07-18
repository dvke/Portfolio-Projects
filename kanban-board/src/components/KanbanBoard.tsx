import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";
import { Column, Id } from "../types";
import ColumnContainer from "./ColumnContainer";
import { DndContext, DragStartEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

const KanbanBoard = () => {
  // State to track columns of type Column[]
  const [columns, setColumns] = useState<Column[]>([]);
  const columnsId = useMemo(() => columns.map((column) => column.id), [
    columns,
  ]);

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <DndContext onDragStart={onDragStart}>
        <div className="m-auto flex gap-4">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map((column) => (
                <ColumnContainer
                  key={column.id}
                  column={column}
                  deleteColumn={deleteColumn}
                />
              ))}
            </SortableContext>
          </div>
          <button
            className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-main-bg border border-column-bg p-4 ring-rose-500 hover:ring-1 flex gap-2"
            onClick={() => createNewColumn()}
          >
            <PlusCircleIcon className="size-6" />
            Add Column
          </button>
        </div>
      </DndContext>
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

  function deleteColumn(columnId: Id) {
    const filteredColumns = columns.filter((column) => column.id !== columnId);
    setColumns(filteredColumns);
  }
  function generateId() {
    // Generate random number between 0 & 10,000
    return Math.floor(Math.random() * 100001);
  }

  function onDragStart(e: DragStartEvent) {
    console.log("Drag start", e);
  }
};

export default KanbanBoard;
