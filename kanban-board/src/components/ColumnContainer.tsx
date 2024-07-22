import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Column, Id, Task } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import TaskCard from "./TaskCard";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  createTask: (columnId: Id) => void;
  tasks: Task[];
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

const ColumnContainer = ({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
}: Props) => {
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
        className="bg-column-bg w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col opacity-50 border border-color-primary"
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-column-bg w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"
    >
      {/* Column title */}
      <div
        {...listeners}
        {...attributes}
        className="active:cursor-grabbing flex items-center justify-between bg-main-bg text-md h-[60px] cursor-grab rounded rounded-b-none p-3 border-column-bg border-4"
        onClick={() => setEditMode(true)}
      >
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center bg-column-bg px-2 py-1 text-sm rounded-full">
            {!editMode && column.title}
          </div>
          {editMode && (
            <input
              className="bg-transparent outline-none rounded-md caret-color-primary"
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

      {/* Column task container */}
      <div className="flex flex-grow flex-col gap-2 p-2  overflow-x-hidden overflow-y-auto">
        {tasks.map((task) => (
          <TaskCard
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </div>

      {/* Column footer */}

      <button
        className="flex gap-2 items-center border border-column-bg rounded-md p-4 border-x-column-bg hover:text-color-primary active:bg-black"
        onClick={() => createTask(column.id)}
      >
        <PlusCircleIcon className="size-6" />
        Add task
      </button>
    </div>
  );
};

export default ColumnContainer;
