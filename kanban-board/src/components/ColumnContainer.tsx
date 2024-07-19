import { TrashIcon } from "@heroicons/react/24/outline";
import { Column, Id } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
}

const ColumnContainer = ({ column, deleteColumn, updateColumn }: Props) => {
  const [editMode, setEditMode] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = { transition, transform: CSS.Translate.toString(transform) };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-column-bg w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col opacity-50 border border-rose-500"
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-column-bg w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"
    >
      {/* Column title */}
      <div
        className="flex items-center justify-between bg-main-bg text-md h-[60px] cursor-grab rounded rounded-b-none p-3 border-column-bg border-4"
        onClick={() => setEditMode(true)}
      >
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center bg-column-bg px-2 py-1 text-sm rounded-full">
            0
          </div>
          {!editMode && column.title}
          {editMode && (
            <input
              className="bg-black  outline-none rounded-md caret-rose-500"
              value={column.title}
              autoFocus
              onChange={(e) => updateColumn(column.id, e.target.value)}
              onBlur={() => setEditMode(false)}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <button className="" onClick={() => deleteColumn(column.id)}>
          <TrashIcon className="stroke-gray-500 size-6  hover:stroke-rose-500 duration-200" />
        </button>
      </div>
      <div className="flex flex-grow">content</div>
      {/* Column footer */}
      <div>footer</div>
    </div>
  );
};

export default ColumnContainer;
