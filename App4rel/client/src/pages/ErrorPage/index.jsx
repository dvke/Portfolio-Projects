import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="flex flex-col gap-7 items-center justify-center h-[100vh]"
      id="error-page"
    >
      <h1 className="text-red-600 text-[3rem] font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-slate-500">
          {// @ts-ignore
          error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}
