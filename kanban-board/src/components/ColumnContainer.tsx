import { TrashIcon } from "@heroicons/react/24/outline";
import { Column, Id } from "../types";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}

const ColumnContainer = ({ column, deleteColumn }: Props) => {
  return (
    <div className="bg-column-bg w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
      {/* Column title */}
      <div className="flex items-center justify-between bg-main-bg text-md h-[60px] cursor-grab rounded rounded-b-none p-3 border-column-bg border-4">
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-column-bg px-2 py-1 text-sm rounded-full">
            0
          </div>
          {column.title}
        </div>
        <button className="" onClick={() => deleteColumn(column.id)}>
          <TrashIcon className="stroke-gray-500 size-6 hover:stroke-white hover:bg-column-bg duration-100" />
        </button>
      </div>
      <div className="flex flex-grow">content</div>
      {/* Column footer */}
      <div>footer</div>
    </div>
  );
};

export default ColumnContainer;
