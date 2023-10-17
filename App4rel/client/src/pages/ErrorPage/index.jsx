import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className=" flex flex-col gap-7 items-center justify-center h-[100vh]"
      id="error-page"
    >
      <img src="./public/img/ErrorPageGraphic.avif" alt="error-graphic" />
    </div>
  );
}
