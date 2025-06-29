"use client";

import { useTodo } from "@/hooks/use-todo";
import { Todo } from "@/types/todo.types";
import { useEffect } from "react";

const defaultTodos: Todo[] = [
  {
    id: "1",
    title: "Todo 1",
    description: "Todo Description",
    status: "pending",
    category: "Fitness",
    created_at: new Date(),
  },
];

export default function Home() {
  const { state, fetchTodos, createTodo } = useTodo();

  useEffect(() => {
    fetchTodos(defaultTodos);
  }, []);

  if (state.status === "fetching") {
    return <div>Loading todos...</div>;
  }

  return (
    <div>
      <button onClick={() => createTodo()}>add todo</button>
      {state.todos.map((todo) => (
        <div key={todo.id}>
          {todo.title} - {todo.description} - status: {todo.status}
        </div>
      ))}
    </div>
  );
}
