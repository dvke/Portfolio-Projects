import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Column, Id, Task } from "../types";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
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
  const [theme, setTheme] = useState("column-bg");
  const [activeTheme, setActiveTheme] = useState("default");

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

  const taskIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

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
      className={`bg-${theme} w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col`}
    >
      {/* Column title */}
      <div
        {...listeners}
        {...attributes}
        className="active:cursor-grabbing flex items-center justify-between bg-main-bg text-md h-[60px] cursor-grab rounded rounded-b-none p-3 border-column-bg border-4"
        onClick={() => setEditMode(true)}
      >
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center px-2 py-1 text-sm rounded-full">
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
        <SortableContext items={taskIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>

      {/* Column footer */}

      <div className="flex px-3 items-center justify-between">
        <button
          className="flex gap-2 items-center opacity-50 rounded-md p-4 border-x-column-bg group hover:opacity-100 duration-200"
          onClick={() => createTask(column.id)}
        >
          <PlusCircleIcon className="size-6 group-hover:scale-125 duration-200" />
          Add task
        </button>

        {/* theme selectors */}
        <div className="flex gap-2 justify-between">
          <button
            onClick={() => {
              setActiveTheme("default");
              setTheme("column-bg");
            }}
            className={`w-5 h-5 cursor-pointer rounded-full bg-column-bg ${activeTheme ===
              "default" && "border-2 border-white"}`}
          ></button>
          <button
            onClick={() => {
              setActiveTheme("purple");
              setTheme("purple-900");
            }}
            className={`w-5 h-5 cursor-pointer rounded-full bg-purple-900 ${activeTheme ===
              "purple" && "border-2 border-white"}`}
          ></button>
          <button
            onClick={() => {
              setActiveTheme("teal");
              setTheme("teal-900");
            }}
            className={`w-5 h-5 cursor-pointer rounded-full bg-teal-900 ${activeTheme ===
              "teal" && "border-2 border-white"}`}
          ></button>
          <button
            onClick={() => {
              setActiveTheme("pink");
              setTheme("pink-700");
            }}
            className={`w-5 h-5 cursor-pointer rounded-full bg-pink-700 ${activeTheme ===
              "pink" && "border-2 border-white"}`}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ColumnContainer;
