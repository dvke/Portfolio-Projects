import React from "react";

const Categories = () => {
  return (
    <section className="mx-5">
      <div className="grid grid-rows-2 grid-cols-4 gap-2 w-full h-[80vh] border">
        <div className="flex bg-slate-600 text-white border items-center justify-center">
          1
        </div>
        <div className="row-span-2 flex bg-slate-600 text-white border items-center justify-center">
          2
        </div>
        <div className="flex bg-slate-600 text-white border items-center justify-center">
          3
        </div>
        <div className="flex bg-slate-600 text-white border items-center justify-center">
          4
        </div>
        <div className="flex bg-slate-600 text-white border items-center justify-center">
          5
        </div>
        <div className="col-span-2 flex bg-slate-600 text-white border items-center justify-center">
          6
        </div>
      </div>
    </section>
  );
};

export default Categories;
