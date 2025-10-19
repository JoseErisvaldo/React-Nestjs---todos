import type { JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTodos from "./features/home/page/page-todo";

export default function RouterApp(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageTodos />} />
      </Routes>
    </BrowserRouter>
  );
}
