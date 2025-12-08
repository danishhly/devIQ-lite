"use client";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/todo")
      .then((res) => res.json())
      .then(setTodos);
  }, []);

  return (
    <div className="border rounded-md p-4">
      {todos.map((t) => (
        <TodoItem key={t.id} text={t.text} />
      ))}
    </div>
  );
}
