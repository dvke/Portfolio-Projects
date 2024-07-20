import { TrashIcon } from "@heroicons/react/24/outline";
import { Task } from "../types";
import { useState } from "react";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  return (
    <div
      className="bg-main-bg p-2.5 h-[10px] min-h-[100px] flex items-center justify-between rounded-xl text-left hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
    >
      {task.content}
      {/* Delete task button */}
      {mouseIsOver && (
        <button>
          <TrashIcon className="stroke-gray-500 size-5 hover:stroke-rose-500" />
        </button>
      )}
    </div>
  );
};

export default TaskCard;
