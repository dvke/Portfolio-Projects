import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
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
import { Column, Id, Task } from "../types";
import ColumnContainer from "./ColumnContainer";
import TaskCard from "./TaskCard";

const KanbanBoard = () => {
  // State to track columns of type Column[]
  const [columns, setColumns] = useState<Column[]>([]);
  const columnsId = useMemo(() => columns.map((column) => column.id), [
    columns,
  ]);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 3 } })
  );

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <button
        className="fixed inset-5 h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-main-bg border border-column-bg p-4 ring-color-primary hover:ring-1 flex gap-2"
        onClick={handleCreateNewColumn}
      >
        <PlusCircleIcon className="size-6" />
        Add Column
      </button>
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        sensors={sensors}
      >
        <div className="m-auto flex gap-4">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map((column) => (
                <ColumnContainer
                  key={column.id}
                  updateColumn={handleUpdateColumn}
                  column={column}
                  deleteColumn={handleDeleteColumn}
                  createTask={handleCreateTask}
                  tasks={tasks.filter((task) => task.columnId === column.id)}
                  deleteTask={handleDeleteTask}
                  updateTask={handleUpdateTask}
                />
              ))}
            </SortableContext>
          </div>
        </div>

        {createPortal(
          <DragOverlay>
            {activeColumn && (
              // Unnecessary

              // <ColumnContainer
              //   column={activeColumn}
              //   updateColumn={handleUpdateColumn}
              //   deleteColumn={handleDeleteColumn}
              //   createTask={handleCreateTask}
              //   tasks={tasks.filter(
              //     (task) => task.columnId === activeColumn.id
              //   )}
              //   deleteTask={handleDeleteTask}
              //   updateTask={handleUpdateTask}
              // />
              <div className="bg-column-bg w-[350px] h-[500px] max-h-[500px] rounded-md flex items-center justify-center opacity-50 border border-color-primary">
                {activeColumn.title}
              </div>
            )}
            {activeTask && (
              <TaskCard
                task={activeTask}
                deleteTask={handleDeleteTask}
                updateTask={handleUpdateTask}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );

  function handleCreateNewColumn() {
    // Function to generate new columns
    const newColumn: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, newColumn]);
  }

  function handleDeleteColumn(columnId: Id) {
    const filteredColumns = columns.filter((column) => column.id !== columnId);
    setColumns(filteredColumns);

    const newTasks = tasks.filter((task) => task.columnId !== columnId);
    setTasks(newTasks);
  }

  function handleUpdateColumn(columnId: Id, title: string) {
    const newColumns = columns.map((column) => {
      if (column.id !== columnId) return column;
      return { ...column, title };
    });

    setColumns(newColumns);
    console.log(columns);
  }

  function handleCreateTask(columnId: Id) {
    const newTask: Task = {
      id: generateId(),
      columnId,
      content: `Task ${tasks.length + 1}`,
    };

    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(id: Id) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function handleUpdateTask(id: Id, content: string) {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) return task;
      return { ...task, content };
    });

    setTasks(newTasks);
  }

  function generateId() {
    // Generate random number between 0 & 10,000
    return Math.floor(Math.random() * 100001);
  }

  function handleDragStart(e: DragStartEvent) {
    const activeElement = e.active.data.current;
    if (activeElement?.type === "Column") {
      setActiveColumn(activeElement.column);
      return;
    }
    if (activeElement?.type === "Task") {
      setActiveTask(activeElement.task);
      return;
    }
  }

  function handleDragOver(e: DragOverEvent) {
    const { active, over } = e;

    if (!over) return;
    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";
    const isOverAColumn = over.data.current?.type === "Column";

    if (!isActiveATask) return;

    // Dropping task over tasks
    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        tasks[activeIndex].columnId = tasks[overIndex].columnId;

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }
    // Dropping task over column
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        tasks[activeIndex].columnId = over.id;

        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  }

  function handleDragEnd(e: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);
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
