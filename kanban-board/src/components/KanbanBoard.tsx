import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Column, Id } from "../types";
import ColumnContainer from "./ColumnContainer";

const KanbanBoard = () => {
  // State to track columns of type Column[]
  const [columns, setColumns] = useState<Column[]>([]);
  const columnsId = useMemo(() => columns.map((column) => column.id), [
    columns,
  ]);
  const [activeColumn, setactiveColumn] = useState<Column | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 3 } })
  );

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        <div className="m-auto flex gap-4">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map((column) => (
                <ColumnContainer
                  key={column.id}
                  updateColumn={updateColumn}
                  column={column}
                  deleteColumn={deleteColumn}
                />
              ))}
            </SortableContext>
          </div>
          <button
            className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-main-bg border border-column-bg p-4 ring-rose-500 hover:ring-1 flex gap-2"
            onClick={createNewColumn}
          >
            <PlusCircleIcon className="size-6" />
            Add Column
          </button>
        </div>

        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                updateColumn={updateColumn}
                deleteColumn={deleteColumn}
              />
            )}
          </DragOverlay>,
          document.body
        )}
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
  }

  function deleteColumn(columnId: Id) {
    const filteredColumns = columns.filter((column) => column.id !== columnId);
    setColumns(filteredColumns);
  }

  function updateColumn(columnId: Id, title: string) {
    const newColumns = columns.map((column) => {
      if (column.id !== columnId) return column;
      return { ...column, title };
    });

    setColumns(newColumns);
    console.log(columns);
  }

  function generateId() {
    // Generate random number between 0 & 10,000
    return Math.floor(Math.random() * 100001);
  }

  function handleDragStart(e: DragStartEvent) {
    const activeColumn = e.active.data.current;
    if (activeColumn?.type === "Column") {
      setactiveColumn(activeColumn.column);
      return;
    }
  }

  function handleDragEnd(e: DragEndEvent) {
    const { active, over } = e;

    if (!over) return;
    const activeColumnId = active.id;
    const overColumnId = over.id;

    if (activeColumnId === overColumnId) return;

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex(
        (column) => column.id === activeColumnId
      );

      const overColumnIndex = columns.findIndex(
        (column) => column.id === overColumnId
      );

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }
};

export default KanbanBoard;
