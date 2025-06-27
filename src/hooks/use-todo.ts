"use client";
import {
  type TodoState,
  type TodoEvent,
  type FilterOption,
  Todo,
} from "../types/todo.types";
import { useReducer } from "react";

import { applyTodoFilters } from "../utils/todo-filters";

const defaultFilterOption: FilterOption = {
  searchTerm: "",
  sortBy: "created_at",
  sortDirection: "asc",
  category: "",
  status: "",
};

const initialState: TodoState = {
  status: "fetching",
  filterOption: defaultFilterOption,
  selectedTodosId: [],
};

const reducer = (state: TodoState, action: TodoEvent) => {
  switch (action.type) {
    case "CREATE_TODO":
      if (state.status === "idle") {
        const prevTodos = state.todos;
        const newTodo: Todo = {
          id: crypto.randomUUID(),
          title: action.payload.title,
          description: action.payload.description,
          category: action.payload.category,
          status: "pending",
          created_at: new Date(),
        };
      }
      return state;
  }
};
