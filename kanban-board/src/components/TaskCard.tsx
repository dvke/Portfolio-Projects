import { TrashIcon } from "@heroicons/react/24/outline";
import { Id, Task } from "../types";
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

const TaskCard = ({ task, deleteTask, updateTask }: Props) => {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = { transition, transform: CSS.Translate.toString(transform) };

  function toggleEditMode() {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        className="bg-main-bg p-2.5 h-[10px] min-h-[100px] flex items-center justify-between rounded-xl text-left hover:ring-2 hover:ring-inset hover:ring-color-primary cursor-grab active:cursor-grabbing"
      >
        <textarea
          autoFocus
          className="w-full resize-none border-none rounded bg-transparent caret-color-primary outline-none"
          value={task.content}
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) toggleEditMode();
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />
      </div>
    );
  }

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-main-bg p-2.5 h-[10px] min-h-[100px] flex items-center justify-between rounded-xl border border-color-primary opacity-30"
      ></div>
    );
  }
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      onClick={toggleEditMode}
      className="bg-main-bg p-2.5 h-[10px] min-h-[100px] flex items-center justify-between rounded-xl text-left hover:ring-2 hover:ring-inset hover:ring-color-primary cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
    >
      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
        {task.content}
      </p>
      {/* Delete task button */}
      {mouseIsOver && (
        <button onClick={() => deleteTask(task.id)}>
          <TrashIcon className="stroke-gray-500 size-5 hover:stroke-rose-500" />
        </button>
      )}
    </div>
  );
};

export default TaskCard;
