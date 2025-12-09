"use client";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true); // Add state

  useEffect(() => {
    fetch("/api/todo")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false); // Update state
      });
  }, []);

  if (loading) return <p className="text-gray-500">Loading tasks...</p>;

  return (
    <div className="border rounded-md p-4">
      {todos.map((t) => (
        <TodoItem key={t.id} text={t.text} />
      ))}
    </div>
  );
}
