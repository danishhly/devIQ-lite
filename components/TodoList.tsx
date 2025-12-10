"use client";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/todo")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4 text-gray-500 animate-pulse">Loading tasks...</div>;
  return (
    <div className="border rounded-md p-4">
      {todos.map((t) => (
        <TodoItem key={t.id} text={t.text} />
      ))}
    </div>
  );
}
